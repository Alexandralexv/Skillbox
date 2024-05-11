function addToCart(name) {
    let ul = document.getElementById("cart");
    let li = document.createElement("LI");

    li.textContent = name;

    ul.append(li);
}