const table = document.getElementById("orderTable");

function loadOrders() {
  table.innerHTML = "";
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.forEach((order, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.playerId}</td>
      <td>৳${order.diamondPrice}</td>
      <td>${order.method}</td>
      <td>${order.txid}</td>
      <td>${order.status}</td>
      <td>
        <button onclick="approveOrder(${index})">Approve</button>
        <button onclick="deleteOrder(${index})">Delete</button>
      </td>
    `;

    table.appendChild(row);
  });
}

function approveOrder(index) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  orders[index].status = "Completed";
  localStorage.setItem("orders", JSON.stringify(orders));
  loadOrders();
}

function deleteOrder(index) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  orders.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  loadOrders();
}

loadOrders();
