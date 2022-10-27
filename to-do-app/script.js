let idNum = 0;
const addCard = () => {
  // get div template
  let div = document.getElementById("cardTemplate");
  // console.log(div);
  // clone div
  let clone = div.cloneNode(true);

  // modify clone class and id
  clone.classList.remove("hidden");
  // clone.classList.add('');
  // console.log(clone);
  clone.id = idNum; //change this dynamically
  clone.querySelector(".complete-button").id = idNum;
  idNum += 1;
  clone.querySelector("#cardTitle").textContent =
    document.getElementById("toDoTitle").value;
  // clone.inner = document.getElementById("toDoTitle").value;

  //   append div to container
  div.after(clone);
  // console.log("complete clone");

  // udpate complete buttons
  updateEventListenersForComplete();
};

const removeChild = (e) => {
  // get the id of clicked button
  let idClickedButton = e.path[2].querySelector(".complete-button").id;
  console.log("button id:", idClickedButton);
  // get the target of cards to remove by clicked buttons'i
  let targetCards = document.getElementsByClassName("card");
  console.log("cards collection", targetCards);
  for (let x of targetCards) {
    if (x.id === idClickedButton) {
      console.log("div id matched", x.id);
      // remove
      x.remove();
      console.log("element removed id:", x.id);
    } else {
      console.log("didnt remove", x.id);
    }
  }

  updateEventListenersForComplete();
};

// add button event listener
document.getElementById("addButton").addEventListener("click", addCard);

// add button mark complete
const updateEventListenersForComplete = () => {
  let allButtons = document.getElementsByClassName("complete-button");
  for (let x of allButtons) {
    x.addEventListener("click", removeChild);
  }
  console.log("update id complete");
};

// const dothis = (e) => {
//   console.log(e);
// };
// window.addEventListener("keydown", dothis);
