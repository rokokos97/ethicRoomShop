const categories = [
  {
    _id: '67rdca3eeb7f6fgeed4718181',
    name: 'Dress',
    imgURL: 'https://robohash.org/dress?set=set5',
  },
  {
    _id: '67rdca3eeb7f6fgeed4718151',
    name: 'Pants',
    imgURL: 'https://robohash.org/pants?set=set5',
  },
  {
    _id: '67rdca3eeb7f6fgeed4718161',
    name: 'Hoodies',
    imgURL: 'https://robohash.org/hoodies?set=set5',
  },
  {
    _id: '67rdca3eeb7f6fgeed4718171',
    name: 'Kimono',
    imgURL: 'https://robohash.org/kimono?set=set5',
  },
  {
    _id: '67rdca3eeb7f6fgeed4718191',
    name: 'T-Shirts',
    imgURL: 'https://robohash.org/tshirts?set=set5',
  },
  {
    _id: '67rdca3eeb7f6fgeed4718201',
    name: 'Body',
    imgURL: 'https://robohash.org/body?set=set5',
  },
  {
    _id: '67rdca3eeb7f6fgeed4718211',
    name: 'Outwer',
    imgURL: 'https://robohash.org/outwear?set=set5',
  },
  {
    _id: '67rdca3eeb7f6fgeed4718221',
    name: 'Tops”',
    imgURL: 'https://robohash.org/tops?set=set5',
  },
];

if (!localStorage.getItem('categories')) {
  localStorage.setItem('categories', JSON.stringify(categories));
}
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(JSON.parse(localStorage.getItem('categories')));
    }, 2000);
  });
const update = (id, data) =>
  new Promise((resolve) => {
    const items = JSON.parse(localStorage.getItem('categories'));
    const itemIndex = items.findIndex((u) => u._id === id);
    items[itemIndex] = {...items[itemIndex], ...data};
    localStorage.setItem('categories', JSON.stringify(items));
    resolve(items[itemIndex]);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(
          JSON.parse(localStorage.getItem('categories')).find(
              (item) => item._id === id,
          ),
      );
    }, 1000);
  });
export default {
  fetchAll,
  getById,
  update,
};
