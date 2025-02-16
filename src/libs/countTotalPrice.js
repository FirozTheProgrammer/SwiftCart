import countDiscount from "./countDiscount";

const countTotalPrice = (items) => {
  // calculate total price
  let totalPrice;
  if (items?.length) {
    totalPrice = parseFloat(
      items?.reduce((ac, { price, quantity, disc }) => {
        const { netPrice } = countDiscount(price, disc);

        return ac + quantity * netPrice;
      }, 0)
    );
  } else {
    totalPrice = 0;
  }

  return totalPrice;
};
export default countTotalPrice;
