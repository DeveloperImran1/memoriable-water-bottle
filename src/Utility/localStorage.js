const getStoreCard = () => {
    const storedData = localStorage.getItem('cart')
    if (storedData) {
      return JSON.parse(storedData)
    }
    return [];
  }
getStoreCard()

const saveCartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('çart', cartStringified);
}

const addToLocalStorage = id => {
    const cart = getStoreCard();   // getStoreCard function k call korle akta array pabo.
    console.log(cart)
    if(cart){
        const newCart = [...cart, id]
        saveCartToLocalStorage(newCart)
    }
    // save to local storage.
}

export {addToLocalStorage, getStoreCard}