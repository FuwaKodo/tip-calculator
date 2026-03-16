function calculate() {
    var totalBill = document.forms["billPrice"]["billInput"].value;
    var rateServiceText = document.forms["selectServiceForm"]["selectServiceInput"].value;
    var rateServicePercentage;
    var alertError = false;

    if (isNaN(parseInt(totalBill)) || parseInt(totalBill) < 0) {
        alertError = true;
        console.log("totalBill > 0");
        warningAlert();
    }

    if (alertError == false) {
        console.log("true");
        if (rateServiceText == "5% -Okay") {
            rateServicePercentage = 5;
        }

        else if (rateServiceText == "10% -Good") {
            rateServicePercentage = 10;
        }

        else if (rateServiceText == "15% -Excellent") {
            rateServicePercentage = 15;
        }

        else {
            //alertError = true;
        }

        if (alertError == true) {
            warningAlert();
        }

        else {
            var TipAmount = parseInt(totalBill) * (parseInt(rateServicePercentage) / 100);
            var FinalTotalBill = parseInt(totalBill) + parseInt(TipAmount);

            document.getElementById("tipAmount").innerHTML = TipAmount;
            document.getElementById("totalAmount").innerHTML = FinalTotalBill;
        }
    }
}

function warningAlert() {
    alert("Input Values Accordingly!");
}