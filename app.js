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

let name = localStorage.getItem("name")
console.log(name);*/

localStorage.clear()

let customer ={
    name:"Kamal",
    age:16,
    isActive:true
}

//Object Object
localStorage.setItem("customer",customer)
console.log(localStorage.getItem("customer"))


//converts to string and reverse back 
let stringCustomer = JSON.stringify(customer)

localStorage.setItem("customer",stringCustomer)

let retCustomer = localStorage.getItem("customer")

let jsonCustomer = JSON.parse(retCustomer)

console.log(jsonCustomer)
