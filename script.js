const RNG_CLASS = ".rng"
const GENERATE_BUTTON_CLASS = '.reset'

const rng = document.querySelector(RNG_CLASS);
const generateButton = document.querySelector(GENERATE_BUTTON_CLASS);

const generateNumber = () => {
    const randomizer = Math.floor(Math.random() * 100 + 1);
    rng.innerHTML = randomizer;
}

generateButton.addEventListener("click", generateNumber);

generateNumber();
