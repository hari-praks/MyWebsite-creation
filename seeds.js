const mongoose = require('mongoose');
const doctor= require('./models/doctor');

mongoose.connect('mongodb://localhost:27017/special', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })
 const doctors =   [{ Speciality: "Anaesthesiology", Name: "Mk Sharma", Phonenumber: "9999335612", Location: "Delhi"},
    {  Speciality: "Feline", Name: "Ritwik Joshi", Phonenumber: "8887654123", Location: "Banglore"},
    {  Speciality: "Veterinary immunology", Name: "Ritika Verma", Phonenumber: "7776543562", Location: "Banglore"},
    {  Speciality: "Oncology", Name: "Rahul Singh", Phonenumber: "9876532156", Location: "Chennai"},
    {  Speciality: "Radiology", Name: "Aiswarya Naik", Phonenumber: "9875632145",Location: "Chennai"},
    { Speciality: "Porice", Name: "Shyam Prasad", Phonenumber: "7734567212", Location: "Delhi"},
    {  Speciality: "Pathology",Name: "Pooja Sharma",Phonenumber: "8876543243", Location: "Banglore"},
    {  Speciality: "Radiology", Name: "Rashi Talwar", Phonenumber: "9345123465", Location: "Chennai"},
    {  Speciality: "Veterinary immunology", Name: "Sumit Gupta", Phonenumber: "9876548878", Location: "Vellore"},
    {  Speciality: "Preventive Medicine", Name: "Rahul Singh", Phonenumber: "8444554567",Location: "Vellore"},
    {  Speciality: "Preventive Medicine", Name: "Anvi Mittal", Phonenumber: "8776580987", Location: "Delhi"},
    {  Speciality: "Preventive Medicine", Name: "Nishant Verma", Phonenumber: "9876567787", Location: "Vellore"}
     ]


doctor.insertMany(doctors)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })