import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
const CategoryCard = ({ item }) => {
    return (
        <div className="">
          <div className="">
            <div className="">
              <Image fluid src={`http://localhost:8080/api${item.image}`}/>
            </div>
               <div className="d-flex flex-column align-items-center text-center position-relative">
                 <div className="mt-1">
                   <h4>{item.name}</h4>
                 </div>
               </div>
            </div>
        </div>
    );
};
CategoryCard.propTypes = {
    item: PropTypes.object
};

export default CategoryCard;
