import {formatPriceRange} from "../helpers/utils";
import {DEFAULT_PLACEHOLDER_IMAGE} from "../helpers/constants";
import cardStyles from "./RestaurantCard.module.scss"
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const RestaurantCard = ({item}) => {
  return (
    <div className={cardStyles.item}>
      <div className={cardStyles.itemHeader}>
        <Link to={`restaurants/${item.id}`}>
          <b>{item.name}</b>
        </Link>
        {formatPriceRange(item.priceRange)}
      </div>
      <div className={cardStyles.itemImgWrapper}>
        <img src={item.imageSmallUrl || DEFAULT_PLACEHOLDER_IMAGE} alt={`${item.name}`} height={200} className={cardStyles.itemImg} />
      </div>
      <p>{item.description}</p>
    </div>
  );
}

RestaurantCard.propTypes = {
  item: PropTypes.object,
}

export default RestaurantCard;
