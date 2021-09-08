// Sidebar

let options = {
  threshold: 0.5,
  // rootMargin: "0px 0px -25%",
};

let prev = null;
let prevGroup = null;
let prevLevel = null;
let id = 0;
const aside = document.querySelector("aside");
const idMap = [];
let sidebarIsPopulated = false;

const h2s = Array.from(document.querySelectorAll("h2"));
const h3s = Array.from(document.querySelectorAll("h3"));
const h4s = Array.from(document.querySelectorAll("h4"));

function createDom(val) {
  val.forEach((node) => {
    observer.observe(node.value);
    let text = node.value.textContent;
    if (node.value.classList.contains("container")) {
      text = node.value.previousElementSibling.textContent;
    }
    const id = node.value.id;
    const p = document.createElement("p");
    p.id = `target-${id}`;
    p.setAttribute("data-group", node.parentId);
    p.textContent = text;
    p.classList.add("level-" + node.level);
    aside.append(p);
    if (node.children.length) {
      createDom(node.children);
    }
  });
}

function findParent(el, target, text, level, ...parentQuery) {
  let parentEl = el;
  for (const p in parentQuery) {
    parentEl = parentEl.parentElement;
  }
  const parent = target ? parentEl.querySelector(target) : null;
  el.id = id;
  addToIdMap(el, parent, text, level);
  id++;
}

function addToIdMap(el, parent, text, level) {
  idMap.push({
    id: el.id,
    value: el,
    parent,
    parentId: parent ? parent.id : null,
    text,
    level,
  });
}

function makeTree(nodes, parentId) {
  return nodes
    .filter((node) => node.parentId === parentId)
    .reduce((tree, node) => {
      return [
        ...tree,
        {
          ...node,
          children: makeTree(nodes, node.id),
        },
      ];
    }, []);
}

function getPrevSibling(current, target) {
  const previousSib = current.previousElementSibling;
  const doesItMatch = previousSib.classList.contains(target);

  if (doesItMatch) {
    return previousSib;
  }
  return getPrevSibling(previousSib, target);
}

let callback = (entries, observer) => {
  if (prev && entries.some((entry) => entry.isIntersecting)) {
    prev.classList.remove("observed");
    prevGroup.forEach((el) => el.classList.remove("show"));
  }
  entries.forEach((entry) => {
    const intersected = document.querySelector(`#target-${entry.target.id}`);
    console.log(intersected);
    if (entry.isIntersecting) {
      intersected.classList.add("observed");

      if (intersected.classList.contains("level-3")) {
        const newPrevLevel = getPrevSibling(intersected, "level-2");
        newPrevLevel && newPrevLevel.classList.add("parent");
        if (newPrevLevel !== prevLevel) {
          prevLevel && prevLevel.classList.remove("parent");
        }
        prevLevel = newPrevLevel;
      } else {
        prevLevel && prevLevel.classList.remove("parent");
      }

      const group = intersected.dataset.group;

      const groupEls = intersected.parentElement.querySelectorAll(
        `[data-group="${group}"]`
      );

      groupEls.forEach((el) => el.classList.add("show"));

      prev = intersected;
      prevGroup = groupEls;
    } else {
      intersected.classList.remove("observed");
      // intersected.classList.remove("parent");
    }
  });
};

let observer = new IntersectionObserver(callback, options);

export function populateSidebar() {
  window.addEventListener("resize", populateSidebar);
  const w = document.documentElement.clientWidth;
  if (w < 1024 || sidebarIsPopulated) {
    return;
  }
  sidebarIsPopulated = true;
  h2s.forEach((el) => findParent(el, null, "h2", 1, "parentElement"));
  h3s.forEach((el) =>
    findParent(el, "h2", "h3", 2, "parentElement", "parentElement")
  );
  h4s.forEach((el) => findParent(el, "h3", "h4", 3, "parentElement"));
  const tree = makeTree(idMap, null);
  createDom(tree);
}
