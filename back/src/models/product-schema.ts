import { Schema, model } from 'mongoose';
import { IProduct } from '@src/models/Product';

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  categories: { type: [String], required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  createdAt: { type: Date, required: true },
});

// Create a Mongoose Schema.

const ProductSchema = model<IProduct>('Product', productSchema);

export { ProductSchema };
