import mongoose from 'mongoose';
import app from './app';
import { envFile } from './config';
import { Server } from 'http';


let server: Server
const main = async () => {
  try {
    mongoose.connect(envFile.data_base_url as string);

   server = app.listen(envFile.port, () => {
        console.log(`Server is listening on port ${envFile.port}`);
    });



    
  } catch (error) {
    console.log(error);
  }
};

main()



process.on('unhandledRejection', () => {
  console.log("UnhandledPromiseRejection if deleted, shutting down server ");
  if(server) {
    server.close(()=> {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => {
  console.log("Uncaught Exception if deleted, shutting down server ");
  process.exit(1)
})

