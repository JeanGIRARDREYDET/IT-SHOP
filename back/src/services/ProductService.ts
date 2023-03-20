import ProductRepo from '@src/repos/ProductRepo';
import { IProduct } from '@src/models/Product';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

export const PRODUCT_NOT_FOUND_ERR = 'Product not found';


// **** Functions **** //

/**
 * Get all products.
 */
function getAll(): Promise<IProduct[]> {
  return ProductRepo.getAll();
}

/**
 * Get one product.
 */
function getOne(id: string): Promise<IProduct | null> {
  return ProductRepo.getOne(id);
}

/**
 * Add one product.
 */
function addOne(product: IProduct): Promise<void> {
  return ProductRepo.add(product);
}

/**
 * Migrate.
 */
function migrate(): Promise<void> {
  return ProductRepo.migrate();
}

/**
 * Update one product.
 */
async function updateOne(product: IProduct): Promise<void> {
  const persists = await ProductRepo.persists(product.id? product.id.toString(): '');
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      PRODUCT_NOT_FOUND_ERR,
    );
  }
  // Return product
  return ProductRepo.update(product);
}

/**
 * Delete a product by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await ProductRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      PRODUCT_NOT_FOUND_ERR,
    );
  }
  // Delete product
  return ProductRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  getOne,
  addOne,
  migrate,
  updateOne,
  delete: _delete,
} as const;