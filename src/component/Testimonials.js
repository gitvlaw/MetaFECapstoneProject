import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {faStar} from  '@fortawesome/free-solid-svg-icons';
import '../style/testimonials.css';

const customers = [
    {
        name: "John Smith",
        says: "The food was fantastic and the service was great!",
        getImgSrc: () => require('../icons_assets/customer1youngman.jpg'),
        rating: 5,
    },
    {
        name: "Jane Doe",
        says: "I had a wonderful time at this restaurant!",
        getImgSrc: () => require('../icons_assets/customer2youngwoman.jpg'),
        rating: 5,
    },
    {
        name: "Sarah Lee",
        says: "The staff was friendly and the atmosphere was perfect!",
        getImgSrc: () => require('../icons_assets/customer3woman.jpg'),
        rating: 5,
    },
    {
        name: "Tom Johnson",
        says: "This restaurant is must visit!",
        getImgSrc: () => require('../icons_assets/customer4oldman.jpg'),
        rating: 5,
    }
];

const RatingStar =(props) => {
    const {rating} = props;
    const starToRepeat = [];
    for (let i=0 ; i < rating; i ++) {
        starToRepeat.push(<div key={i}><FontAwesomeIcon icon={faStar} /></div>)
    }
    return (
        <div className="rating-star">
            {starToRepeat}
        </div>
    )
}

const CardTestimonials = ({name, says, rating, imgSrc }) => {
    return (
        <div className="each-testimonial">
            <div className="rating">
                <RatingStar rating={rating} />
            </div>
            <div className="customer-name">
                <p>{name}</p>
            </div>
            <div>
                <img src={imgSrc} alt={name} className="customer-img"></img>
            </div>
            <div className="customer-says">
                <p>{says}</p>

            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonial-heading">
                <h2>What customers say about us</h2>
            </div>
            <div className="testimonials-card">
                {customers.map((customer) => {
                        return (
                            <CardTestimonials
                                name={customer.name}
                                says={customer.says}
                                rating={customer.rating}
                                imgSrc={customer.getImgSrc()}
                            />
                        )
                    })}
            </div>
        </div>
    );
}

export default Testimonials;