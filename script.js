let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rst-btn");

let turn = true;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log(`winner is ${pos1val}`);
        disableBoxes();
        Swal.fire({
          title: `Congratulations to the winner ${pos1val}`,
          icon: "success",
        });
      }
    }
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const rstbtn = () => {
  turn = true;
  enableBoxes();
};

resetbtn.addEventListener("click", rstbtn);
