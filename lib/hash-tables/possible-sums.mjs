// Guaranteed constraints:
// quantity.length = coins.length,
// 1 ≤ quantity[i] ≤ 10^5.

// It is guaranteed that (quantity[0] + 1) * (quantity[1] + 1) * ... * (quantity[quantity.length - 1] + 1) <= 10^6.

export function possibleSumsNaive(coins, quantities) {
  const uniqueSums = new Set();
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    let j = quantities[i];
    for (j; j > 0; j--) {
      let currentSums = Array.from(uniqueSums);
      // add the coin to each sum
      currentSums.forEach(sum => uniqueSums.add(sum + coin));
      // add the coin itself as a sum
      uniqueSums.add(coin);
    }
  }
  return uniqueSums.size;
}
/**
 * The naive solution takes coins x quantities x max sums time.
 * [1,2], [100, 100]
 * 2 coins x 100 x min200 = 40000;
 * The optimized solution takes coins x max sum, if the coins are sorted
 * 2 * 300 = 600;
 * The optimized solution with sorting takes max sum x max sum
 * 300 * 300 = 90000;
 *
 * for each coin, there are coin - 1 number of remainders (i.e. addends that do not contain the current coin)
   make a pass for each remainder
   start the remainder at 0, in order to capture the sum that equals that coin
   increment by the value of the coin until the max sum is reached
   look for a "base sum": a sum that's already been identified (or 0) and mark the subsequent sums as present until that coins quantity is used up
 */

export function possibleSumsSortedCoins(coins, quantities) {
  // find the sum of all coins
  let maxSum = 0;
  for (let i = 0; i < coins.length; i++) {
    maxSum += coins[i] * quantities[i];
  }

  // keep a log of all sums in the range and whether or not they are encountered
  let allSums = new Array(maxSum + 1);
  allSums.fill(false);
  // use allSums[0] as the 'base' sum to add a single coin to
  allSums[0] = true;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    const quantity = quantities[i];

    // remainder
    for (let remainder = 0; remainder < coin; remainder++) {

      let quantityRemaining = quantity;
      let addCoins = false;
      // remainder + coin
      for (let sum = remainder; sum < maxSum + 1; sum += coin) {
        // look for a 'base' sum and start adding
        if (allSums[sum]) {
          addCoins = true;
        } else {
          if (addCoins && quantityRemaining) {
            allSums[sum] = true;
            quantityRemaining--;
          }
        }
      }
    }
  }

  return allSums.reduce((acc, curr) => curr ? acc + 1 : acc, 0) - 1;
}
export function possibleSums(coins, quantities) {
  // find the sum of all coins
  let maxSum = 0;
  for (let i = 0; i < coins.length; i++) {
    maxSum += coins[i] * quantities[i];
  }

  let allNums = new Array(maxSum + 1);
  allNums.fill(0);
  for (let i = 0; i < coins.length; i++) {
    allNums[coins[i]] += quantities[i];
  }


  // keep a log of all sums in the range and whether or not they are encountered
  let allSums = new Array(maxSum + 1);
  allSums.fill(false);
  // use allSums[0] as the 'base' sum to add a single coin to
  allSums[0] = true;

  for (let i = 1; i < allNums.length; i++) {
    if (!allNums[i]) {
      continue;
    }
    const coin = i;
    const quantity = allNums[i];

    // remainder
    for (let remainder = 0; remainder < coin; remainder++) {

      let quantityRemaining = quantity;
      let addCoins = false;
      // remainder + coin
      for (let sum = remainder; sum < maxSum + 1; sum += coin) {
        // look for a 'base' sum and start adding
        if (allSums[sum]) {
          addCoins = true;
        } else {
          if (addCoins && quantityRemaining) {
            allSums[sum] = true;
            quantityRemaining--;
          }
        }
      }
    }
  }

  return allSums.reduce((acc, curr) => curr ? acc + 1 : acc, 0) - 1;
}

