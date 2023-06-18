const formatPrice = (price: number) => {
  return price.toFixed(2).replace('.', ',') + '$';
};

export default formatPrice;
