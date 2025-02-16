const countDiscount = (price, disc) => {
  const discAmount = disc ? (price * disc) / 100 : null;
  const netPrice = disc ? (price * (100 - disc)) / 100 : price;
  return { netPrice, discAmount };
};

export default countDiscount;
