let bill_number = document.querySelector(".bill-number");
let tip5 = document.querySelector(".tip5");
let tip10 = document.querySelector(".tip10");
let tip15 = document.querySelector(".tip15");
let tip25 = document.querySelector(".tip25");
let tip50 = document.querySelector(".tip50");
let tipcustom = document.querySelector(".tipcustom");
let input_number_people = document.querySelector(".input-number-people");///
let tip_number = document.querySelector(".tip-number");
let split_tip_result = document.querySelector(".split-tip-result");
let split_total_result = document.querySelector(".split-total-result");
let reset = document.querySelector(".reset");
let zero = document.querySelector(".zero");

let tipCounter, tip_number_value, bill_number_value, input_number_people_value, tip_amount, total, count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count = 0;

bill_number.addEventListener('input', function () {
    bill_number_value = bill_number.valueAsNumber;
    tip_amount = bill_number_value * (tipCounter / 100);
    total = (bill_number_value + tip_amount) / input_number_people_value;
    resultText();
    reset.style.backgroundColor = "#26C2AE";
});

input_number_people.addEventListener('input', function () {
    input_number_people_value = input_number_people.valueAsNumber;
    zeroPeople();
    tip_amount = bill_number_value * (tipCounter / 100);
    total = (bill_number_value + tip_amount) / input_number_people_value;
    resultText();
    reset.style.backgroundColor = "#26C2AE";
});

function zeroPeople() {
    if (input_number_people_value >= 1) {
        zero.style.display = "none";
        input_number_people.style.border = "none";
    } else {
        zero.style.display = "block";
        input_number_people.style.border = "2px solid #E17052";
    }
};

function unClick() {
    tip5.style.backgroundColor = "#00474B";
    tip5.style.color = "white";
    tip10.style.backgroundColor = "#00474B";
    tip10.style.color = "white";
    tip15.style.backgroundColor = "#00474B";
    tip15.style.color = "white";
    tip25.style.backgroundColor = "#00474B";
    tip25.style.color = "white";
    tip50.style.backgroundColor = "#00474B";
    tip50.style.color = "white";
};

tip5.addEventListener('click', function () {
    if (count1 % 2 == 0) {
        unClick();
        tip5.style.backgroundColor = "#26C2AE";
        tip5.style.color = "#00474B";
        count1++;
        count = 1;
        count2 = 0;
        count3 = 0;
        count4 = 0;
        count5 = 0;
        count6 = 0;
    } else {
        tip5.style.backgroundColor = "#00474B";
        tip5.style.color = "white";
        count1--;
        count = 0;
    }
    tipCounter = 5;
    percent(5);
    resultText();
    reset.style.backgroundColor = "#26C2AE";
});

tip10.addEventListener('click', function () {
    if (count2 % 2 == 0) {
        unClick();
        tip10.style.backgroundColor = "#26C2AE";
        tip10.style.color = "#00474B";
        count2++;
        count = 2;
        count1 = 0;
        count3 = 0;
        count4 = 0;
        count5 = 0;
        count6 = 0;
    } else {
        tip10.style.backgroundColor = "#00474B";
        tip10.style.color = "white";
        count2--;
        count = 0;
    }
    tipCounter = 10;
    percent(10);
    resultText();
    reset.style.backgroundColor = "#26C2AE";
});

tip15.addEventListener('click', function () {
    if (count3 % 2 == 0) {
        unClick();
        tip15.style.backgroundColor = "#26C2AE";
        tip15.style.color = "#00474B";
        count3++;
        count = 3;
        count1 = 0;
        count2 = 0;
        count4 = 0;
        count5 = 0;
        count6 = 0;
    } else {
        tip15.style.backgroundColor = "#00474B";
        tip15.style.color = "white";
        count3--;
        count = 0;
    }
    tipCounter = 15;
    percent(15);
    resultText();
    reset.style.backgroundColor = "#26C2AE";
});

tip25.addEventListener('click', function () {
    if (count4 % 2 == 0) {
        unClick();
        tip25.style.backgroundColor = "#26C2AE";
        tip25.style.color = "#00474B";
        count4++;
        count = 4;
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count5 = 0;
        count6 = 0;
    } else {
        tip25.style.backgroundColor = "#00474B";
        tip25.style.color = "white";
        count4--;
        count = 0;
    }
    tipCounter = 25;
    percent(25);
    resultText();
    reset.style.backgroundColor = "#26C2AE";
});

tip50.addEventListener('click', function () {
    if (count5 % 2 == 0) {
        unClick();
        tip50.style.backgroundColor = "#26C2AE";
        tip50.style.color = "#00474B";
        count5++;
        count = 5;
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0;
        count6 = 0;
    } else {
        tip50.style.backgroundColor = "#00474B";
        tip50.style.color = "white";
        count5--;
        count = 0;
    }
    tipCounter = 50;
    percent(50);
    resultText();
    reset.style.backgroundColor = "#26C2AE";
});

tipcustom.addEventListener('input', function () {
    if (count6 % 2 == 0) {
        unClick();
        tipcustom.style.backgroundColor = "#26C2AE";
        tipcustom.style.color = "#00474B";
        count6++;
        count = 6;
        count1 = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0;
        count5 = 0;
    } else {
        count6--;
    }
    tipCounter = tip_number_value;
    percent(tip_number_value);
    resultText();
    reset.style.backgroundColor = "#26C2AE";
});

tip_number.addEventListener('input', function () {
    tip_number_value = tip_number.valueAsNumber;
    tip_amount = bill_number_value * (tipCounter / 100);
    total = (bill_number_value + tip_amount) / input_number_people_value;
    resultText();
    reset.style.backgroundColor = "#26C2AE";
});

function percent(x) {
    if (bill_number.valueAsNumber == 0 || input_number_people.valueAsNumber == 0) {
        split_tip_result.textContent = "$0.00";
        split_total_result.textContent = "$0.00";
    } else {
        tip_amount = bill_number_value * (x / 100);
        total = (bill_number_value + tip_amount) / input_number_people_value;
    }
};

function resultText() {
    if (bill_number.valueAsNumber == 0 || input_number_people.valueAsNumber == 0 || count == 0) {
        split_tip_result.textContent = "$0.00";
        split_total_result.textContent = "$0.00";
    } else {
        split_tip_result.textContent = "$" + tip_amount;
        split_total_result.textContent = "$" + total;
    }
};

reset.addEventListener("click", function () {
    split_tip_result.textContent = "$0.00";
    split_total_result.textContent = "$0.00";
    bill_number.valueAsNumber = 0;
    input_number_people.valueAsNumber = 0;
    unClick();
    tip_amount = 0;
    total = 0;
    tipCounter = 0;
    count = 0;
    reset.style.backgroundColor = "#0D686D";
});