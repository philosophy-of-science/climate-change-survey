const data = require("../responses.json");

export function writeCommentsToDom() {
  data.forEach((comments) => {
    const { id, responses, question } = comments;

    const container = document.getElementById(id).parentElement;
    console.log(container);
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("container-comments");
    const titleEl = document.createElement("p");
    titleEl.classList.add("comments-title");
    const title = question || "Comments";
    titleEl.textContent = title;
    commentContainer.append(titleEl);
    const swiperContainer = document.createElement("div");
    swiperContainer.classList.add("swiper-container");
    commentContainer.append(swiperContainer);
    const wrapper = document.createElement("div");
    wrapper.classList.add("swiper-wrapper");

    swiperContainer.append(wrapper);
    responses.forEach((response) => {
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      const p = document.createElement("p");
      p.textContent = response;
      div.append(p);
      wrapper.append(div);
    });
    const pagination = document.createElement("div");
    pagination.classList.add("swiper-pagination");
    swiperContainer.append(pagination);
    const prev = document.createElement("div");
    prev.classList.add("swiper-button-prev");
    swiperContainer.append(prev);

    const next = document.createElement("div");
    next.classList.add("swiper-button-next");
    swiperContainer.append(next);
    container.insertAdjacentElement("afterend", commentContainer);
    const swiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      loop: true,

      //   If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },

      //   Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  });
}
