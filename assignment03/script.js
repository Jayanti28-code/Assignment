function calculateTip() {
    const bill = parseFloat(document.getElementById("billAmount").value);
    const tip = parseFloat(document.getElementById("tipPercent").value);

    if (isNaN(bill) || isNaN(tip)) {
        alert("Please enter valid numbers.");
        return;
    }

    const total = bill + (bill * tip / 100);
    document.getElementById("totalAmount").textContent = "$" + total.toFixed(2);
}