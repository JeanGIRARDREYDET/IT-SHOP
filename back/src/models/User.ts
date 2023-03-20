import { IProduct } from '@src/models/Product';
import { Types } from 'mongoose';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';

export enum UserRoles {
  Guest,
  Client,
  Admin,
}
export enum OrderStatus {
  PENDING,
  PREPARING,
  INCIDENT,
  CANCEL,
  ARRIVING,
  DELIVERED
}


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

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  bill_address: string;
  delivery_address: string;
  email: string;
  pwdHash?: string;
  role?: UserRoles;
  phone: string;
  date_of_birth: Date;
  cart: ICart;
  orders: IOrder[];
  createdAt: Date
}

export interface ISessionUser {
  id: number;
  email: string;
  name: string;
  role: IUser['role'];
}


// **** User **** //

// class User implements IUser {

//   public id: string;
//   public firstname: string;
//   public lastname: string;
//   public address: string;
//   public email: string;
//   public role?: UserRoles;
//   public pwdHash?: string;
//   public phone: string;
//   public date_of_birth: Date;
//   constructor(

//     firstname: string,
//     lastname: string,
//     address: string,
//     phone: string,
//     date_of_birth: Date,
//     email: string,
//     role?: UserRoles,
//     pwdHash?: string,
//     id?: string,
//   ) {

//     this.id = (id?? '');
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.address = address;
//     this.email = email;
//     this.role = (role ?? UserRoles.Guest);
//     this.pwdHash = (pwdHash ?? '');
//     this.phone = phone;
//     this.date_of_birth = date_of_birth;


//     // throw new Error(INVALID_CONSTRUCTOR_PARAM);

//   }

//   /**
//    * Is this an object which contains all the user keys.
//    */
//   public static IsUserObj(this: void, arg: unknown): boolean {
//     return (
//       !!arg &&
//       typeof arg === 'object' &&
//       'id' in arg &&
//       'email' in arg &&
//       'name' in arg &&
//       'role' in arg
//     );
//   }
// }


// **** Export default **** //

export default User;
