//import { Types } from 'mongoose';
import { Types } from 'mongoose';
import { IProduct } from './Product';
import { UserRoles } from './User';



// **** Types **** //
type IOrderStatus = 'pending' | 'preparing' | 'cancel' | 'arriving' | 'delivered'
export interface ICartProduct extends IProduct {
  quantity: number;
  add_time : Date;
}


export interface ICart {
  products: ICartProduct[],
  total_price?: number,
  createdAt: Date
}
export interface IPaiement {
  userID: Types.ObjectId
  card_name: string;
  card_number: number;
  cvc: number;
  expiration_date: Date;
}


export interface IOrder {
  userID: Types.ObjectId
  products: ICartProduct[];
  delivery_address: string;
  billing_address: string;
  total_price_without_taxes: number;
  total_price_with_taxes: number;
  tax_amount: number;
  paiement: IPaiement;
  order_status: IOrderStatus;
}
const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


export enum OrderStatus {
  PENDING,
  PREPARING,
  INCIDENT,
  CANCEL,
  ARRIVING,
  DELIVERED
}







export interface IUserSignin{
  firstname: string;
  lastname: string;
  bill_address: string;
  delivery_address: string;
  email: string;
  phone: string;
  password:string;
  date_of_birth: Date;
}

export interface IUser {
  _id?: string;
  firstname: string;
  lastname: string;
  bill_address: string;
  delivery_address: string;
  email: string;
  pwdHash?: string;
  role?: UserRoles;
  phone: string;
  date_of_birth: Date;
  orders: IOrder[];
  createdAt: Date
}

export interface ISessionUser {
  id: number;
  email: string;
  name: string;
  role: IUser['role'];
}





// **** Export default **** //
export default IOrder;
