import React, { useState } from "react";
import "./App.css";
import WishInput from "./WishInput";
import WishList from "./WishList";

const initialWishes = [
    { text: "Travel to the moon", done: false },
    { text: "Pay the gym", done: true },
    { text: "Go to the moon", done: false },
    { text: "Make an intro course to React", done: true },
];

const App = () => {
    const [wishes, setWishes]= useState(initialWishes);
    return(
    <div className="app">
        <h3>Introducción a React</h3>
        <h1>My Wishlist app</h1> 
        <WishInput onNewWish ={wish=>setWishes([wish, ...wishes])}/>
        <WishList wishes={wishes} onWishesChange={setWishes} />
        <button type="button" className="wish-clear" onClick={()=>{setWishes
        (wishes.filter(wish=>!wish.done))}}>
            Archive done
        </button>
    </div>
);
};
export default App;
