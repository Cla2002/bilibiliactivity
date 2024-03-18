function calculateTotal() {
  let totalAmount = 0;
  let discount = 0;
  let deliveryFee = 150;

  const product1 = document.getElementById("Cellphone").checked;
  const product2 = document.getElementById("Laptop").checked;
  const product3 = document.getElementById("Computer").checked;

  if (product1) {
    totalAmount += parseFloat(document.getElementById("Cellphone").value);
  }
  if (product2) {
    totalAmount += parseFloat(document.getElementById("Laptop").value);
  }
  if (product3) {
    totalAmount += parseFloat(document.getElementById("Computer").value);
  }
  
  if (totalAmount > 1500) {
    discount = totalAmount * 0.1;
    deliveryFee = 0; 
  }

  const finalAmount = totalAmount - discount + deliveryFee;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    Total Amount: ₱${totalAmount.toFixed(2)}<br>
    Discount: ₱${discount.toFixed(2)}<br>
    Delivery Fee: ₱${deliveryFee.toFixed(2)}<br>
    **Final Amount: ₱${finalAmount.toFixed(2)}**
  `;
}
