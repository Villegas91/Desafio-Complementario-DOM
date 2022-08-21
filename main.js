let products = [
  {
    id: 0,
    marca: "Lenovo",
    precio: "$ 100000",
    img: "https://st2.depositphotos.com/1164721/6301/i/600/depositphotos_63016343-stock-photo-laptop-with-smart-phone-on.jpg",
  },
  { id: 1, marca: "Dell", precio: "$ 150000" },
  { id: 2, marca: "Exo", precio: "$ 200000" },
  { id: 3, marca: "Apple", precio: "$ 300000" },
];

function addOfertas() {
  for (let i = 0; i < products.length; i++) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div class="cards">
      <div class="img"><img src=".//img/notebook.jpg" alt=""></div>
      <div class="description"><p> ${products[i].marca}</p><div class="costo">${products[i].precio}</div></div></div>`;

    document.getElementById("ofertas").appendChild(contenedor);
  }
}

addOfertas();
