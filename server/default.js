import News from "./modal/news";
import {data} from "./constants/data";

const DefaultData = async() => {
  try {
    await News.deleteMany({})
     await News.insertMany(data);

     console.log('Data imported successsfully');
  } catch (err) {
    console.log("Error", err.message);
  }
};
export default DefaultData;