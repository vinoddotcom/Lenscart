
import mongoose from "mongoose";

 const Connection = async (userName, password) => {
    const URL= `mongodb://vinod:vy122427@ac-r29krhk-shard-00-00.dotfc5d.mongodb.net:27017,ac-r29krhk-shard-00-01.dotfc5d.mongodb.net:27017,ac-r29krhk-shard-00-02.dotfc5d.mongodb.net:27017/?ssl=true&replicaSet=atlas-6j0qv3-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
      await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
      console.log("Connection established")
    } catch (error) {
        console.log("Error connecting to server: ", error.message);
    }
}

export default Connection;