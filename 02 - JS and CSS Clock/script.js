const secondHand 	= document.querySelector('.second-hand');
const minuteHand	= document.querySelector('.min-hand');
const hoursHand 	= document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds /60) *360) +90;
	if (seconds <= 0) {
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		secondHand.style.transition = `none`;
	} else {
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		secondHand.style.transition = `all 0.5s`;
	};

	const minutes = now.getMinutes();
	const minuteDegrees = ((minutes /60) *360) +90;
	if (minutes <= 0) {
		minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
		minuteHand.style.transition = `none`;
	} else {
		minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
		minuteHand.style.transition = `all 0.5s`;
	};
		
	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) *360) +90;
	if (hours <= 0) {
		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
		hoursHand.style.transition = `none`;
	} else {
		hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
		hoursHand.style.transition = `all 0.5s`;
	};
};

setInterval(setDate, 1000);
