import menuStyles from "./MenuBox.module.scss";
import PropTypes from "prop-types";

const MenuBox = ({menuItems, totalPrice, makeOrder, decreaseItemQuantity, increaseItemQuantity, isSuccessfulOrder}) => (
  <div className={menuStyles.menu}>
    <h3 className={menuStyles.menuTitle}>Menu</h3>
    <section className={menuStyles.menuBox}>
      {menuItems.map((menuItem, index) =>
        <div key={index} className={menuStyles.menuItem}>
          <div className={menuStyles.menuItemInfo}>
            <span className={menuStyles.menuItemPrice}>${menuItem.price}</span>
            <span className={menuStyles.menuItemName}>{menuItem.name}</span>
          </div>
          <div className={menuStyles.menuItemControls}>
            <button onClick={() => decreaseItemQuantity(index)}>-</button>
            <span>{menuItem.quantity}</span>
            <button onClick={() => increaseItemQuantity(index)}>+</button>
          </div>
        </div>
      )}
    </section>
    <div className={menuStyles.total}>
      <p>Total: ${totalPrice}</p>
      <button onClick={makeOrder}>Order Now</button>
      {isSuccessfulOrder && (<p className={menuStyles.successText}>Thank you for your order.</p>)}
    </div>
  </div>
);

MenuBox.propTypes = {
  menuItems: PropTypes.array,
  totalPrice: PropTypes.number,
  makeOrder: PropTypes.func,
  decreaseItemQuantity: PropTypes.func,
  increaseItemQuantity: PropTypes.func,
  isSuccessfulOrder: PropTypes.bool,
}

export default MenuBox;
