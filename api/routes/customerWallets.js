module.exports = app => {
    const controller = app.controllers.customerWallets
    const itemController = app.controllers.itemController

    app.route('/api/v1/customer-wallets')
      .get(controller.listCustomerWallets);
      
    app.route('/api/v1/list-expenses').get(itemController.listItems);
  }