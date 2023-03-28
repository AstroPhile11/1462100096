// define variable
let foods = {
   pizza: 20000,
   burger: 25000,
   chicken: 10000,
};

let drinks = {
   tea: 5000,
   coffee: 9000,
   milo: 6000,
};

var totalFood = 0
var totalDrink = 0

// setup listener

// set dropdown listener pickFood
document.getElementById("pickFood").addEventListener("change", function() {
   totalFood = updateItemPrice("pickFood","foodValue", foods);
   updateTotal()
});

// set checkmark of drink is included
document.getElementById("item1").addEventListener("change", function() {
   var items = document.getElementById("item1");

   var pickDrink = document.getElementById("pickDrink");
   var drinkCount = document.getElementById("drinkCount");

   pickDrink.disabled = !items.checked;

   drinkCount.disabled = !items.checked && totalDrink == 0;
});

// set dropdown listener pickDrink
document.getElementById("pickDrink").addEventListener("change", function() {
   totalDrink = updateItemPrice("pickDrink","drinkValue",drinks)
   updateTotal()
});

// set dropdown listener foodCount
document.getElementById("foodCount").addEventListener("change", function() {
   updateTotal()
});

// set dropdown listener drinkCount
document.getElementById("drinkCount").addEventListener("change", function() {
   updateTotal()
});

// do calculations

function updateItemPrice(elementId, valueId, array){
   var getItemValue = document.getElementById(elementId).value;
   var setItemValue = array[getItemValue];
   document.getElementById(valueId).innerHTML = "Rp. " + setItemValue;
   return setItemValue
}

function updateTotal(){
   var foodCount = parseInt(document.getElementById("foodCount").value);
   var drinkCount = parseInt(document.getElementById("drinkCount").value);

   var foodPrice = totalFood * foodCount;
   var drinkPrice = totalDrink * drinkCount;

   var grandTotal = foodPrice + drinkPrice;

   document.getElementById("subTotal").innerHTML = "Rp. " + grandTotal;
}

//add values of selected to check boxes and display totals
function calcTotal()
{
   var foodCount = parseInt(document.getElementById("foodCount").value);
   var drinkCount = parseInt(document.getElementById("drinkCount").value);
   var payment = parseInt(document.getElementById("payment").value);

   var foodPrice = totalFood * foodCount;
   var drinkPrice = totalDrink * drinkCount;

   var subTotal = foodPrice + drinkPrice;
   var grandTotal = payment - subTotal

   document.getElementById("total").innerHTML = "Kembalian anda berjumlah: Rp. " + grandTotal;
}

//backwards compatibility for event listener submit button
var calcButton = document.getElementById("calcButton"); //sButton HTML element is assign JS value of submitButton
if (calcButton.addEventListener) //now you can add event listener
{
   calcButton.addEventListener("click", calcTotal, false); //event is click, action is calctotal, false for bwc
}
else if (calcButton.attachEvent)
{
   calcButton.attachEvent("onclick", calcTotal);   
}


