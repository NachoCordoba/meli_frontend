import Author from "./author.model";

interface ItemDetail {
    author: Author,
    categories: Array<string>,
    item: {
        id: string;
        title: string;
        price: {
            currency: string,
            amount: number,
            decimals: number
        },
        picture: string,
        condition: string,
        free_shipping: boolean,
        sold_quantity: number,
        description: string
    }
}

export const initDetaulItemDetail = {
    author: {
        name: 'Ignacio',
        lastname: 'Cordoba'
    },
    categories: [],
    item: {
        id: '',
        title: '',
        price: {
            currency: '',
            amount: 0,
            decimals: 0
        },
        picture: '',
        condition: '',
        free_shipping: true,
        sold_quantity: 0,
        description: ''
    }
}

export default ItemDetail;