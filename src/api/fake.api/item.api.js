const items = [
  {
    _id: '67rdca3eeb7f6fgeed471818',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
    catalogue: 'tshirts',
    allGoods: true,
  },
  {
    _id: '67rdca3eeb7f6fgeed471815',
    name: 'Tiger sweetshot',
    price: 2800,
    imgURL: ['/'],
    description: 'Make your mood with our tiger',
    composition: ['Сotton: 100%'],
    catalogue: 'hoodies',
    allGoods: true,
  },
  {
    _id: '67rdca3eeb7f6fgeed471816',
    name: 'Cargo dirty reflective',
    price: 2800,
    size: ['s', 'm', 'l'],
    imgURL: ['/'],
    description: '',
    composition: ['Viscose: 50%', 'Linen: 50%'],
    catalogue: 'pants',
    allGoods: true,
  },
  {
    _id: '67rdca3eeb7f6fgeed471817',
    name: 'Party dress',
    price: 3400,
    imgURL: ['/'],
    description: 'Dress with transformer chains',
    composition: ['polyester: 100%'],
    catalogue: 'dress',
    allGoods: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471819',
    name: 'Dark kimono',
    price: 2500,
    imgURL: ['/'],
    description: 'Long kimono with embroidery ',
    composition: ['viscose: 50%', 'linen: 50%'],
    catalogue: 'kimono',
    allGoods: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    name: 'Basic body',
    price: 1800,
    imgURL: ['/'],
    description: 'Mesh body with zipper on the back',
    composition: [],
    catalogue: 'body',
    allGoods: false,
  },
  {
    _id: '67rdca3eeb7f6fgeed471821',
    name: 'Kimono coat',
    price: 4800,
    imgURL: ['/'],
    description: 'Warm and gentle coat',
    composition: ['imitative cashmere: 100%'],
    catalogue: 'outwear',
    allGoods: true,
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    name: 'Undershirt “Kyiv metro”',
    price: 650,
    imgURL: ['/'],
    description: 'Basic undershirt ',
    composition: ['Сotton: 100%'],
    catalogue: 'tops',
    allGoods: true,
  },
  {
    _id: '67rdca3eeb7f6fgeed471823',
    name: '“Smiley” linen t-shirt',
    price: 750,
    imgURL: ['/'],
    description: 'Smile like a symbol of strength',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
    catalogue: 'tshirts',
    allGoods: true,
  },
  {
    _id: '67rdca3eeb7f6fgeed471824',
    name: 'Enso',
    price: 900,
    imgURL: ['/'],
    description: 'Long sleeve embroidered top',
    composition: ['Mesh: 100%'],
    catalogue: 'tops',
    allGoods: true,
  },
  {
    _id: '67rdca3eeb7f6fgeed47181f',
    name: 'Skirt - set “wine and dine”',
    price: 980,
    size: ['m'],
    imgURL: ['/'],
    description: '',
    composition: ['linen: 50%', 'Сotton: 50%'],
    catalogue: 'dress',
    allGoods: true,
  },
  {
    _id: '67rdca3eeb7f6fgeed471826',
    name: 'Winter body',
    price: 2200,
    imgURL: ['/'],
    description: '',
    composition: ['cashmere: 100%'],
    catalogue: 'body',
    allGoods: true,
  },
];

if (!localStorage.getItem('items')) {
  localStorage.setItem('items', JSON.stringify(items));
}
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(JSON.parse(localStorage.getItem('items')));
    }, 2000);
  });
const update = (id, data) =>
  new Promise((resolve) => {
    const items = JSON.parse(localStorage.getItem('items'));
    const itemIndex = items.findIndex((u) => u._id === id);
    items[itemIndex] = {...items[itemIndex], ...data};
    localStorage.setItem('items', JSON.stringify(items));
    resolve(items[itemIndex]);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(
          JSON.parse(localStorage.getItem('items')).find(
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
