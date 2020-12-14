const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const doctors = require('./models/doctor');

mongoose.connect('mongodb://localhost:27017/special', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.post('/show', async (req, res) => {
    const checkb = (req.body);
    console.log(checkb);
    if (checkb.find_details === undefined) {
        var chn = await doctors.find({ Name: req.body.find });
        if (chn.length !== 0) {
            res.render('show', { doctors: chn });
        }
        else {
            res.send("no Name given");
        }
    }
    else if (checkb.find_details === 'Location') {
        var chn = await doctors.find({Location: req.body.find });
        if (chn.length !== 0) {
            res.render('showp', { doctors: chn });
        }
        else {
            res.send("invalid");
        }
    }
    else if (checkb.find_details === 'Speciality') {
        var chn = await doctors.find({ Speciality: req.body.find  });
        console.log(chn);
        if (chn.length !== 0) {
            res.render('showp', { doctors: chn });
        }
        else {
            res.send("invalid");
        }
    }
    else {
        res.send("Oops!!You got it wrong");
    }
})

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(5000, () => {
    console.log("APP IS LISTENING ON PORT 5000!")
})


