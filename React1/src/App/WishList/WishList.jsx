import React from "react";
import PropTypes from 'prop-types'; 
import classNames from "classnames";
import WishItem from "./WishItem";

const WishList =({wishes, onWishesChange})=>(
    <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
       <WishItem text={text} done={done} id={`wish${i}`} key={text} onDoneChange={(value) =>{ const updateWishes=[...wishes];
        updateWishes[i].done=value;
        onWishesChange(updateWishes);
    
    }} />
    ))}
</ul>
);
WishList.prototype={
    wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.prototype)),
    onWishesChange:PropTypes.func,
};
WishList.defaultProps={
    wishes:[],
    onWishesChange:()=>{},
}
export default WishList;