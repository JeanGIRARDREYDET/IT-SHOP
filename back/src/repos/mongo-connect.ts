import mongoose from 'mongoose';

type TInput = {
  db: string;
}

function getUrlDB(pre: string, post: string, db: string, atlasName?: string): string {
  const dbs= {
    manuel: `mongodb+srv://root:<password>@cluster0.0jdmf.mongodb.net/${db}?retryWrites=true&w=majority`,
    jean: `mongodb+srv://samehim170:75U3UXOK4nrmuPuS@cluster0.urhgeco.mongodb.net/${db}?retryWrites=true&w=majority`,
  };
  if(pre && post){
    console.log('mongo is correctly set with env url ',pre + db + post);
    return pre + db + post;
  } else {
    console.log(dbs['manuel']);
    return dbs['manuel'];
  }
  
  // return dbs[atlasName]
}


const mongoConnection = (pre_url: string, post_url: string, db: string) => {
  
  const connect = () => {
    mongoose
      .connect(getUrlDB(pre_url, post_url, db))
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch(error => {
        console.error('Error connecting to database: ', error);
        throw Error('database error');
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
export default mongoConnection;