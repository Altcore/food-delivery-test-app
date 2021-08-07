import {Link} from "react-router-dom";
import {formatPriceRange} from "../helpers/utils";
import {DEFAULT_PLACEHOLDER_IMAGE} from "../helpers/constants";
import cardStyles from "./RestaurantCard.module.scss"
import PropTypes from "prop-types";

const RestaurantCard = ({item, discount}) => {
  return (
    <div className={cardStyles.item}>
      <div className={cardStyles.itemHeader}>
        <Link to={`restaurants/${item.id}`}>
          <b>{item.name}</b>
        </Link>
        {formatPriceRange(item.priceRange)}
      </div>
      <div className={cardStyles.itemImgWrapper}>
        {discount && <span className={cardStyles.itemDiscount}>-{discount}%</span>}
        <img src={item.imageSmallUrl || DEFAULT_PLACEHOLDER_IMAGE} alt={`${item.name}`} height={200} className={cardStyles.itemImg} />
      </div>
      <p>{item.description}</p>
    </div>
  );
}

RestaurantCard.propTypes = {
  item: PropTypes.object,
  discount: PropTypes.number,
}

export default RestaurantCard;
