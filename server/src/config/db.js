const mongoose = require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/HealthPlus', {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    console.log('Connected to HealthPlus Database')
})

module.exports = mongoose