// fetch order ID from local storage, then clear local storage
function findId(order) {
    let order_Id = document.getElementById('orderId');

    let orderNumber = localStorage.getItem('orderId');

    order_Id.textContent = orderNumber;

    localStorage.clear();

}
findId();