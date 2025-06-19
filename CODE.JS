let total = 0;
const orderList = document.getElementById('orderList');
const totalDisplay = document.getElementById('total');
const orders = [];

function addToOrder(snack, price, qtyId) {
  const qty = parseInt(document.getElementById(qtyId).value);
  if (qty < 1) return;

  const itemTotal = price * qty;
  const listItem = document.createElement('li');
  listItem.textContent = `${snack} x${qty} - $${itemTotal.toFixed(2)}`;
  orderList.appendChild(listItem);

  orders.push({ snack, qty, itemTotal });

  total += itemTotal;
  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
  if (orders.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let summary = "Order Summary:\n";
  orders.forEach(order => {
    summary += `${order.snack} x${order.qty} = $${order.itemTotal.toFixed(2)}\n`;
  });
  summary += `\nTotal: $${total.toFixed(2)}`;
  alert(summary);
}
function checkout() {
  if (orders.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const card = document.getElementById('card').value;
  const email = document.getElementById('email').value;

  if (!card || !email) {
    alert("Please enter your card and email.");
    return;
  }

  let summary = "Order Summary:\n";
  orders.forEach(order => {
    summary += `${order.snack} x${order.qty} = $${order.itemTotal.toFixed(2)}\n`;
  });
  summary += `\nTotal: $${total.toFixed(2)}\n\n`;
  summary += `Payment successful!\nConfirmation sent to: ${email}`;

  alert(summary);

  // Clear everything
  localStorage.removeItem('snackOrders');
  orderList.innerHTML = "";
  total = 0;
  totalDisplay.textContent = `Total: $0`;
  orders.length = 0;
}
