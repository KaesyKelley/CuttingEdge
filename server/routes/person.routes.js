const CustomerController = require('../controllers/customer.controller');

module.exports = (app) => {
    app.get('/api', CustomerController.index);
    app.get('/api/customer', CustomerController.findAllCustomers);
    app.post('/api/customer', CustomerController.addNewCustomer);
 //app.get('/api/customer', CustomerController.getAllCustomers);
    app.delete('/api/customer/:CustomerId', CustomerController.deleteCustomer);
    app.put('/api/customer/:id', CustomerController.updateCustomer);
    app.get('/api/customer/:Id', CustomerController.getOneCustomer);
    // app.put('/api/customer/:id/edit', CustomerController.updateCustomer);
}