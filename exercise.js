console.log("Hi!")

/*
//CRUD- create /read/update/delete

//clear
localStorage.clear()

//create data
localStorage.setItem("name","Wicky")
localStorage.setItem("age","25")
localStorage.setItem("country","Australia")

//UPDATE
//update the name assign to same evariable
localStorage.setItem("name","dew")

//if you want another name make a  new variable
localStorage.setItem("name1","Pealy")

//Delete/remove
localStorage.removeItem("name1")


//search 
let name = localStorage.getItem("name")
console.log(name);

localStorage.clear()

//save objects
let customer ={
    name:"Kamal",
    age:16,
    isActive:true
}

//objects saves as - [Object Object]
localStorage.setItem("customer",customer)
console.log(localStorage.getItem("customer"))
*/

//how to save an object
let customer ={
    name:"Kamal",
    age:16,
    isActive:true
}
//converts to string and reverse back steps

//1--convert to string
let stringCustomer = JSON.stringify(customer)
//2--save in local storage--> but saves as a string
localStorage.setItem("customer",stringCustomer)
//3--convert string to object
let retCustomer = localStorage.getItem("customer")
let jsonCustomer = JSON.parse(retCustomer)

//print as an object
console.log(jsonCustomer)
