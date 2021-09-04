export const updateSavings = (cartedProducts) => {
    //reset savings to 0
    cartedProducts.map((product)=>{product.savedAmount=0;product.savedAmount=0;return true;});

    //has soup check for breads
    const foundBread = cartedProducts.find(product => product.id === 1);
    if(foundBread !== undefined)
    {
        const eligibleSoups = Math.floor(foundBread.quantity / 2);
        const foundSoup = cartedProducts.find(product => product.id === 4);
        if(foundSoup !== undefined)
        {
            const reduceableBreads = (foundSoup.quantity<=eligibleSoups ? foundSoup.quantity : eligibleSoups );
            foundBread.savedAmount = reduceableBreads * foundBread.price;
        }
    }
}