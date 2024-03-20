/**
 * 
 */
let coinRemain;
let balance = 0;
function Insert100Coin() {
	balance += 100;
	coinRemain.innerHTML = "<h2>" + balance + "</h2>";
}
function ReturnCoin(){
	balance = 0;
	coinRemain.innerHTML = "<h2>" + balance + "</h2>";
}
window.onload = () => {
	document.getElementById("coininsert").onclick = Insert100Coin;
	document.getElementById("coinreturn").onclick = ReturnCoin;
	coinRemain = document.getElementById("coinremain");
}
