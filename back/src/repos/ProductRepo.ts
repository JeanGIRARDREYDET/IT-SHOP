import { IProduct } from '@src/models/Product';
import { ProductSchema } from '@src/models/product-schema';

// **** Functions **** //

/**
 * Get one product.
 */
async function getOne(id: string): Promise<IProduct | null> {
  const product = await ProductSchema.findById(id);
  return product;
}

/**
 * See if a product with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const product = await ProductSchema.findById(id);
  if(product){
    return true;
  }

  return false;
}

/**
 * Get all products.
 */
async function getAll(): Promise<IProduct[]> {
  const result = await ProductSchema.find();
  // console.table(result.products? result.products: result);
  // if(result.hasOwnProperty('products')){
  //   result.products
  // }
  // const products = [...result.products? result.products: []];
  // for(const product of products) {
  //   console.log(product);
  // }
  return result;
}

/**
 * Add one product.
 */
async function add(product: IProduct): Promise<void> {
  const res = await new ProductSchema(product);
  //const db = await orm.openDb();
  // db.products.push(product);
  // return orm.saveDb(db);
}

async function migrate(): Promise<void> {
  const manyProducts = [
    {"name":"Tortoise MLP Fund, Inc.","brand":"n/a","description":"Industrial","images":[""],"categories":[""],"price":5850.66, "stock":10,"createdAt":"2022-03-30T08:11:57.000Z"},
    {"name":"USLIFE Income Fund, Inc.","brand":"n/a","description":"Electronics","images":[""],"categories":[""],"price":9889.71, "stock":60,"createdAt":"2021-11-25T03:45:14.000Z"},
    {"name":"PowerShares S&P SmallCap Energy Portfolio","brand":"n/a","description":"Health","images":["", ""],"categories":[""],"price":5744.44,"stock":49,"createdAt":"2022-09-28T01:56:02.000Z"},
    {"name":"PNC Financial Services Group, Inc. (The)","brand":"Finance","description":"Music","images":[""],"categories":["",""],"price":9829,"stock":68,"createdAt":"2023-02-19T23:38:26.000Z"},
    {"name":"Guaranty Bancorp","brand":"Finance","description":"Computers","images":["",""],"categories":[""],"price":5240,"stock":62,"createdAt":"2022-02-09T07:41:58.000Z"},
    {"name":"Innovative Solutions and Support, Inc.","brand":"Technology","description":"Sports","images":["",""],"categories":["",""],"price":8839,"stock":53,"createdAt":"2021-07-31T18:41:13.000Z"},
    {"name":"PB Bancorp, Inc.","brand":"Finance","description":"Electronics","images":[""],"categories":[""],"price":3479,"stock":19,"createdAt":"2023-02-09T00:26:30.000Z"},
    {"name":"Rand Logistics, Inc.","brand":"Consumer Services","description":"Home","images":[""],"categories":["",""],"price":2766,"stock":13,"createdAt":"2022-02-16T14:35:00.000Z"},
    {"name":"Blackrock Enhanced Government Fund, Inc","brand":"n/a","description":"Garden","images":["",""],"categories":[""],"price":7882,"stock":82,"createdAt":"2021-07-11T08:13:12.000Z"},
    {"name":"Vical Incorporated","brand":"Health Care","description":"Music","images":["",""],"categories":["",""],"price":7073,"stock":40,"createdAt":"2021-10-23T17:11:54.000Z"},
    {"name":"LivaNova PLC","brand":"Health Care","description":"Music","images":[""],"categories":[""],"price":9389.53,"stock":96,"createdAt":"2022-03-07T16:43:57.000Z"},
    {"name":"Douglas Dynamics, Inc.","brand":"Capital Goods","description":"Clothing","images":[""],"categories":[""],"price":3985,"stock":18,"createdAt":"2021-07-20T20:39:46.000Z"},
    {"name":"A.H. Belo Corporation","brand":"Consumer Services","description":"Baby","images":[""],"categories":[],"price":6060,"stock":27,"createdAt":"2022-07-22T21:33:40.000Z"},
    {"name":"First Trust BICK Index Fund","brand":"n/a","description":"Jewelry","images":[],"categories":[],"price":7427,"stock":40,"createdAt":"2021-06-28T15:55:17.000Z"},
    {"name":"FNB Bancorp","brand":"Finance","description":"Home","images":["","",""],"categories":["",""],"price":3101,"stock":86,"createdAt":"2022-01-01T10:35:08.000Z"},
    {"name":"Fidelity National Financial, Inc.","brand":"Finance","description":"Home","images":[],"categories":[],"price":6013,"stock":7,"createdAt":"2021-08-26T23:01:46.000Z"},
    {"name":"TPG Pace Energy Holdings Corp.","brand":"n/a","description":"Garden","images":[],"categories":[],"price":599,"stock":53,"createdAt":"2022-03-13T07:49:30.000Z"},
    {"name":"First Acceptance Corporation","brand":"Finance","description":"Kids","images":[],"categories":[],"price":3532,"stock":73,"createdAt":"2022-06-24T08:13:07.000Z"},
    {"name":"W.R. Grace & Co.","brand":"Basic Industries","description":"Grocery","images":[],"categories":[],"price":9083,"stock":47,"createdAt":"2022-11-20T06:51:24.000Z"},
    {"name":"ReWalk Robotics Ltd","brand":"Health Care","description":"Clothing","images":[],"categories":[],"price":8245,"stock":28,"createdAt":"2022-12-18T00:41:19.000Z"},
    {"name":"Ellington Residential Mortgage REIT","brand":"Consumer Services","description":"Industrial","images":[],"categories":[],"price":530.36,"stock":63,"createdAt":"2022-09-30T20:33:42.000Z"},
    {"name":"Cellular Biomedicine Group, Inc.","brand":"Health Care","description":"Clothing","images":[],"categories":[],"price":4882.66,"stock":47,"createdAt":"2022-10-08T17:31:11.000Z"},
    {"name":"Meridian Bancorp, Inc.","brand":"Finance","description":"Home","images":[],"categories":[],"price":8640.33,"stock":88,"createdAt":"2022-02-28T06:40:10.000Z"},
    {"name":"RTI Surgical, Inc.","brand":"Health Care","description":"Shoes","images":[],"categories":[],"price":819.27,"stock":49,"createdAt":"2022-12-29T18:04:01.000Z"},
    // {"name":"AllianzGI Convertible & Income Fund II","brand":"n/a","description":"Jewelry","images":[],"categories":[],"price":"2602,56","stock":79,"createdAt":{"$date":"2023-02-19T04:12:41.000Z"}},
    // {"name":"Hersha Hospitality Trust","brand":"n/a","description":"Music","images":[],"categories":[],"price":"4745,32","stock":49,"createdAt":{"$date":"2022-03-15T05:40:45.000Z"}},
    // {"name":"POSCO","brand":"Basic Industries","description":"Electronics","images":[],"categories":[],"price":"5792,71","stock":38,"createdAt":{"$date":"2022-07-29T23:27:14.000Z"}},
    // {"name":"Lindblad Expeditions Holdings Inc. ","brand":"Consumer Services","description":"Sports","images":[],"categories":[],"price":"5988,75","stock":34,"createdAt":{"$date":"2021-06-02T22:58:39.000Z"}},
    // {"name":"Athene Holding Ltd.","brand":"Finance","description":"Computers","images":[],"categories":[],"price":"8739,38","stock":17,"createdAt":{"$date":"2022-12-14T17:42:09.000Z"}},
    // {"name":"Concordia International Corp.","brand":"Health Care","description":"Tools","images":[],"categories":[],"price":"2591,74","stock":57,"createdAt":{"$date":"2023-01-20T01:11:25.000Z"}},
    // {"name":"Hanmi Financial Corporation","brand":"Finance","description":"Clothing","images":[""],"categories":["",""],"price":"714,99","stock":43,"createdAt":{"$date":"2022-04-21T17:14:49.000Z"}},
    // {"name":"Full House Resorts, Inc.","brand":"Consumer Services","description":"Industrial","images":[""],"categories":[""],"price":"2892,53","stock":80,"createdAt":{"$date":"2022-03-18T02:17:51.000Z"}},
    // {"name":"Main Street Capital Corporation","brand":"n/a","description":"Shoes","images":["",""],"categories":[""],"price":"7636,96","stock":57,"createdAt":{"$date":"2022-12-19T07:17:38.000Z"}},
    // {"name":"Lindblad Expeditions Holdings Inc. ","brand":"Consumer Services","description":"Industrial","images":["","",""],"categories":[""],"price":"2267,54","stock":49,"createdAt":{"$date":"2022-04-19T18:04:35.000Z"}},
    // {"name":"Lindblad Expeditions Holdings Inc. ","brand":"Consumer Services","description":"Clothing","images":["","",""],"categories":[""],"price":"8864,91","stock":6,"createdAt":{"$date":"2021-11-04T11:08:59.000Z"}},
    // {"name":"Urban One, Inc. ","brand":"Consumer Services","description":"Garden","images":["",""],"categories":["",""],"price":"4920,12","stock":46,"createdAt":{"$date":"2021-10-27T11:13:19.000Z"}},
    // {"name":"Liberty Global plc","brand":"Consumer Services","description":"Garden","images":["",""],"categories":["",""],"price":"9912,10","stock":55,"createdAt":{"$date":"2023-02-01T14:44:14.000Z"}},
    // {"name":"Zion Oil & Gas Inc","brand":"Energy","description":"Clothing","images":[""],"categories":[""],"price":"8665,40","stock":62,"createdAt":{"$date":"2021-10-02T17:12:00.000Z"}},
    // {"name":"Boingo Wireless, Inc.","brand":"Consumer Services","description":"Outdoors","images":["","",""],"categories":["",""],"price":"6402,30","stock":98,"createdAt":{"$date":"2021-11-21T20:00:34.000Z"}},
    // {"name":"Nordic American Tankers Limited","brand":"Consumer Services","description":"Baby","images":["","",""],"categories":["",""],"price":"7696,18","stock":14,"createdAt":{"$date":"2022-09-05T09:09:10.000Z"}},
    // {"name":"Oi S.A.","brand":"n/a","description":"Health","images":[""],"categories":["",""],"price":"6785,38","stock":94,"createdAt":{"$date":"2022-11-08T01:18:41.000Z"}},
    // {"name":"Nuveen Arizona Quality Municipal Income Fund","brand":"n/a","description":"Jewelry","images":["",""],"categories":[""],"price":"9795,34","stock":40,"createdAt":{"$date":"2022-01-16T17:43:49.000Z"}},
    // {"name":"Bank of America Corporation","brand":"n/a","description":"Beauty","images":["",""],"categories":["",""],"price":"6609,86","stock":24,"createdAt":{"$date":"2023-03-05T09:45:37.000Z"}},
    // {"name":"Selective Insurance Group, Inc.","brand":"Finance","description":"Movies","images":["",""],"categories":["",""],"price":"4334,26","stock":58,"createdAt":{"$date":"2021-07-03T21:59:17.000Z"}},
    // {"name":"Hurco Companies, Inc.","brand":"Capital Goods","description":"Clothing","images":["","",""],"categories":[""],"price":"8102,94","stock":87,"createdAt":{"$date":"2023-01-14T07:57:40.000Z"}},
    // {"name":"TCF Financial Corporation","brand":"Finance","description":"Sports","images":["","",""],"categories":[""],"price":"6937,45","stock":79,"createdAt":{"$date":"2022-08-21T20:05:59.000Z"}},
    // {"name":"HealthEquity, Inc.","brand":"Miscellaneous","description":"Clothing","images":["",""],"categories":[""],"price":"2004,88","stock":37,"createdAt":{"$date":"2021-06-02T12:31:43.000Z"}},
    // {"name":"PAVmed Inc.","brand":"Health Care","description":"Shoes","images":[""],"categories":[""],"price":"7299,89","stock":39,"createdAt":{"$date":"2021-11-27T04:23:30.000Z"}},
    // {"name":"M III Acquisition Corp.","brand":"Finance","description":"Health","images":["",""],"categories":[""],"price":"8446,58","stock":21,"createdAt":{"$date":"2022-05-27T08:08:33.000Z"}},
    // {"name":"Shinhan Financial Group Co Ltd","brand":"Finance","description":"Toys","images":[""],"categories":[""],"price":"7184,82","stock":40,"createdAt":{"$date":"2022-05-25T10:12:28.000Z"}},
    // {"name":"Foundation Medicine, Inc.","brand":"Health Care","description":"Baby","images":["","",""],"categories":["",""],"price":"7470,45","stock":31,"createdAt":{"$date":"2021-06-17T19:20:57.000Z"}},
    // {"name":"American Vanguard Corporation","brand":"Basic Industries","description":"Outdoors","images":["","",""],"categories":[""],"price":"4762,60","stock":49,"createdAt":{"$date":"2022-03-10T04:23:29.000Z"}},
    // {"name":"Lincoln Educational Services Corporation","brand":"Consumer Services","description":"Kids","images":["",""],"categories":[""],"price":"1657,54","stock":67,"createdAt":{"$date":"2022-02-09T14:22:02.000Z"}},
    // {"name":"Ebix, Inc.","brand":"Technology","description":"Games","images":["","",""],"categories":["",""],"price":"7573,81","stock":21,"createdAt":{"$date":"2021-08-24T11:20:31.000Z"}},
    // {"name":"VivoPower International PLC","brand":"Public Utilities","description":"Electronics","images":["",""],"categories":[""],"price":"4216,67","stock":82,"createdAt":{"$date":"2022-07-03T06:47:51.000Z"}},
    // {"name":"Piper Jaffray Companies","brand":"Finance","description":"Beauty","images":[""],"categories":[""],"price":"4858,71","stock":75,"createdAt":{"$date":"2022-04-07T17:54:22.000Z"}},
    // {"name":"Synopsys, Inc.","brand":"Technology","description":"Music","images":[""],"categories":["",""],"price":"3529,63","stock":88,"createdAt":{"$date":"2023-02-05T07:49:47.000Z"}},
    // {"name":"Kewaunee Scientific Corporation","brand":"Capital Goods","description":"Beauty","images":[""],"categories":["",""],"price":"2627,97","stock":12,"createdAt":{"$date":"2022-06-18T09:56:57.000Z"}},
    // {"name":"PowerShares S&P SmallCap Consumer Staples Portfolio","brand":"n/a","description":"Garden","images":["",""],"categories":["",""],"price":"4090,19","stock":77,"createdAt":{"$date":"2022-10-07T06:40:26.000Z"}},
    // {"name":"Kinross Gold Corporation","brand":"Basic Industries","description":"Toys","images":["",""],"categories":["",""],"price":"4632,97","stock":19,"createdAt":{"$date":"2021-06-07T15:09:55.000Z"}},
    // {"name":"Extra Space Storage Inc","brand":"Consumer Services","description":"Sports","images":["",""],"categories":["",""],"price":"7183,59","stock":10,"createdAt":{"$date":"2022-04-16T01:43:24.000Z"}},
    // {"name":"Cantel Medical Corp.","brand":"Health Care","description":"Books","images":["",""],"categories":[""],"price":"3226,47","stock":37,"createdAt":{"$date":"2021-10-02T01:48:39.000Z"}},
    // {"name":"Sunshine Bancorp, Inc.","brand":"Finance","description":"Games","images":["","",""],"categories":["",""],"price":"2957,45","stock":37,"createdAt":{"$date":"2021-12-06T11:54:23.000Z"}},
    // {"name":"Countrywide Financial Corporation","brand":"n/a","description":"Automotive","images":["","",""],"categories":[""],"price":"2406,53","stock":46,"createdAt":{"$date":"2022-05-16T11:01:12.000Z"}},
    // {"name":"Rockwell Collins, Inc.","brand":"Capital Goods","description":"Home","images":["",""],"categories":[""],"price":"23,77","stock":6,"createdAt":{"$date":"2022-08-17T04:10:56.000Z"}},
    // {"name":"Cogint, Inc.","brand":"Consumer Services","description":"Beauty","images":[""],"categories":[""],"price":"5411,36","stock":53,"createdAt":{"$date":"2022-05-23T18:05:39.000Z"}},
    // {"name":"Omnicom Group Inc.","brand":"Technology","description":"Tools","images":[""],"categories":[""],"price":"1403,65","stock":9,"createdAt":{"$date":"2022-05-03T10:10:50.000Z"}},
    // {"name":"Spirit Realty Capital, Inc.","brand":"Consumer Services","description":"Books","images":["",""],"categories":[""],"price":"4451,51","stock":2,"createdAt":{"$date":"2021-06-21T10:35:32.000Z"}},
    // {"name":"Cowen Inc.","brand":"Finance","description":"Industrial","images":["",""],"categories":[""],"price":"5924,44","stock":72,"createdAt":{"$date":"2021-05-30T13:29:54.000Z"}},
    // {"name":"Beazer Homes USA, Inc.","brand":"Capital Goods","description":"Games","images":["",""],"categories":["",""],"price":"7415,01","stock":35,"createdAt":{"$date":"2022-11-02T00:44:03.000Z"}},
    // {"name":"C","brand":"Energy","description":"Grocery","images":["",""],"categories":[""],"price":"6395,63","stock":52,"createdAt":{"$date":"2022-01-09T19:05:21.000Z"}},
    // {"name":"Federated Investors, Inc.","brand":"Finance","description":"Jewelry","images":["",""],"categories":["",""],"price":"8379,19","stock":8,"createdAt":{"$date":"2022-06-10T14:53:55.000Z"}},
    // {"name":"Royal Caribbean Cruises Ltd.","brand":"Consumer Services","description":"Books","images":["","",""],"categories":[""],"price":"3636,03","stock":46,"createdAt":{"$date":"2022-02-18T12:52:15.000Z"}},
    // {"name":"Becton, Dickinson and Company","brand":"Health Care","description":"Outdoors","images":[""],"categories":[""],"price":"2537,38","stock":27,"createdAt":{"$date":"2021-12-03T12:27:59.000Z"}},
    // {"name":"RiceBran Technologies","brand":"Consumer Non-Durables","description":"Kids","images":[""],"categories":["",""],"price":"6265,17","stock":20,"createdAt":{"$date":"2022-09-13T00:31:32.000Z"}},
    // {"name":"Ecology and Environment, Inc.","brand":"Consumer Services","description":"Clothing","images":["",""],"categories":["",""],"price":"6268,25","stock":38,"createdAt":{"$date":"2022-03-13T15:46:08.000Z"}},
    // {"name":"Medley Capital Corporation","brand":"n/a","description":"Sports","images":["",""],"categories":[""],"price":"1414,49","stock":65,"createdAt":{"$date":"2022-12-17T16:18:24.000Z"}},
    // {"name":"S&T Bancorp, Inc.","brand":"Finance","description":"Toys","images":["","",""],"categories":[""],"price":"6883,66","stock":67,"createdAt":{"$date":"2021-10-27T04:20:36.000Z"}},
    // {"name":"Federated National Holding Company","brand":"Finance","description":"Clothing","images":["",""],"categories":[""],"price":"2319,67","stock":58,"createdAt":{"$date":"2022-09-29T00:18:40.000Z"}},
    // {"name":"MGP Ingredients, Inc.","brand":"Consumer Non-Durables","description":"Toys","images":[""],"categories":["",""],"price":"5687,22","stock":79,"createdAt":{"$date":"2023-01-23T12:32:35.000Z"}},
    // {"name":"Apollo Investment Corporation","brand":"n/a","description":"Kids","images":[""],"categories":["",""],"price":"8418,19","stock":69,"createdAt":{"$date":"2021-05-27T08:54:16.000Z"}},
    // {"name":"SEACOR Holdings, Inc.","brand":"Transportation","description":"Shoes","images":[""],"categories":[""],"price":"8318,65","stock":43,"createdAt":{"$date":"2022-12-30T23:47:30.000Z"}},
    // {"name":"Ritchie Bros. Auctioneers Incorporated","brand":"Miscellaneous","description":"Jewelry","images":[""],"categories":[""],"price":"416,11","stock":62,"createdAt":{"$date":"2021-10-12T19:59:12.000Z"}},
    // {"name":"Broadway Financial Corporation","brand":"Finance","description":"Grocery","images":["","",""],"categories":["",""],"price":"8193,80","stock":49,"createdAt":{"$date":"2023-03-12T21:15:40.000Z"}},
    // {"name":"Turning Point Brands, Inc.","brand":"Consumer Non-Durables","description":"Electronics","images":[""],"categories":[""],"price":"5688,11","stock":70,"createdAt":{"$date":"2021-09-15T19:04:38.000Z"}},
    // {"name":"Teladoc, Inc.","brand":"Health Care","description":"Automotive","images":["","",""],"categories":["",""],"price":"3218,47","stock":35,"createdAt":{"$date":"2021-10-15T10:51:32.000Z"}},
    // {"name":"Great Plains Energy Inc","brand":"n/a","description":"Beauty","images":["","",""],"categories":[""],"price":"45,81","stock":25,"createdAt":{"$date":"2021-12-02T23:11:34.000Z"}},
    // {"name":"T. Rowe Price Group, Inc.","brand":"Finance","description":"Tools","images":[""],"categories":[""],"price":"2951,01","stock":73,"createdAt":{"$date":"2022-03-15T21:58:24.000Z"}},
    // {"name":"Public Storage","brand":"n/a","description":"Kids","images":["","",""],"categories":[""],"price":"8075,81","stock":68,"createdAt":{"$date":"2021-06-25T07:36:07.000Z"}},
    // {"name":"Nuveen Maryland Quality Municipal Income Fund","brand":"n/a","description":"Jewelry","images":[""],"categories":[""],"price":"6381,85","stock":12,"createdAt":{"$date":"2021-07-14T02:21:23.000Z"}},
    // {"name":"Bristol-Myers Squibb Company","brand":"Health Care","description":"Toys","images":[""],"categories":[""],"price":"2335,10","stock":99,"createdAt":{"$date":"2021-06-28T06:15:35.000Z"}},
    // {"name":"Banco Santander, S.A.","brand":"n/a","description":"Baby","images":["","",""],"categories":[""],"price":"8338,78","stock":11,"createdAt":{"$date":"2022-03-17T17:39:27.000Z"}},
    // {"name":"Illinois Tool Works Inc.","brand":"Technology","description":"Movies","images":["",""],"categories":["",""],"price":"263,22","stock":14,"createdAt":{"$date":"2022-07-08T16:24:22.000Z"}},
    // {"name":"Skyworks Solutions, Inc.","brand":"Technology","description":"Sports","images":[""],"categories":[""],"price":"813,89","stock":11,"createdAt":{"$date":"2021-06-03T15:26:19.000Z"}},
    // {"name":"Fidus Investment Corporation","brand":"n/a","description":"Movies","images":["",""],"categories":[""],"price":"6279,02","stock":18,"createdAt":{"$date":"2021-08-20T04:20:35.000Z"}},
    // {"name":"Bank of America Corporation","brand":"Finance","description":"Jewelry","images":["","",""],"categories":[""],"price":"8901,67","stock":77,"createdAt":{"$date":"2021-12-21T11:59:13.000Z"}},
    // {"name":"Double Eagle Acquisition Corp.","brand":"Finance","description":"Shoes","images":["",""],"categories":["",""],"price":"9494,36","stock":77,"createdAt":{"$date":"2022-05-13T00:08:39.000Z"}},
    // {"name":"Ladder Capital Corp","brand":"Consumer Services","description":"Health","images":["",""],"categories":["",""],"price":"4741,86","stock":77,"createdAt":{"$date":"2022-08-15T14:18:03.000Z"}},
    // {"name":"Twenty-First Century Fox, Inc.","brand":"Consumer Services","description":"Automotive","images":["","",""],"categories":[""],"price":"9551,58","stock":7,"createdAt":{"$date":"2021-10-03T05:26:30.000Z"}},
    // {"name":"Neothetics, Inc.","brand":"Health Care","description":"Games","images":["","",""],"categories":[""],"price":"7213,93","stock":76,"createdAt":{"$date":"2021-10-09T13:13:35.000Z"}},
    // {"name":"Carolina Financial Corporation","brand":"Finance","description":"Beauty","images":["","",""],"categories":["",""],"price":"1701,55","stock":10,"createdAt":{"$date":"2022-06-24T07:21:56.000Z"}},
    // {"name":"Origo Acquisition Corporation","brand":"Finance","description":"Games","images":["","",""],"categories":[""],"price":"6391,94","stock":69,"createdAt":{"$date":"2021-09-07T03:17:50.000Z"}},
    // {"name":"Dominion Energy, Inc.","brand":"Public Utilities","description":"Tools","images":["",""],"categories":[""],"price":"714,17","stock":79,"createdAt":{"$date":"2022-01-01T08:44:46.000Z"}},
    // {"name":"RAIT Financial Trust","brand":"Consumer Services","description":"Shoes","images":["",""],"categories":["",""],"price":"3684,26","stock":3,"createdAt":{"$date":"2021-06-08T05:59:33.000Z"}},
    // {"name":"Commerce Union Bancshares, Inc.","brand":"n/a","description":"Jewelry","images":["","",""],"categories":[""],"price":"1392,19","stock":87,"createdAt":{"$date":"2021-05-14T16:33:57.000Z"}},
    // {"name":"TravelCenters of America LLC","brand":"Consumer Durables","description":"Home","images":["","",""],"categories":[""],"price":"4,48","stock":54,"createdAt":{"$date":"2022-12-26T18:32:17.000Z"}},
    // {"name":"Argan, Inc.","brand":"Basic Industries","description":"Outdoors","images":["",""],"categories":[""],"price":"8338,44","stock":36,"createdAt":{"$date":"2022-02-27T21:17:09.000Z"}},
    // {"name":"DBV Technologies S.A.","brand":"Health Care","description":"Industrial","images":[""],"categories":[""],"price":"3671,49","stock":65,"createdAt":{"$date":"2022-12-04T12:00:51.000Z"}},
    // {"name":"Akari Therapeutics Plc","brand":"Health Care","description":"Games","images":[""],"categories":[""],"price":"1876,55","stock":75,"createdAt":{"$date":"2023-02-24T20:33:17.000Z"}},
    {"name":"Pacific Ethanol, Inc.","brand":"Basic Industries","description":"Jewelry","images":["","",""],"categories":[""],"price":4089.13,"stock":10,"createdAt":"2023-01-19T12:15:05.000Z"}
  ];
  const res = await ProductSchema.insertMany(manyProducts);
  console.log(res);
  
}

/**
 * Update a product.
 */
async function update(product: IProduct): Promise<void> {
  // const db = await orm.openDb();
  // for (let i = 0; i < db.products.length; i++) {
  //   if (db.products[i].id === product.id) {
  //     db.products[i] = product;
  //     return orm.saveDb(db);
  //   }
  // }
}

/**
 * Delete one product.
 */
async function delete_(id: string): Promise<void> {
  const res = await ProductSchema.deleteOne({id});
  console.log(res);
  // const db = await orm.openDb();
  // for (let i = 0; i < db.products.length; i++) {
  //   if (db.products[i].id === id) {
  //     db.products.splice(i, 1);
  //     return orm.saveDb(db);
  //   }
  // }
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  migrate,
  update,
  delete: delete_,
} as const;