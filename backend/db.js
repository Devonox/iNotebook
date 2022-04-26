// Connected to Cluster Atlas MongoDB

require("dotenv").config();
const  mongoose  =  require('mongoose');

const uri = `mongodb+srv://Arghadeep:${encodeURIComponent('Devonox')}@cluster0.2w0jt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connectToMongo = ()=>{ 
    mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
}
module.exports = connectToMongo;