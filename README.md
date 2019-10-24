## How to start node project with <a href="https://www.npmjs.com/package/@rocketseat/omni-cli">@omni-cli</a>

### - [ x ] install <a href="https://nodejs.org/en/">Node.js</a>
### - [ X ] omni init {package_name} --only=server
### [x] <strong><a href="https://yarnpkg.com/lang/en/">yarn</a><strong> dev or npm run dev
### [x] docker run --name {container_name} -p 27017:27017 -d -t mongo
### [x] create controller
### [x] change route
### [x] yarn add mongoose
### [x] integration with api
```javascript
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```
### [x] create model
```javascript
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
```
### [x] integration model in controller 
### [x] create function index and store
### [x] create call tests in Insomnia or Postman

