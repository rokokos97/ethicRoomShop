import React from "react";
import PropTypes from "prop-types";
import img from "../../images/itemImage/blackTankTop1.jpeg";
import { Image } from "react-bootstrap";
const ItemCard = ({ item }) => {
    return (
        <div>
            <div>
                    <div>
                        <Image fluid src={img}/>
                    </div>
                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <div className="mt-1">
                        <h4>{item.name}</h4>
                        <div className="text-muted">
                            <span className="ms-2">{item.description}</span>
                        </div>
                        <h4 className="mb-1">
                            {`${item.price} uah`}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
ItemCard.propTypes = {
    item: PropTypes.object
};

export default ItemCard;
