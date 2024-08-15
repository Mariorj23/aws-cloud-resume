const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://wbfttij47twhd7bht4hgr3t37e0txotu.lambda-url.eu-west-3.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();