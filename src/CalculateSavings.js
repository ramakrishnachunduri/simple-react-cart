export const updateSavings = (cartedProducts) => {
    //reset savings and offers to none
    cartedProducts.map((product)=>{product.savedAmount=0;
        product.appliedOfferId=-1;
        return true;});

    //has breads check for soup
    const foundBread = cartedProducts.find(product => product.id === 1);
    if(foundBread !== undefined)
    {
        const foundSoup = cartedProducts.find(product => product.id === 4);
        if(foundSoup !== undefined)
        {
            if( foundBread.quantity === 1 && foundSoup.quantity === 1)
            {
                foundBread.savedAmount = foundBread.price * 0.5;
                foundBread.appliedOfferId = 1
            }

            if(foundBread.quantity >= 2 && foundSoup.quantity === 1)
            {
                foundBread.savedAmount = foundBread.price * 1;
                foundBread.appliedOfferId = 2
            }

            if(foundBread.quantity >= 2 && foundSoup.quantity > 1)
            {
                const eligibleSoups = Math.floor(foundBread.quantity / 2);
                const reduceableBreads = (foundSoup.quantity<=eligibleSoups ? foundSoup.quantity : eligibleSoups );
                foundBread.savedAmount = reduceableBreads * foundBread.price;
                foundBread.appliedOfferId = 3
            }
        }
    }
    
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

    // has butter apply offer
    const foundButter = cartedProducts.find(product => product.id === 5);
    if(foundButter !== undefined )
    {
        foundButter.savedAmount = foundButter.price / 3;
        foundButter.appliedOfferId = 1;
    }
}