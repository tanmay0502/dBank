import { dBank } from "../../declarations/dBank";

 window.addEventListener("load", async function() {
  

 });

 document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault();
    const button = event.target.querySelector("#submit-btn");
    

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", true);

    if(document.getElementById("input-amount").value.length != 0 ){
      await dBank.topUp(inputAmount);
    }
    if(document.getElementById("withdrawal-amount").value.length != 0 ){
      await dBank.withdrawl(outputAmount);
    }
    
    await dBank.compound();

    update()

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";

    button.removeAttribute("disabled");
 });


 document.querySelector("form").addEventListener("submit", async function(event){
  const check2 = event.target.querySelector("#checkBalance-btn");
  document.getElementById("check").removeAttribute("hidden")
  update()
 });

 async function update(){

  const currentAmount = await dBank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount*100)/100;

}