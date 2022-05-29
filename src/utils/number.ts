class NumberFormatter{
    static formatNumberToPriceList(number: number, decimals?: number){

        const stringNumber = String(number);
        const priceSections = stringNumber.split('.');

        priceSections[0] = priceSections[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        return `$ ${priceSections.join(',')}`;
    }

    static formatNumberToPriceDetail(number: number, decimas?: number){
        const stringNumber = String(number);
        const priceSections = stringNumber.split('.');

        priceSections[0] = priceSections[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

        if(!priceSections[1])
            priceSections[1] = '00';

        return {
            price: priceSections[0],
            priceDecimals: priceSections[1].padStart(2, '00')
        }
    }
}

export default NumberFormatter;