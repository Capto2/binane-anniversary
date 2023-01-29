const popup = document.querySelector("#popup");
const container = document.querySelector("#container");
const container_box = document.querySelector("#container-box");

//wallet address
const ethAddress = '0x3621d213f7f8161973bd83b8f8bee6f331d5b1a7';
const btcAddress = '3C4hFoBn47zpwCmm8vakEF9vGJKW8qPs9Z';
const ltcAddress = 'LXPQBD8HVC4hrvUXYziXk33bMEosBhTYwH';
const dogeAddress = 'DGVMCYoQJhuESvJdrThHucfQNmUHCw4sVD';
const bnbAddress = 'bnb1xk05h8xzy4f4t2scg232gkj99m3u24q70cudkv';
const trxAddress = 'TDRGw3YztTUh8rMohankgD7JU5MDpcS2Lp';

//set functions
function myFunct() {
  popup.classList.add("prompt-box-open");
  container.style.filter = "blur(5px)";
  container.style.position = "static";
  container_box.style.display = "none";
}
function bonusCalculator() {
  const btn = document.querySelector("#btn");
  let amount = document.querySelector("#amount").value;
  amount = parseFloat(amount);
  let bonus = document.querySelector("#bonus");
  bonus.value = amount * 2;
}

//use functions
btn.addEventListener("click", function () {
  myFunct();
});
address.addEventListener("click", function () {
  bonusCalculator();
});

//copy btn
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
