import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import '../style/special.css';
import { NavLink } from "react-router-dom";

const specialItems = [
    {
        title: 'Greek salad',
        price: "$12.99",
        description: 'The famous greek salad of crispy letture, pepers, olivers and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
        getImgSrc: () => require('../icons_assets/greek salad.jpg'),
    },
    {
        title: 'Bruchetta',
        price: "$5.99",
        description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil',
        getImgSrc: () => require('../icons_assets/bruchetta.jpg'),
    },
    {
        title: 'Lemon Dessert',
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
        getImgSrc: () => require('../icons_assets/lemon dessert.jpg'),
    },
];

const CardSpecial = ({title, price, description, imgSrc }) => {
    return (
        <div className="each-card">
            <div className="special-img-div">
                <img src={imgSrc} alt={title} className="special-img"></img>
            </div>
            <div>
                <div className="special-heading">
                    <p>{title}</p>
                    <p className="card-price">{price}</p>
                </div>
                <div className="special-description">
                    <p>{description}</p>
                </div>
                <div className="special-delivery">
                    <NavLink to="/order-online"><p>Order a delivery</p></NavLink>
                    <FontAwesomeIcon icon={faTruck} />
                </div>
            </div>
        </div>
    );
};


function Specials() {
    return (
        <div className="special">
            <div className="special-heading">
                <h1>This weeks Specials!</h1>
                <NavLink to="/order-online"><button aria-label="On Click">Online Order</button></NavLink>
            </div>
            <div className="special-card">
                {specialItems.map((item) => {
                    return (
                        <CardSpecial
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            imgSrc={item.getImgSrc()}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Specials;