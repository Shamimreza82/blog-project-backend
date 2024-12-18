import mongoose from 'mongoose';
import app from './app';
import { envFile } from './config';

const main = async () => {
  try {
    mongoose.connect(envFile.data_base_url as string);

    app.listen(envFile.port, () => {
        console.log(`Server is listening on port ${envFile.port}`);
    });



    
  } catch (error) {
    console.log(error);
  }
};


main()