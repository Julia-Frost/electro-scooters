const map = L.map("map").setView([55.7537, 37.6198], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

L.marker([55.7537491511233, 37.61986158930323])
  .addTo(map)
  .bindPopup("АТБ-маркет")
  .openPopup();

const createElem = (tag, attr) => {
  const elem = document.createElement(tag);

  return Object.assign(elem, { ...attr });
};

const createModal = (title, description) => {
  const overlayElem = createElem("div", { className: "modal" });
  const modalElem = createElem("div", { className: "modal__block" });
  const modalContainerElem = createElem("div", {
    className: "modal__container",
  });

  const titleElem = createElem("h2", {
    className: "modal__title",
    textContent: `Заказать ${title}`,
  });

  const descriptionElem = createElem("p", {
    className: "modal__desctiprion",
    textContent: description,
  });

  const formElem = createElem("form", {
    className: "modal__form",
    method: "post",
    action: "https://jsonplaceholder.typicode.com/posts",
  });

  modalContainerElem.append(titleElem, descriptionElem);

  modalElem.append(modalContainerElem);

  overlayElem.append(modalElem);
  return overlayElem;
};

const productTitle = document.querySelectorAll(".product__title");
const productDescription = document.querySelectorAll(".product__description");
const productButton = document.querySelectorAll(".product__button");

for (let i = 0; i < productButton.length; i++) {
  productButton[i].addEventListener("click", () => {
    const title = productTitle[i].textContent;
    const description = productDescription[i].textContent;

    const modal = createModal(title, description);

    document.body.append(modal);
  });
}
