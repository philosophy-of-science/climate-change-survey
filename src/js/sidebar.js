// Sidebar

let options = {
  threshold: 0.5,
  rootMargin: "-100px 0px",
};

let prev = null;

let callback = (entries, observer) => {
  if (prev && entries.some((entry) => entry.isIntersecting)) {
    prev.closest(".section-element").classList.remove("observed");
    prev.classList.remove("current");
  }
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect

    const intersected = document.querySelector(
      `a[data-target="${entry.target.id}"]`
    );

    if (entry.isIntersecting) {
      intersected.closest(".section-element").classList.add("observed");
      intersected.classList.add("current");
      prev = intersected;
    }
  });
};

let observer = new IntersectionObserver(callback, options);

export function populateSidebar() {
  const aside = document.querySelector("aside");
  const headings = document.querySelectorAll("main h2");

  const caret =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>';

  for (const heading of headings) {
    const graphs = heading.parentElement.querySelectorAll(
      ".container > div:first-child"
    );

    const ul = document.createElement("ul");

    graphs.forEach((el) => {
      observer.observe(el);

      const id = el.id;
      const link = document.createElement("a");
      link.dataset.target = id;
      link.setAttribute("href", `#${id}`);
      const text = el.querySelector(".apexcharts-title-text").textContent;
      const li = document.createElement("li");
      link.textContent = text;
      li.append(link);
      ul.append(li);
    });

    const text = heading.textContent;

    const id = heading.id;
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("section-element");
    const a = document.createElement("a");
    a.textContent = text;
    a.setAttribute("href", `#${id}`);
    const span = document.createElement("span");
    span.innerHTML = caret;
    p.append(span);
    p.appendChild(a);
    div.append(p);
    div.append(ul);
    aside.appendChild(div);
  }
}
