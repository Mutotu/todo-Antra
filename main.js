function main() {
  const input = document.querySelector("input");
  const btn = document.querySelector("#add-btn");
  const ul = document.querySelector("ul");

  const liCreator = () => {
    let li = document.createElement("li");
    idCreator(li);
    doneBtnCreator(li);
    li.appendChild(document.createTextNode(input.value));
    deleteBtnCreator(li);

    ul.appendChild(li);
    input.value = "";
    deleteItem();
    doneItem();
  };

  const idCreator = (element) => {
    let childNo = ul.children.length + 1;
    element.setAttribute("id", `li-${childNo}`);
  };

  const deleteBtnCreator = (element) => {
    let bt = document.createElement("button");
    bt.innerText = "Delete";
    element.appendChild(bt);
  };
  const doneBtnCreator = (element) => {
    let bt = document.createElement("button");
    bt.innerText = "Done";

    element.appendChild(bt);
  };

  btn.addEventListener("click", liCreator);

  const deleteItem = () => {
    const lis = [...document.querySelectorAll("li")];
    lis.forEach((li) =>
      li.lastChild.addEventListener("click", () => {
        li.remove();
      })
    );
  };
  const doneItem = () => {
    const lis = [...document.querySelectorAll("li")];
    lis.forEach((li) =>
      li.firstChild.addEventListener("click", () => {
        li.firstChild.setAttribute("id", li.attributes[0].value.slice(3));
        li.classList.add("done");
      })
    );
    tryo();
  };
  const tryo = () => {
    const lis = [...document.querySelectorAll("li")];
    lis.forEach((li) => {
      li.addEventListener("click", () => {
        if (
          li.firstChild.attributes[0].value === li.attributes[0].value.slice(3)
        ) {
          li.firstChild.innerText = "Undone";
          console.log(li.firstChild);
        }
      });
    });
  };
}
main();
