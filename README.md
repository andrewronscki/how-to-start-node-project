## How to start node project with <a href="https://www.npmjs.com/package/@rocketseat/omni">@omni</a>

### install <a href="https://nodejs.org/en/">Node.js</a>
### install <a href="https://yarnpkg.com/lang/en/">Yarn</a>
### install omni-cli
```
npm i -g @rocketseat/omni
```
### use the CLI to create a new project
```
omni init {package_name} --only=server
```
### open the terminal at the root of the project and type it
```
yarn dev OR npm run dev
```
### create mongo container
```
docker run --name {container_name} -p 27017:27017 -d -t mongo
```
### create controller
### change route
### install mongoose library
```
yarn add mongoose OR npm i --save mongoose
```
### integration with api
```javascript
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```
### create model
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
### integration model in controller 
### create function index and store
### create call tests in Insomnia or Postman

