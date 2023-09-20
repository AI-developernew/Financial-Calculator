document.getElementById("calculateBtn").addEventListener("click", function () {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
        const interest = (principal * rate * time) / 100;
        const totalAmount = principal + interest;
        document.getElementById("result").innerHTML = `Interest: $${interest.toFixed(2)}<br>Total Amount: $${totalAmount.toFixed(2)}`;
    } else {
        document.getElementById("result").innerHTML = "Please enter valid values.";
    }
});
