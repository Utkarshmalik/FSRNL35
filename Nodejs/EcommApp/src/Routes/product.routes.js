const { createProduct, getAllProducts, getProductViaId, updateProduct, deleteProduct } = require("../Controllers/product.controllers");


module.exports = (app)=>{
//create a new product 
app.post("/products",createProduct);
// get all products
app.get("/products",getAllProducts);
// get a product via product id 
app.get("/products/:id", getProductViaId);
// update a product via product id 
app.put("/products/:id", updateProduct);
// delete a product via product id 
app.delete("/products/:id", deleteProduct);
}