import { Express } from "express";
import { loginCustomerController, registerCustomerController } from '../controllers/auth.controller';

const customer = (app: Express) => {
    // register user route
    app.route("/auth/register").post(
        async (req, res, next) => {
            try {
                await registerCustomerController(req, res);
            } catch (error: any) {
                next(error); //means that if an error occurs, it will be passed to the next middleware, which in this case is the error handler
            }
        }
    )

    // login user route
    app.route("/auth/login").post(
        async (req, res, next) => {
            try {
                await loginCustomerController(req, res);
            } catch (error: any) {
                next(error); 
            }
        }
    )
}

export default customer;

