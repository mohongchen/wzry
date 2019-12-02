module.exports = app => {
    const mongoose = require("mongoose")
    mongoose.connect('mongodb://mobaAdmin:mobaAdmin@127.0.0.1:27017/node-vue-moba', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log('链接成功'))
        .catch(err => {
            console.log(err)
        })
}