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
function PickUpFiction(prodNum) {
	switch (prodNum) {
		case 0:
			alert("비로소 사랑 - 네이버 시리즈");
			break;
		case 1:
			alert("네가 나를 좋아했으면 해 - 카카오 페이지");
			break;
		case 2:
			alert("회귀가 너무 과하다 - 노벨피아");
			break;
		case 3:
			alert("하남자의 탑 공략법 - 문피아");
			break;
		case 4:
			alert("화산귀환 - 네이버 시리즈");
			break;
		case 5:
			alert("오아뉴 멱살 한 번 잡힙시다 - 네이버 시리즈");
			break;
	}
}

window.onload = () => {
	coinRemain = document.getElementById("coinremain");
	document.getElementById("coininsert").onclick = Insert100Coin;
	document.getElementById("coinreturn").onclick = ReturnCoin;
	let btns = document.querySelectorAll(".prodbtn");
	for (let i = 0; i < btns.length; i++) {
		let btn = btns[i];
		btn.onclick = function() {
			let price = parseInt(btn.value);
			if (balance >= price) {
				balance -= price;
				coinRemain.innerHTML = "<h2>" + balance + "</h2>";
				PickUpFiction(i);
			}
		}
	}
}
