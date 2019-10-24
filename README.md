## omni init {package_name} --only=server
--
## docker run --name {container_name} -p 27017:27017 -d -t mongo
--
## criação do controller
--
## alteração do route
--
## yarn add mongoose
--
## integração com api
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
--
## criação de model
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
--
## integrar o model no controller
## criar função index e store
## fazer chamadas para teste

