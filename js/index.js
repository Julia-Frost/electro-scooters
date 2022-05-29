const map = L.map("map").setView([55.7537, 37.6198], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

L.marker([55.7537491511233, 37.61986158930323])
  .addTo(map)
  .bindPopup("АТБ-маркет")
  .openPopup();
