import Card from "../Card";
import ItemList from "../../models/item-list.model";
import BuyListItem from "../BuyListItem";

interface IBuyList {
  itemList?: ItemList;
  onSelectItem?: (id: string) => void;
}

const BuyList = ({ itemList, onSelectItem = () => {} }: IBuyList) => {
  return (
    <Card contentStyle={{ padding: "0px" }}>
      {itemList?.items.map((item) => (
        <BuyListItem
          item={item}
          onClick={() => onSelectItem(item.id)}
          key={item.id}
        />
      ))}
    </Card>
  );
};

export default BuyList;
