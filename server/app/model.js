// Faux `enum`
const categories = ["SPORTING_GOODS", "ELECTRONICS"];

const validate = ({ category, price, stocked = true, name = "" } = {}) => {
  const ret = [];

  if (!categories.includes(category)) {
    ret.push("Invalid category");
  }

  if (price < 0.01) {
    ret.push("Price must be non-zero");
  }

  if (typeof stocked !== "boolean") {
    ret.push("Invalid stocked");
  }

  if (!name.length) {
    ret.push("Name must be non-empty");
  }

  return ret;
};

const withStringifiedPrice = ({ price, ...rest }) => ({
  ...rest,
  price: `$${price.toFixed(2)}`,
});

export default (newProduct) => {
  const errors = validate(newProduct);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  // If no errors, just need to stringify the price
  return withStringifiedPrice(newProduct);
};
