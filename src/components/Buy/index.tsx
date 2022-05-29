import "./index.css";
import ItemDetail from "../../models/item-detail.model";
import Button from "../Button";
import NumberFormatter from "../../utils/number";

interface IBuy {
  req: ItemDetail;
}

const Buy = ({ req }: IBuy) => {
  const priceStruct = NumberFormatter.formatNumberToPriceDetail(
    req.item.price.amount
  );

  return (
    <>
      <div className="buy-detail">
        <div className="buy-image">
          <img src={req.item.picture} alt={req.item.title} />
        </div>
        <div className="buy-titles">
          <span className="buy-condition">
            {req.item.condition} - {req.item.sold_quantity} vendidos
          </span>
          <h2 className="buy-title">{req.item.title}</h2>
          <span className="buy-price">
            $ {priceStruct.price}
            <span className="buy-price-decimals">
              {priceStruct.priceDecimals}
            </span>
          </span>
          <div className="buy-buy">
            {req.item.free_shipping ? (
              <span className="buy-freeship">Envío gratis</span>
            ) : null}
            <Button>Comprar</Button>
          </div>
        </div>
      </div>
      <div className="buy-description">
        <span>Descripcion del Producto</span>
        <p>{req.item.description}</p>
      </div>
    </>
  );
};

export default Buy;
