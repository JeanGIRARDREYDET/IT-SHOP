import { IProduct } from './product'
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
  userID: string
  card_name: string;
  card_number: number;
  cvc: number;
  expiration_date: Date;
}
export interface IOrder {
  userID: string
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
  id?: string;
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