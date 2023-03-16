import React, {useEffect, useState} from 'react';
import api from '../api';

const ItemsListPage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api.items.fetchAll().then((data) => setItems(data));
  }, []);
  console.log(items);
  return ( items.length === 0 ?
      <div
        className="spinner-grow text-dark d-flex m-5 mx-auto"
        role="status"
      /> :
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">description</th>
              <th scope="col">composition</th>
            </tr>
          </thead>
          <tbody>
            { items.map((item) =>
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>composititon arr</td>
              </tr>,
            )}

          </tbody>
        </table>
      </div>
  );
};

export default ItemsListPage;
