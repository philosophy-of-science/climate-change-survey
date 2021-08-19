// Sidebar

const CARET =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>';

let options = {
  threshold: 0.75,
  rootMargin: "0px 0px -25%",
};

let prev = null;

let callback = (entries, observer) => {
  if (prev && entries.some((entry) => entry.isIntersecting)) {
    // prev.closest(".section-element").classList.remove("observed");
    prev.classList.remove("observed");

    // prev.parentElement.remove("observed");
  }
  entries.forEach((entry) => {
    const intersected = document.querySelector(`a[href="#${entry.target.id}"]`);

    if (entry.isIntersecting) {
      intersected.classList.add("observed");
      const dataGroup = intersected.dataset.group;
      console.log(dataGroup);

      // intersected.parentElement.add("observed");
      prev = intersected;
    }
  });
};

let observer = new IntersectionObserver(callback, options);

export function populateSidebar() {
  let id = 0;
  const idMap = [];

  const h2s = Array.from(document.querySelectorAll("h2"));
  const h3s = Array.from(document.querySelectorAll("h3"));
  const graphs = Array.from(document.querySelectorAll(".container"));

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

  h2s.forEach((el) => findParent(el, null, "h2", 1, "parentElement"));
  h3s.forEach((el) =>
    findParent(el, "h2", "h3", 2, "parentElement", "parentElement")
  );
  graphs.forEach((el) => findParent(el, "h3", "graph", 3, "parentElement"));

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

  const tree = makeTree(idMap, null);

  const aside = document.querySelector("aside");

  function createDom(val) {
    val.forEach((node) => {
      console.log(node);
      observer.observe(node.value);
      let text = node.value.textContent;
      if (node.value.classList.contains("container")) {
        text = node.value.querySelector(".apexcharts-title-text").textContent;
      }
      const id = node.value.id;

      const a = document.createElement("a");
      a.setAttribute("href", `#${id}`);

      a.textContent = text;
      a.classList.add("level-" + node.level);
      aside.append(a);
      if (node.children.length) {
        createDom(node.children);
      }
    });
  }

  createDom(tree);
  // const top = h2s.map((ent) => new TreeNode(ent));

  // top.forEach((ent) => {
  //   console.log(ent.value.querySelectorAll("h3"));
  //   const descendents = Array.from(
  //     ent.value.parentElement.querySelectorAll("h3")
  //   );
  //   descendents.forEach((desc) => ent.descendents.push(new TreeNode(desc)));
  //   console.log(top);
  // });
}
