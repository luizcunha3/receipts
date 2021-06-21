module.exports = app => {
    const controller = {};
  
    controller.listItems = (req, res) => res.status(200).json({sucess: true});
    
    return controller;
}