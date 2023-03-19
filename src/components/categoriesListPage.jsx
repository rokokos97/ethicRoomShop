import React, {useEffect, useState} from 'react';
import api from '../api';
import ItemsCategoryCard from './itemsCategoryCard';


const CategoriesListPage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api.categories.fetchAll().then((data) => setItems(data));
  }, []);
  return ( items.length === 0 ?
      <div
        className="spinner-grow text-dark d-flex m-5 mx-auto"
        role="status"
      /> :
      <div className="d-flex flex-wrap mx-auto justify-content-center">
        {items.map((item)=>
          <ItemsCategoryCard key={item._id} item={item}/>,
        )
        }
      </div>
  );
};

export default CategoriesListPage;
