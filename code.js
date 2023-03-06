window.onload = function () {
  init();
};

function init() {
  console.log("start");

  hello();
}

function hello() {
    document.getElementById("save").addEventListener("click", function () {
    const name = document.getElementById("get-name").value;
    const h2 = document.querySelector("h2");
    const modalGetName = document.querySelector(".modal-get-name");
    const errorName = document.getElementById("error-name");

    if (name == "") {
        errorName.removeAttribute('hidden');
    } else {
      h2.innerHTML = `Hello ${name}! Select a category!`;
      modalGetName.style.display = "none";
    }
  });
}
