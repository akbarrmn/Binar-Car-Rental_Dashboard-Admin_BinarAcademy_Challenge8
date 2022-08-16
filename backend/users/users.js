const users = [
    {
        id:"1",
        username:"akbar",
        password:"akbar123",
        isAdmin:true
    },
    {
        id:"2",
        username:"budi",
        password:"budi123",
        isAdmin:false
    }
]
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyARZpKH7N9OgQPLmXQW1ZHLRNB3ZnWiuSs",
    authDomain: "binar-444a0.firebaseapp.com",
    projectId: "binar-444a0",
    storageBucket: "binar-444a0.appspot.com",
    messagingSenderId: "116075098057",
    appId: "1:116075098057:web:4e860df2b2162a51e64218"
})

const db = firebase.firestore()

const ref = db.collection("users")
let data = []
const getData = async () =>{
    const snapshot = await ref.get()
    snapshot.forEach((doc) => {
      data.push({id:doc.id, ...doc.data()})
    })
}

getData()
console.log(data);

module.exports = users