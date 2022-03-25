const Customer = require("..models/customer.model");
const { request } = require("express");

const healthCheck = (req, res) => {
    res.json({msg: "everything is set up"});
};

const addNewCustomer = (req, res) => {
    const { body } = req;
    console.log("BODY", body);
    Customer.create(body)

    .then((newCustomer) => res.json({ newCustomer }))
    .catch((err) => {
        res.status(400).json({error: error})
    });
};

const findAllCustomers = (req, res) => {
    Customer.find()
    .then(allCustomers => res.json( allCustomers ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

const getOneCustomer = (req, res) => {
    console.log("inside getOneCustomer")
    console.log(req.params.Id)
    Customer.findOne({ _id: req.params.Id })
    .then(oneCustomer => {
        console.log(oneCustomer)
        res.json(oneCustomer)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({error: err})
    });
}

const updateCustomer = (req, res) => {
    Customer.findOneandUpdate({ _id:request.params.id}, request.body, {new:true})
    .then(updateCustomer => responsel.json({ updateCustomer }))
    .catch((err) => {
        console.log(err)
        res.status(400).json({error: err})
    });
};

const deleteCustomer = (req, res) => {
    console.log("inside deleteCustomer")
    console.log(req.params.customerID)
    Customer.deleteOne({_id: req.params.customerId })
    .then(deleteCustomer => {
        console.log(deleteCustomer)
        res.json(deleteCustomer)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({error: err})
    });
};

module.exports = {
    healthCheck,
    addNewCustomer,
    findAllCustomers,
    getOneCustomer,
    updateCustomer,
    deleteCustomer,
};