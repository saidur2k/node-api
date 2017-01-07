let _ = require('lodash')

let products = [
  {
    Name: 'Anzac Biscuit Family',
    Price: 5,
    Unit: 'Each',
    CupString: '$0.21 / 1EA',
    PackageSize: '24pk 575g',
    Description: 'Anzac Biscuit Family 24pk 575g',
    Image: 'https://wowpmediaaae.azureedge.net/content/wowproductimages/large/145667.jpg',
    WebSource: 'woolworths.com.au',
    Source: 'Aisle.Bakery.InStoreBakery',
    Stockcode: '145667'
  },
  {
    Name: 'Apple Crown',
    Price: 2.5,
    Unit: 'Each',
    CupString: '$2.50 / 1EA',
    PackageSize: '24pk 575g',
    Description: 'Apple Crown  single',
    Image: 'https://wowpmediaaae.azureedge.net/content/wowproductimages/large/512253.jpg',
    WebSource: 'woolworths.com.au',
    Source: 'Aisle.Bakery.InStoreBakery',
    Stockcode: '512253'
  },
  {
    Name: 'Ciabatta Loaf',
    Price: 4,
    Unit: 'Each',
    CupString: '$0.00 / 0',
    PackageSize: '350g',
    Description: 'Ciabatta Loaf  350g',
    Image: 'https://wowpmediaaae.azureedge.net/content/wowproductimages/large/481431.jpg',
    WebSource: 'woolworths.com.au',
    Source: 'Aisle.Bakery.InStoreBakery',
    Stockcode: '481431'
  }
]

const getAll =  () => products
const getByStockCode = (stockCode) => _.find(products, (product) => product.Stockcode === stockCode )
const getByName = (name) => _.find(products, (product) => product.Name === name )


module.exports.getAll = getAll
module.exports.getByStockCode = getByStockCode
module.exports.getByName = getByName