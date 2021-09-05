import Product from "./Reducers/Product";

const CartableProducts = [
    Product(1,"Bread",1.10,[
        {offerId:1,isOfferSpecial:true,offerDescription:"Add a soup and get a bread at half price"},
        {offerId:2,isOfferSpecial:false,offerDescription:"Get a bread free on purchasing a soup and bread"},
        {offerId:3,isOfferSpecial:false,offerDescription:"Get a soup and bread, you could pick additional bread for free"}
    ]),
    Product(2,"Milk",0.50,[]),
    Product(3,"Cheese",0.90,[
        {offerId:1,isOfferSpecial:true,offerDescription:"Buy 2 cheeses at price of one"},
        {offerId:2,isOfferSpecial:false,offerDescription:"Buy 3 cheeses and get one for free"},
        {offerId:3,isOfferSpecial:false,offerDescription:"Buy 4 or more cheeses and get two for free"}
    ]),
    Product(4,"Soup",0.60,[]),
    Product(5,"Butter",1.20,[
        {offerId:1,isOfferSpecial:true,offerDescription:"Buy a butter or more get a butter at 1/3 of price"}
    ]),
]

export default CartableProducts