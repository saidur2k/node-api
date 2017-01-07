var app = require('../server/server')
var request = require('supertest')
var expect = require('chai').expect

describe('[PRODUCTS]', () => {
  it('should get all products', (done) => {
    request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array')
        expect(resp.body.length).to.equal(3)
        done()
      })
  })

  it('should get a product', (done) => {

    const ciabattaLoaf = {
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

    request(app)
    .get('/products/Ciabatta%20Loaf')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, resp) {
      expect(resp.body).to.be.an('object')
      expect(resp.body).to.deep.equal(ciabattaLoaf)
      done()
    })
  })
})