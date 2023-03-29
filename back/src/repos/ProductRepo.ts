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


/**
 * Update a product.
 */
async function update(product: IProduct): Promise<any> {
  const res = await ProductSchema.findByIdAndUpdate({_id:product._id}, product, {new: true});
  return res
}

/**
 * Delete one product.
 */
async function delete_(id: string): Promise<void> {
  const res = await ProductSchema.deleteOne({id});
  console.log(res);
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;