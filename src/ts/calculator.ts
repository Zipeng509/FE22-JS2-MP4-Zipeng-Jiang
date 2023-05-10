let imgUrl = new URL("../calc.jpeg", import.meta.url);
document.body.style.background = `url(${imgUrl.href})`;

const nbr0Btn = document.getElementById("nbr-0") as HTMLButtonElement | null;
if (!nbr0Btn) {
  throw new Error("button element with id nbr-0 not found");
}

const nbr1Btn = document.getElementById("nbr-1") as HTMLButtonElement | null;
if (!nbr1Btn) {
  throw new Error("button element with id nbr-1 not found");
}

const nbr2Btn = document.getElementById("nbr-2") as HTMLButtonElement | null;
if (!nbr2Btn) {
  throw new Error("button element with id nbr-2 not found");
}

const nbr3Btn = document.getElementById("nbr-3") as HTMLButtonElement | null;
if (!nbr3Btn) {
  throw new Error("button element with id nbr-3 not found");
}

const nbr4Btn = document.getElementById("nbr-4") as HTMLButtonElement | null;
if (!nbr4Btn) {
  throw new Error("button element with id nbr-4 not found");
}

const nbr5Btn = document.getElementById("nbr-5") as HTMLButtonElement | null;
if (!nbr5Btn) {
  throw new Error("button element with id nbr-5 not found");
}

const nbr6Btn = document.getElementById("nbr-6") as HTMLButtonElement | null;
if (!nbr6Btn) {
  throw new Error("button element with id nbr-6 not found");
}

const nbr7Btn = document.getElementById("nbr-7") as HTMLButtonElement | null;
if (!nbr7Btn) {
  throw new Error("button element with id nbr-7 not found");
}

const nbr8Btn = document.getElementById("nbr-8") as HTMLButtonElement | null;
if (!nbr8Btn) {
  throw new Error("button element with id nbr-8 not found");
}

const nbr9Btn = document.getElementById("nbr-9") as HTMLButtonElement | null;
if (!nbr9Btn) {
  throw new Error("button element with id nbr-9 not found");
}

const multiplicationBtn = document.getElementById(
  "multiplication"
) as HTMLButtonElement | null;
if (!multiplicationBtn) {
  throw new Error("button element with id multiplication not found");
}

const divisionBtn = document.getElementById(
  "division"
) as HTMLButtonElement | null;
if (!divisionBtn) {
  throw new Error("button element with id division not found");
}

const additionBtn = document.getElementById(
  "addition"
) as HTMLButtonElement | null;
if (!additionBtn) {
  throw new Error("button element with id addition not found");
}

const subtractionBtn = document.getElementById(
  "subtraction"
) as HTMLButtonElement | null;
if (!subtractionBtn) {
  throw new Error("button element with id subtraction not found");
}

const equalBtn = document.getElementById("equal") as HTMLButtonElement | null;
if (!equalBtn) {
  throw new Error("button element with id equal not found");
}

const clearBtn = document.getElementById("clear") as HTMLButtonElement | null;
if (!clearBtn) {
  throw new Error("button element with id clear not found");
}

const displayElement = document.getElementById("display");
if (!displayElement) {
  throw new Error("element with id display not found");
}

const nbrButtons = [
  nbr0Btn,
  nbr1Btn,
  nbr2Btn,
  nbr3Btn,
  nbr4Btn,
  nbr5Btn,
  nbr6Btn,
  nbr7Btn,
  nbr8Btn,
  nbr9Btn,
];
for (const [index, nbrButton] of nbrButtons.entries()) {
  nbrButton.addEventListener("click", () => {
    displayElement.innerText += index;
  });
}

const OPERATIONS = ["+", "-", "*", "/"];
function isOperationCharacter(character: string): boolean {
  return OPERATIONS.includes(character);
}

additionBtn.addEventListener("click", () => {
  const { innerText } = displayElement;
  const lastCharacter = innerText[innerText.length - 1];
  if (isOperationCharacter(lastCharacter)) {
    return;
  }
  displayElement.innerText += "+";
});

subtractionBtn.addEventListener("click", () => {
  const { innerText } = displayElement;
  const lastCharacter = innerText[innerText.length - 1];
  if (isOperationCharacter(lastCharacter)) {
    return;
  }
  displayElement.innerText += "-";
});

multiplicationBtn.addEventListener("click", () => {
  const { innerText } = displayElement;
  const lastCharacter = innerText[innerText.length - 1];
  if (isOperationCharacter(lastCharacter)) {
    return;
  }
  displayElement.innerText += "*";
});

divisionBtn.addEventListener("click", () => {
  const { innerText } = displayElement;
  const lastCharacter = innerText[innerText.length - 1];
  if (isOperationCharacter(lastCharacter)) {
    return;
  }
  displayElement.innerText += "/";
});

clearBtn.addEventListener("click", () => {
  displayElement.innerText = "";
});

equalBtn.addEventListener("click", () => {
  const { innerText } = displayElement;
  const result = eval(innerText);
  displayElement.innerText = result;
});
