const { createProduct, getAllProducts, getProductViaId, updateProduct, deleteProduct, addProductToCart } = require("../Controllers/product.controllers");
const { verifyToken, verifyAdmin } = require("../Middlewares/authJWT");


module.exports = (app)=>{
//create a new product 
app.post("/products",[verifyToken, verifyAdmin],createProduct);
// get all products
app.get("/products",[verifyToken],getAllProducts);
// get a product via product id 
app.get("/products/:id", [verifyToken],getProductViaId);
// update a product via product id 
app.put("/products/:id", [verifyToken, verifyAdmin],updateProduct);
// delete a product via product id 
app.delete("/products/:id", [verifyToken, verifyAdmin],deleteProduct);


app.post("/products/:id/cart", [verifyToken ],addProductToCart);

}