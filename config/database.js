const mongoose = require('mongoose');
const db = mongoose.connection; 

mongoose.connect(process.env.DATABASE_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


db.on('connected', () => {
    console.log(`Connected to mongoDb on ${db.host}:${db.port}`)
})