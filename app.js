const customerList = JSON.parse(localStorage.getItem("customerList"));

function btnAddCustomerOnAction() {
    //  let customerList = JSON.parse(localStorage.getItem("customerList"));
    let customer = {
        id: document.getElementById("txtCustomerId").value,
        name: document.getElementById("txtCustomerName").value,
        age: document.getElementById("txtCustomerAge").value,
        address: document.getElementById("txtCustomerAddress").value
    }
    console.log(customer);

    customerList.push(customer);

    localStorage.setItem("customerList", JSON.stringify(customerList));
    btnLoadTableOnAction();

    // alert("add customer")
}

function btnSearchByIdOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customer = customerList.find(customer => {
        return customer.id === document.getElementById("txtCustomerId").value
    });


    document.getElementById("txtCustomerName").value = customer.name;
    document.getElementById("txtCustomerAge").value = customer.age;
    document.getElementById("txtCustomerAddress").value = customer.address;


    // alert("search customer")
}

function btnDeleteByIdOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customerId = document.getElementById("txtCustomerId").value;

    let index = customerList.findIndex(customer =>{
        return customer.id === customerId;
    })

    customerList.splice(index,1);

    localStorage.setItem("customerList", JSON.stringify(customerList));

    console.log(customerList);
}


function btnUpdateByIdOnAction() {
    alert("update customer");
}

function btnClearStorageOnAction() {
    localStorage.clear();
}

function btnLoadTableOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let body = "";
    customerList.forEach(element => {
        body+=`
                <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.address}</td>
        </tr>
        `
    });

    document.getElementById("tblCustomer").innerHTML=body;

    console.log(body);
    

}