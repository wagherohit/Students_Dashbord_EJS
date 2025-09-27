const express = require('express')

const app = express();


app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.render('pages/home.ejs')
})

app.get('/students',(req,res)=>{
    const students = [
  { name: "Aarav Mehta", rollNo: "101", course: "ExpressJS", batch: "10-12 AM" },
  { name: "Riya Sharma", rollNo: "102", course: "MongoDB", batch: "12-3 PM" },
  { name: "Rohit Patil", rollNo: "103", course: "NodeJS", batch: "2:30-4:30 PM" },
  { name: "Neha Kulkarni", rollNo: "104", course: "EJS", batch: "5-6 PM" }
];

   res.render('pages/students.ejs', {students})
})

app.get('/contact',(req,res)=>{
   res.render('pages/contact.ejs')
})

const PORT =3000

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})