import Product from "./Reducers/Product";

const CartableProducts = [
    Product(1,"Bread",1.10,[
        {offerId:1,offerDescription:"Add a soup and get a bread at half price",isOfferSpecial:true},
        {offerId:2,offerDescription:"Get a bread free on purchasing a soup and bread",isOfferSpecial:false},
        {offerId:3,offerDescription:"Get a soup and bread, you could pick additional bread for free",isOfferSpecial:false}
    ]),
    Product(2,"Milk",0.50,[]),
    Product(3,"Cheese",0.90,[
        {offerId:1,offerDescription:"Buy 2 cheeses at price of one",isOfferSpecial:true},
        {offerId:2,offerDescription:"Buy 3 cheeses and get one for free",isOfferSpecial:false},
        {offerId:3,offerDescription:"Buy 4 or more cheeses and get two for free",isOfferSpecial:false}
    ]),
    Product(4,"Soup",0.60,[]),
    Product(5,"Butter",1.20,[]),
]

export default CartableProducts