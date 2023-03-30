// **** Variables **** //



// **** Types **** //



export interface IProduct {
  _id?: object | undefined;
  name: string;
  brand: string;
  description: string;
  categories: string[];
  images: string[];
  price: number;
  stock: number;
  rating: number;
  createdAt: Date;
}

// export interface ICategory {
//   name: string;
//   subcategory: string[];
// }



// **** Product **** //

// class Product implements IProduct {

//   public name: string;
//   public brand: string;
//   public description: string;
//   public images: string[];
//   public categories: string[];
//   public price: number;
//   public stock: number;
//   public createdAt: Date;

//   constructor(
//     name: string,
//     brand: string,
//     description: string,
//     images: string[],
//     categories: string[],
//     price: number,
//     stock: number,
//     createdAt: Date,
//   ) {

//     this.name = name;
//     this.brand = (brand ?? '');
//     this.description = (description ?? '');
//     this.images = (images.length == 0 ? []: images);
//     this.categories = (categories.length == 0 ? []: categories);
//     this.price = price;
//     this.stock = stock;
//     this.createdAt = createdAt;

//   }

  /**
   * Is this an object which contains all the user keys.
   */
  // public static IsProductObject(this: void, arg: unknown): boolean {
  //   return (
  //     !!arg &&
  //     typeof arg === 'object' &&
  //     'name' in arg &&
  //     'brand' in arg &&
  //     'description' in arg &&
  //     'images' in arg &&
  //     'categories' in arg &&
  //     'price' in arg &&
  //     'stock' in arg &&
  //     'ccreatedAt' in arg
  //   );
  // }
// }


// **** Export default **** //

// export default Product;