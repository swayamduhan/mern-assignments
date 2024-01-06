/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let objectList = [];
  for (let i = 0; i < transactions.length; i++) {
    let categoryExists = false;
    for (let j = 0; j < objectList.length; j++) {
      if (transactions[i].category == objectList[j].category) {
        objectList[j].totalSpent += transactions[i].price;
        categoryExists = true;
        break;
      }
    }
    if (!categoryExists) {
      let newObject = {};
      newObject.category = transactions[i].category;
      newObject.totalSpent = transactions[i].price;
      objectList.push(newObject);
    }
  }
  return objectList;
}

// ALTERNATE SOLUTION 

/* function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    // condition: check whether it doesn't exist in categoryTotals
    if (!categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] = price;
    } else {
      // if it's already exist
      categoryTotals[category] += price;
    }
  }

  // now, convert categoryTotals Object in individual Category Object in an Array
  const finalList = Object.keys(categoryTotals).map((category) => {
    return { category: category, totalSpent: categoryTotals[category] };
  });

  return finalList;
} */

module.exports = calculateTotalSpentByCategory;
