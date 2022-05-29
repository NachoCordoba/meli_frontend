import Author from "./author.model";
import Item from "./item.model";

interface ItemList {
    author: Author,
    categories: Array<string>,
    items: Array<Item>
}

export const initialItemList : ItemList = {
    author: {
        name: '',
        lastname: ''
    },
    categories: [],
    items: []
}

export default ItemList;