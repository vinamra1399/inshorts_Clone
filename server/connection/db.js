import mongoose from "mongoose";

const Connection = async () => {
    try {
  const URL = `mongodb+srv://user:codeforinterview@cluster0.acwby.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
  await mongoose.connect(URL,{useNewUrlParser:true})

  console.log('Database connection successful');
    } catch (error) {
        console.log('Error while connecting',error);
    }
}

export default Connection;
