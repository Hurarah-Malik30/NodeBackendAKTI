const mongoose = require('mongoose')


const MONGO_DB_URI = "mongodb://127.0.0.1:27017/aktiWeb4"

const connectToMongoDb = async ()=> {
    try {
        const response = await  mongoose.connect(MONGO_DB_URI)
        if(response){
            console.log(`mongodb connected at ${MONGO_DB_URI}`) 
        }else{
            console.log(`an error ocurred dwhile connecting to MongoDB`)
        }
    } catch (error) {
        console.log(error)
    }
    
    
}
module.exports = connectToMongoDb