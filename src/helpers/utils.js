export const formatPriceRange = priceRange => {
  const number = parseInt(priceRange, 10);
  return "$".repeat(number + 1);
}
