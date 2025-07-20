const mongoose=require('mongoose');
const URI= "mongodb+srv://arsharma2951:aryan2951@cluster0.ijlxdvj.mongodb.net/my-ecommerce";

const mongodb=() => {
    try {
        mongoose.connect(URI, {
          useUnifiedTopology:true,
          useNewUrlParser:true,

              
        });
        console.log("Connected to MongoDB");

        
    } catch (error) {
        console.error(error)
        
    }
}
module.exports=mongodb;