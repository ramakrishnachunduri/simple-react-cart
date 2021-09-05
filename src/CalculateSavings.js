export const updateSavings = (cartedProducts) => {
    //reset savings and offers to none
    cartedProducts.map((product)=>{product.savedAmount=0;
        product.appliedOfferId=-1;
        return true;});

    //has breads check for soup
    /*const foundBread = cartedProducts.find(product => product.id === 1);
    if(foundBread !== undefined)
    {
        const eligibleSoups = Math.floor(foundBread.quantity / 2);
        const foundSoup = cartedProducts.find(product => product.id === 4);
        if(foundSoup !== undefined)
        {
            const specialoffer = foundBread.specialofferApplicable;
            if(specialoffer)
            {
                foundBread.savedAmount= foundBread.price * 0.5;
                foundBread.offerDescription = "Add a soup and get a bread at half price";
            }
            else
            {
                const reduceableBreads = (foundSoup.quantity<=eligibleSoups ? foundSoup.quantity : eligibleSoups );
                foundBread.savedAmount = reduceableBreads * foundBread.price;
                foundBread.offerDescription = "Add a soup and bread to get a bread free";
            }
        }
    }*/

    //has cheese apply offer
    const foundCheese = cartedProducts.find(product => product.id === 3);
    if(foundCheese !== undefined )
    {
        if(foundCheese.quantity === 3)
        {
                foundCheese.savedAmount = foundCheese.price;
                foundCheese.appliedOfferId = 2;
        }
        else if(foundCheese.quantity >= 4)
        {
                foundCheese.savedAmount = foundCheese.price*2;
                foundCheese.appliedOfferId = 3;
        }
        else if(foundCheese.quantity >= 2)
        {
            foundCheese.savedAmount = foundCheese.price;
            foundCheese.appliedOfferId = 1
        }
    }
}