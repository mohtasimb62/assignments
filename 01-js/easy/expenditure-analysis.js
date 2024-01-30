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

  if (transactions.length === 0) {
    return [];
  }
  
  result = [];

  categoryObj = {};

  for (let transaction of transactions) {
    // Get the category of current item.
    const category = transaction.category;
    // If the category is repeated, increment the total amount.
    if (categoryObj [category]) {
      categoryObj[category] += transaction.price;
    } else {
      // If the category comes first time, update the amount with current price.
      categoryObj[category] = transaction.price;
    }
  }

  for (let category in categoryObj) {
    result.push({
      category: category,
      totalSpent: categoryObj[category],
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

