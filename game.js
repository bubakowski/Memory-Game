let cards = document.querySelectorAll(".card");
let colors = [
	"green",
	"red",
	"blue",
	"pink",
	"yellow",
	"brown",
	"violet",
	"orange",
	"cyan",
	"green",
	"red",
	"blue",
	"pink",
	"yellow",
	"brown",
	"violet",
	"orange",
	"cyan",
];
let arr = [];
let arrMatch = [];

checkMatch = (target) => {
	
	if (arr.length <= 1 && !target.classList.contains("matched") && target.classList.contains("hidden")) {
		arr.push(target);
		console.log(target)
		target.classList.remove("hidden");
		addMoves();
		if (arr.length == 2 && arr[0].classList.value == arr[1].classList.value) {
			console.log("para");
			arr.forEach((el) => {
				setTimeout(() => {
					el.classList.add("matched");
				}, 400);
				
				arrMatch.push(el);
			});
			// board.removeEventListener("click", checkMatch())
			return (arr = []);
		} else if (arr.length >= 2) {
			console.log(arr.length);
			let delay = setTimeout(function () {
				if (
					arr.length >= 2 &&
					arr[0].classList.value !== arr[1].classList.value
				) {
					arr.forEach((el) => {
						el.classList.add("hidden");
					});
					// target.removeEventListener("click")
				}
				return (arr = []);
			}, 700);
		}
	}
};

const addMoves = () => {
	moves++;
	document.querySelector(".moves").textContent = `moves: ${moves}`;
};
let moves = 0;
const createBoard = () => {
	cards.forEach((card) => {
		let colorIndex = Math.floor(Math.random() * colors.length);
		card.classList.add(colors[colorIndex]);
		colors.splice(colorIndex, 1);
		setTimeout(function showUp() {
			card.classList.add("hidden");
		}, 1500);
	});
};
const endGame = () => {
	if (arrMatch.length == cards.length) {
		setTimeout(()=>{alert("Wygrałeś!");
		let endTime = new Date();
		let result = endTime.getTime() - startTime.getTime;
		console.log(result)},50)
	}
};

function game(card) {
	checkMatch(card.target);
	timer();
	endGame();
	console.log(card.target);
	console.log(arrMatch.length);
	console.log(cards.length);
	console.log(arr.length);
	// matchedCardOff(card)
}
createBoard();
const board = document.querySelector(".gameboard");

board.addEventListener("click", game)

console.log(arr.length);

document.querySelector("button").addEventListener("click", () => {
	location.reload()
	console.log(arr);
	console.log(arrMatch);
});
let startTime;
const timer = () => {
	if (moves == 1) {
		startTime = new Date().getTime();
		console.log(startTime)
		return startTime
	}
	if (arrMatch.length == cards.length) {
		let endTime = new Date().getTime();
		let result = (endTime - startTime)/1000;
		document.querySelector(".time").textContent += result.toFixed(2) + `s`
	}
	
};
