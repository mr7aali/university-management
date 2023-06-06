import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {

    try {
        await mongoose.connect(config.database_url as string);
        console.log("University database connected");
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
    }
    catch (err) {
        console.log("University database got Error", err);
    }
}
main();