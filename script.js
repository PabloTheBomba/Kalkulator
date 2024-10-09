document.getElementById("calculate").addEventListener("click", function() {
    let amount = document.getElementById("amount").value;
    let people = document.getElementById("people").value;
    let tip = document.getElementById("tip").value;

    if (amount === "" || people === "" || tip === "") {
        document.getElementById("result").innerHTML = "Uzupełnij wszystkie pola";
        return;
    }

    amount = parseFloat(amount);
    people = parseInt(people);
    tip = parseInt(tip);

    let tipAmount = amount * (tip / 100);
    let totalAmount = amount + tipAmount;
    let perPerson = totalAmount / people;

    document.getElementById("result").innerHTML = `Każda osoba powinna zapłacić: ${perPerson.toFixed(2)} zł`;
    document.getElementById("tip").disabled = true;

});