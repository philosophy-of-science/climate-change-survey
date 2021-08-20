// Sidebar

const CARET =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>';

let options = {
  threshold: 0.75,
  rootMargin: "0px 0px -25%",
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
const graphs = Array.from(document.querySelectorAll(".container"));

function createDom(val) {
  val.forEach((node) => {
    observer.observe(node.value);
    let text = node.value.textContent;
    if (node.value.classList.contains("container")) {
      text = node.value.querySelector(".apexcharts-title-text").textContent;
    }
    const id = node.value.id;
    const a = document.createElement("a");
    a.setAttribute("href", `#${id}`);
    a.setAttribute("data-group", node.parentId);
    a.textContent = text;
    a.classList.add("level-" + node.level);
    aside.append(a);
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
    const intersected = document.querySelector(`a[href="#${entry.target.id}"]`);

    if (entry.isIntersecting) {
      intersected.classList.add("observed");

      if (intersected.classList.contains("level-2")) {
        prevLevel && prevLevel.classList.remove("parent");
      }

      if (intersected.classList.contains("level-3")) {
        const newPrevLevel = getPrevSibling(intersected, "level-2");
        if (newPrevLevel !== prevLevel) {
          newPrevLevel && newPrevLevel.classList.add("parent");
          prevLevel && prevLevel.classList.remove("parent");
        }
        prevLevel = newPrevLevel;
      }

      const group = intersected.dataset.group;
      const groupEls = intersected.parentElement.querySelectorAll(
        `[data-group="${group}"]`
      );
      groupEls.forEach((el) => el.classList.add("show"));

      prev = intersected;
      prevGroup = groupEls;
    }
  });
};

let observer = new IntersectionObserver(callback, options);

export function populateSidebar() {
  window.addEventListener("resize", populateSidebar);
  const w = document.documentElement.clientWidth;
  if (w < 1200 || sidebarIsPopulated) {
    return;
  }
  sidebarIsPopulated = true;
  h2s.forEach((el) => findParent(el, null, "h2", 1, "parentElement"));
  h3s.forEach((el) =>
    findParent(el, "h2", "h3", 2, "parentElement", "parentElement")
  );
  graphs.forEach((el) => findParent(el, "h3", "graph", 3, "parentElement"));
  const tree = makeTree(idMap, null);
  createDom(tree);
}
