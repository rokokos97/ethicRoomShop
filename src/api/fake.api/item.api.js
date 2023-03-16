const items = [
  {
    _id: '67rdca3eeb7f6fgeed471815',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471816',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471817',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471818',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471819',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471820',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471821',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471822',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471823',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471824',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed47181f',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
  },
  {
    _id: '67rdca3eeb7f6fgeed471826',
    name: 'High tiger',
    price: 980,
    imgURL: ['/'],
    description: 'T-shirt with fun embroidery',
    composition: ['Сotton: 95%', 'Elastane: 5%'],
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
