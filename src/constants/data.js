import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹5600',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹590',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹440',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹301',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹260',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹200',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹160',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹100',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹301',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹260',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: ' Celebrating Culinary Excellence.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Illuminating the Culinary Scene.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Crafting Culinary Excellence.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Transcending Ordinary: A Culinary Journey.',
  },
];

export default { wines, cocktails, awards };
