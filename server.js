const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './configs.env' });
const app = require('./index');

//const DB = process.env.DATABASE.replace('<password>', process.env.DB_PW);
if(process.env.NODE_ENV === 'ci'){
  mongoose
  .connect(process.env.DB_CI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));
}
else{
  mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));
}

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
