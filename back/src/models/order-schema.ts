
import { Schema, model, Types } from 'mongoose';
import IOrder from './Order';

const orderSchema = new Schema<IOrder>({
 // userID: { type:  Types.ObjectId, required: true },
  products: { type: [String], required: true },
  delivery_address: { type: String, required: true },
  billing_address: { type: String, required: true },
  total_price_without_taxes: { type: Number, required: true },
  total_price_with_taxes: { type: Number, required: true },
  paiement: { type: Number, required: true },
  order_status: { type: String, required: true },
});

// Create a Mongoose Schema.

const OrderSchema = model<IOrder>('Product', orderSchema);

export { OrderSchema };