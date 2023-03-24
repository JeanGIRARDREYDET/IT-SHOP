import UserRepo from '@src/repos/UserRepo';
import { IUser, UserRoles } from '@src/models/User';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import PwdUtil from '@src/util/PwdUtil';
import { IUserSignin } from '../models/User';
// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'User not found';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<IUser[]> {
  return UserRepo.getAll();
}

/**
 * Add one user.
 */
async function  addOne(user: IUserSignin): Promise<void> { 
  const {firstname, lastname, email, password, phone, date_of_birth, delivery_address, bill_address } = user

  const userPayload:IUser = {firstname, lastname, email, role: UserRoles.Client , pwdHash: await PwdUtil.getHash(password), phone,date_of_birth, delivery_address, bill_address, orders:[], createdAt: new Date()}

  console.log(userPayload)
  

  return UserRepo.add(userPayload); 
}

/**
 * Update one user.
 */
async function updateOne(user: IUser): Promise<void> {
  const persists = await UserRepo.persists(user._id as string);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Return user
  return UserRepo.update(user);
}

/**
 * Delete a user by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await UserRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return UserRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
