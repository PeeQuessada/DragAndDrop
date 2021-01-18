const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

/** Card that will be drag*/
cards.forEach(card => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  dropzones.forEach(dropzone => dropzone.classList.add("highlight"));

  this.classList.add("is-dragging");
}

function dragend() {
  dropzones.forEach(dropzone => dropzone.classList.remove("highlight"));

  this.classList.remove("is-dragging");
}

/** Cards Dropzones */
dropzones.forEach(dropzone => {
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
});

function dragover() {
  this.classList.add("dragging-over");
  this.appendChild(document.querySelector(".is-dragging"));
}

function dragleave() {
  dropzones.forEach(dropzone => dropzone.classList.remove("dragging-over"));
  dropzones.forEach(dropzone => dropzone.classList.remove("highlight"));
}

