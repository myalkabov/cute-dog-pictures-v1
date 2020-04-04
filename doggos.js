const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const LOADING_SRC = "./thumb.png";

const doggos = document.querySelector(".doggos");

let imgCntOnRow = 0;
let newRow = null;

function addRow() {
  const row = document.createElement("div");
  row.className = "img-row";
  doggos.appendChild(row);
  newRow = row;
}

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  if (newRow === null || imgCntOnRow === 4) {
    addRow();
    imgCntOnRow = 0;
  }
  const img = document.createElement("img");
  img.src = LOADING_SRC;
  img.alt = "Loading thumb";
  newRow.appendChild(img);

  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      imgCntOnRow++;
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);