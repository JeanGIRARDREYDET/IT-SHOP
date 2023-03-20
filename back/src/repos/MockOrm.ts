

import jsonfile from 'jsonfile';

import { IUser } from '@src/models/User';
import { IProduct } from '@src/models/Product';


// **** Variables **** //

const DB_FILE_NAME = 'database.json';


// **** Types **** //

interface IDbUser {
  users: IUser[];
}
interface IDBProduct {
  products: IProduct[]
}


// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDbUser> {
  return jsonfile.readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDbUser>;
}

/**
 * Update the file.
 */
function saveDb(db: IDbUser): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + DB_FILE_NAME), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
