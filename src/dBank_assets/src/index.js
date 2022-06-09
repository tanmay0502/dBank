import { dBank } from "../../declarations/dBank";

 window.addEventListener("load",async function(){

    const currentAmount = await dBank.checkBalance();
    document.getElementById("value").innerText = currentAmount;
 });