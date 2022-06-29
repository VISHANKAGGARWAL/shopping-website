function loadCartProducts() {
  let products = getCart();

  let ht = products
    .map((product, index) => {
      let cd = `
    <tr>
    <td>
      <div class="cart-info">
        <div>
          <p>${product.name}</p>
          <small>Price: ${product.price}</small>
          <br />
          <a href="">Remove</a>
        </div>
      </div>
    </td>
    <td><input type="number" value="${product.quantity}" /></td>
    <td>$${product.price * product.quantity}</td>
  </tr>
    `;
      return cd;
    })
    .join("\n");
  document.getElementById("cart-table").innerHTML = ht;
}

function getCart() {
  // get cart from local storage
  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
    return cart;
  }
  return [];
}

function addProduct(name, price, quantity) {
  // add product to local storage
  let products = getCart();
  products.push({
    name: name,
    price: price,
    quantity: quantity,
  });
  localStorage.setItem("cart", JSON.stringify(products));
}
