const commandInput = document.getElementById("terminal-command");
const terminalBody = document.querySelector(".terminal-body");

if (!terminalBody) {
	console.log("Terminal body problem");
}

commandInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		console.log(e.target.value);
		terminalBody.appendChild(createTerminalInput());
	}
});

function createTerminalInput() {
	let terminalInput = document.createElement("div");
	terminalInput.classList = "terminal-input";

	let prompt = document.createElement("span");
	prompt.classList = "terminal-prompt";
	prompt.textContent = "yuak42@portfolio $";

	terminalInput.appendChild(prompt);

	let input = document.createElement("input");
	input.classList = "terminal-command";

	terminalInput.appendChild(input);

	return terminalInput;
}
