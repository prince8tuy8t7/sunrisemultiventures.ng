// Initialize EmailJS with your Public Key
emailjs.init("YOUR_PUBLIC_KEY");

let selectedProduct = "";
let selectedPrice = "";

function order(product, price) {
  selectedProduct = product;
  selectedPrice = price;

  document.getElementById("orderText").innerText =
    "Ordering " + product + " - ₦" + price;

  document.getElementById("orderBox").classList.remove("hidden");
}

function sendOrder() {
  const phone = document.getElementById("phone").value;

  if (!phone) {
    alert("Please enter your phone number");
    return;
  }

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    product: selectedProduct,
    price: selectedPrice,
    phone: phone
  });

  alert("Order sent successfully!");
  document.getElementById("phone").value = "";
}
