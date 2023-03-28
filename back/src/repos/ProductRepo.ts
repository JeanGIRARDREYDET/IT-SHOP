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
  res.save()
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