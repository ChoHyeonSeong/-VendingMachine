/**
 * 
 */
let coinRemain;
let balance = 0;
function Insert100Coin() {
	balance += 100;
	coinRemain.innerHTML = "<h2>" + balance + "</h2>";
}
function ReturnCoin() {
	balance = 0;
	coinRemain.innerHTML = "<h2>" + balance + "</h2>";
}
window.onload = () => {
	coinRemain = document.getElementById("coinremain");
	document.getElementById("coininsert").onclick = Insert100Coin;
	document.getElementById("coinreturn").onclick = ReturnCoin;
	document.querySelectorAll(".prodbtn").forEach((btn) => {
		btn.onclick = function() {
			let price = parseInt(btn.value);
			if (balance >= price) {
				balance -= price;
				coinRemain.innerHTML = "<h2>" + balance + "</h2>";
			}
		}
	});
}
