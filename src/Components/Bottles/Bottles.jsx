import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoreCard } from "../../Utility/localStorage";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);


    const [cart, setCart] = useState([]);
    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id)
      
    }

    // load cart from local storage
    // useEffect( ()=>{
    //     const storedCart = getStoreCard();
    //     console.log(storedCart)
    // } ,[] )

    return (
        <div>
            <h3>Bottles Available: {bottles.length} </h3>
            <h3>Cart: {cart.length} </h3>

            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;