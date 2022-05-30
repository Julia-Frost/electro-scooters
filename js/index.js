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

const productTitle = document.querySelectorAll(".product__title");
const productDescription = document.querySelectorAll(".product__description");
const productButton = document.querySelectorAll(".product__button");

for (let i = 0; i < productButton.length; i++) {
  console.log(productTitle[i]);
}
