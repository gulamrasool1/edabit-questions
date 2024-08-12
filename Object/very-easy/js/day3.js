// 23 Video Streaming Plans
// Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

// BasicPlan	StandardPlan	PremiumPlan
// ✓	✓	✓	canStream
// ✓	✓	✓	canDownload
// ✓	✓	✓	hasSD
// ✓	✓	hasHD
// ✓	hasUHD
// 1	2	4	numOfDevices
// $8.99	$12.99	$15.99	price
// Examples
// BasicPlan.hasSD  //➞ true 
// PremiumPlan.hasSD  //➞ true
// BasicPlan.hasUHD  //➞ false
// BasicPlan.price  //➞ '$8.99'
// PremiumPlan.numOfDevices  //➞ 4



// 24 Calculate the Profit
// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.

// Examples

// function profit(info) {
//   const { costPrice, sellPrice, inventory } = info
//   const profit = sellPrice - costPrice;
//   const totalPrice = profit * inventory;
//   return Math.round(totalPrice);
// }

function profit(info) {
  const {costPrice, sellPrice, inventory } = info
  let totalProfit = 0;
  let profit = sellPrice - costPrice;

  for (let i = 0; i < inventory; i++) {
     totalProfit += profit;
  }
  return Math.round(totalProfit);
}

// console.log(profit({
//   costPrice: 32.67,
//   sellPrice: 45.00,
//   inventory: 1200
// }));  //➞ 14796
// console.log(profit({
//   costPrice: 225.89,
//   sellPrice: 550.00,
//   inventory: 100
// }));  //➞ 32411
// console.log(profit({
//   costPrice: 2.77,
//   sellPrice: 7.95,
//   inventory: 8500
// }));  //➞ 44030



// 25 Is the Object Empty?
// Write a function that returns true if an object is empty, and false otherwise.

// Examples

// function isEmpty(obj) {
  // return Object.keys(obj).length == 0
// }

function isEmpty(obj) {
  let keys = Object.keys(obj); //keys ki jagah values kaam me le sakte hai
  for (let i = 0; i < keys.length; i++) {
    return false;
  }
  return true;
}

// console.log(isEmpty({}));  //➞ true
// console.log(isEmpty({ a: 1 }));  //➞ false