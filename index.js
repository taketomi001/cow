import "dotenv/config";
import cowsay from "cowsay";

console.log(cowsay.say({
    text : `Hello ${process.env.MY_NAME}`,
    e : "oO",
    T : "U "
}));