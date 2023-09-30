const { signUp, signIn } = require("../Controllers/auth.controller");
const { verifySignUpRequest, verifySignInRequest } = require("../Middlewares/auth.middlwares");


module.exports=(app)=>{
    
    app.post("/mba/api/v1/auth/signup",[verifySignUpRequest],signUp);
    app.post("/mba/api/v1/auth/signin",[verifySignInRequest],signIn);

}