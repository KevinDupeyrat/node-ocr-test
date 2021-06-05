const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user-test:user-test@nodejs-test.yucsp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose;