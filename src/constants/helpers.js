export const getTotalAmount = (cart, food) => {
  return cart.reduce(
    (accumulator, currValue) => accumulator + currValue.amount,
    food.amount
  );
};
