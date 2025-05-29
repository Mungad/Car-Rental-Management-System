import { sql } from "drizzle-orm";
import db from "../Drizzle/db";
import { TICustomer, CustomerTable, TSCustomer } from "../Drizzle/schema";

//register a customer
export const createCustomerService = async (user: TICustomer) => {
    await db.insert(CustomerTable).values(user);
    return "Customer added successfully";
}

export const customerLoginService = async (customer: TSCustomer) => {
    const { email } = customer; //extracts email property from customer

    return await db.query.CustomerTable.findFirst({
        columns: {
            customerID: true,
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            role: true
        }, where: sql`${CustomerTable.email} = ${email}`
    })
}
