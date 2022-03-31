import { nav } from "../components/nav.js";
let navData = document.getElementById("nav");
navData.innerHTML = nav();

//Catching data from localStorage;
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartData);

//catching container
let cartProducts = document.getElementById("tbody");
const displayData = (data) => {
  cartProducts.innerHTML = "";
  data.map((el) => {
    let { brand, title, image, price } = el;

    let row = document.createElement("tr");

    let col1 = document.createElement("td");

    let img = document.createElement("img");
    img.src = image;

    col1.append(img);

    let col2 = document.createElement("td");

    let Title = document.createElement("p");
    Title.innerText = title;

    let desc = document.createElement("p");
    desc.innerText = brand;

    let itemCode = document.createElement("p");
    let code = Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000;
    itemCode.innerText = `ITEM ${code}`;

    let div = document.createElement("div");

    let select = document.createElement("select");
    select.innerHTML = `<option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>`;

    let btnLoves = document.createElement("button");
    btnLoves.innerText = `Move to Loves`;

    let btnRemove = document.createElement("button");
    btnRemove.innerText = `Remove`;

    div.append(select, btnLoves, btnRemove);

    //Added col two elements
    col2.append(Title, desc, itemCode, div);

    let col3 = document.createElement("td");

    let Price = document.createElement("p");
    Price.innerText = price;
    col3.append(price);

    row.append(col1, col2, col3);

    cartProducts.append(row);
  });
};
displayData(cartData);
