window.onload = function () {
  const Menu = document.querySelector(".btn-group-vertical");
  const Header = document.querySelector(".jumbotron");
  const Cards = document.querySelectorAll(".col-lg-3");
  const List = document.querySelector(".list-group");

  // MENU DIRECTION
  Menu.classList.remove("btn-group-vertical");
  Menu.classList.add("btn-group-horizontal");

  // HEADER STYLING
  Header.style.cssText = `
    color: #fff;
    background-color: #5a6268;
    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: right;    
    `;
  Header.querySelector("a").style.cssText = `
    background-color: #0bb8af;
    border-color: #0bb8af;
    `;
  Header.querySelector("hr").style.width = "100%";

  // CARDS POSITION
  Cards[0].parentNode.insertBefore(Cards[3], Cards[0]);
  Cards[1].parentNode.insertBefore(Cards[0], Cards[0]);
  Cards[2].parentNode.insertBefore(Cards[2], Cards[1]);
  Cards[3].parentNode.insertBefore(Cards[3], Cards[0]);

  Cards[0].querySelector("a").style.cssText = `
    background-color: #0bb8af;
    border-color: #0bb8af;
    `;

  // LIST ORDER
  const item4 = document.createElement("li");
  const item5 = document.createElement("li");

  item4.classList.add("list-group-item");
  item4.textContent = "Quarto item";
  item4.classList.add("active");
  List.appendChild(item4);

  item5.classList.add("list-group-item");
  item5.textContent = "Quinto item";
  List.appendChild(item5);

  List.querySelector("li").classList.remove("active");
};
