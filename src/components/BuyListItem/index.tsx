import Item from "../../models/item.model";
import NumberFormatter from "../../utils/number";
import "./index.css";

interface IBuyListItem {
  item: Item;
  onClick?: () => void;
}

const BuyListItem = ({ item, onClick = () => {} }: IBuyListItem) => {
  return (
    <div className="buy-listitem-content" onClick={onClick}>
      <div className="buy-listitem-image">
        <img className="buy-image" src={item.picture} alt={item.title} />
      </div>
      <div className="buy-listitem-description">
        <span className="buy-listitem-price">
          {NumberFormatter.formatNumberToPriceList(item.price.amount)}
        </span>
        {item.free_shipping ? (
          <span className="buy-listitem-freeship">Envío gratis</span>
        ) : null}
        <p>{item.title}</p>
      </div>
      <div>
        <p className="buy-listitem-location">{item.state_name}</p>
      </div>
    </div>
  );
};

export default BuyListItem;
