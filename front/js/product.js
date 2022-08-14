console.log(window.location.href);

const url = window.location.href;
const productId = url.split('=').pop();

console.log(productId);
