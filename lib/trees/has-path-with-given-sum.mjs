export function hasPathWithGivenSum(tree, target) {
  const allSums = findAllSums(tree);
  return allSums.some(sum => sum === target);
}

export function findAllSums(node, sums = []) {
  if (!node.left && !node.right) {
    sums.push(node.value);
    return sums;
  }

  let [leftSums, rightSums] = [[], []];

  if (node.left) {
    leftSums = findAllSums(node.left).map(sum => sum + node.value);
  }

  if (node.right) {
    rightSums = findAllSums(node.right).map(sum => sum + node.value);
  }

  return [...leftSums, ...rightSums];
}

