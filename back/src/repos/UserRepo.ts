
import { IUser } from '@src/models/User';
import { UserSchema } from '@src/models/user-schema';

import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one user.
 */
async function getOne(email: string): Promise<IUser | null> {
  const d = await UserSchema.findOne({email: email})


  return d
  
}

/**
 * See if a user with the given id exists.
 */
async function persists(id: string): Promise<boolean> {
  const userres = await UserSchema.findById(id)

  return userres?true:false;
}

/**
 * Get all users.
 */
async function getAll(): Promise<IUser[]> {
  const users = await UserSchema.find();
  return users;
}

/**
 * Add one user.
 */
async function add(user: IUser): Promise<void> {
  const res = await new UserSchema(user);
  console.log(res);
}

async function addOrder(): Promise<void> {
  
}

/**
 * Update a user.
 */
async function update(user: IUser): Promise<void> {
  const res = await UserSchema.updateOne(user);
  console.log(res);
}

/**
 * Delete one user.
 */
async function delete_(id: string): Promise<void> {
  const res = await UserSchema.deleteOne({id: id})
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
