export const formatPriceRange = priceRange => {
  const number = parseInt(priceRange, 10);
  return "$".repeat(number + 1);
}

export const prepareMenuData = (menu) => {
  let resultMenu = [];
  menu.map((item) => {
    const quantity = 0;
    resultMenu.push({ ...item, quantity});
    return false;
  });

  return resultMenu;
}
