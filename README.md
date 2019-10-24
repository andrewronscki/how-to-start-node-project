## How to start node project with @omni-cli

### omni init {package_name} --only=server
### yarn dev or npm run dev
### docker run --name {container_name} -p 27017:27017 -d -t mongo
### create controller
### change route
### yarn add mongoose
### integration with api
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
### create model
import { Schema, model } from 'mongoose';

const LanguageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});
export default model('Languages', LanguageSchema);
### integration model in controller 
### create function index and store
### create call tests in Insomnia or Postman

