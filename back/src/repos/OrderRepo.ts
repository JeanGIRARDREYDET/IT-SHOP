import { IOrder } from '@src/models/Order';
import { OrderSchema } from '@src/models/order-schema';

// **** Functions **** //

/**
 * Get one product.
 */
async function getOne(id: string): Promise<IOrder | null> {
  const order = await OrderSchema.findById(id);
  return order;
}

/**
 * See if a product with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const order = await OrderSchema.findById(id);
  if(order){
    return true;
  }

  return false;
}

/**
 * Get all products.
 */
async function getAll(): Promise<IOrder[]> {
  const result = await OrderSchema.find();
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
async function add(product: IOrder): Promise<void> {
  const res = await new OrderSchema(product);
  //const db = await orm.openDb();
  // db.products.push(product);
  // return orm.saveDb(db);
}

async function migrate(): Promise<void> {
  const res = await OrderSchema.insertMany(manyOrders);
  console.log(res);
  
}

/**
 * Update a product.
 */
async function update(order: IOrder): Promise<void> {
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
  const res = await OrderSchema.deleteOne({id});
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