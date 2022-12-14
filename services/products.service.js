const Product = require('../database/models/product.model')

module.exports.addProduct = async function(productData){
    let product = new Product({...productData})
    return await product.save();
}

module.exports.fetchAllProducts = async function ({pageNumber=1, pageSize=5}){
    pageSize = parseInt(pageSize);
    pageNumber = parseInt(pageNumber);

    const skip = (pageNumber - 1) * pageSize;
    return Product.find({}).skip(skip).limit(pageSize);
}

module.exports.fetchById = async function(id){
    return Product.findById(id);
}

module.exports.deleteById = async function (id){
    return Product.findOneAndDelete(id);
}

module.exports.updateProduct = async function(id, updatedProduct){
    return Product.findByIdAndUpdate(id, updatedProduct, {returnOriginal: false});
}