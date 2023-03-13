const imagens = [
  "images/entrada1.jpeg",
  "images/entrada2.jpeg",
  "images/sala1.jpeg",
  "images/sala2.jpeg",
  "images/sala3.jpeg",
  "images/cozinha1.jpeg",
  "images/cozinha2.jpeg",
  "images/cozinha3.jpeg",
  "images/cozinha4.jpeg",
  "images/cozinha5.jpeg",
  "images/cozinha6.jpeg",
  "images/quarto1.jpeg",
  "images/quarto2.jpeg",
  "images/quarto3.jpeg",
  "images/quarto4.jpeg",
  "images/banheiro1.jpeg",
  "images/banheiro2.jpeg",
  "images/banheiro3.jpeg",
  "images/lavanderia.jpeg",
];

const localFotos = document.getElementById("items");

function carousel(fotos) {
  localFotos.innerHTML = "";

  fotos.forEach((foto) => {
    localFotos.innerHTML += `
    <div class="item">
    <img src=${foto} />
  </div>
    `;
  });
}

carousel(imagens);

document.querySelector("#items").addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    event.target.scrollBy(300, 0);
  } else {
    event.target.scrollBy(-300, 0);
  }
});
