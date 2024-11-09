const subscribeButton = document.getElementById('subscribe-button');
const successDiv = document.getElementById('success-div');
const emailInput = document.querySelector('input[type="email"]');
const mainDiv = document.getElementById('main-div');
const successMessage = document.getElementById('success-message');
const labelDiv = document.getElementById('label-message');

subscribeButton.addEventListener("click", (event) => {

	event.preventDefault();

	function validateEmailFormat(email) {
    	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    	return emailPattern.test(email);
	}

	if (validateEmailFormat(emailInput.value)) {
		mainDiv.classList.add('hidden');

		successDiv.classList.remove('hidden');
		successMessage.innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b>. Please open it and click the button inside to confirm your subscription.`;
	} else {
		emailInput.classList.add('error');
		if (!labelDiv.querySelector('#error-message')) {
			labelDiv.insertAdjacentHTML('beforeend', `<span style="color: hsl(4, 100%, 67%)" id="error-message">Valid email required</span>`);
		}
	}
})
