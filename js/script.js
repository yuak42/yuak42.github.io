const terminalCommandInput = document.getElementById("terminal-command-input");
const terminalInput = document.querySelector(".terminal-input");
const terminalBody = document.querySelector(".terminal-body");

if (!terminalBody) {
	console.log("Terminal body problem");
}

terminalCommandInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		console.log(e.target.value);
		terminalInput.before(createTerminalHistory());
		terminalCommandInput.value = "";
	}
});

function createTerminalHistory() {
	let terminalHistory = document.createElement("div");
	terminalHistory.classList.add("terminal-history");

	let prompt = document.createElement("span");
	prompt.classList.add("terminal-prompt");
	prompt.textContent = "yuak42@portfolio $";
	terminalHistory.appendChild(prompt);

	let command = document.createElement("span");
	command.classList.add("terminal-history-command");
	command.textContent = " " + terminalCommandInput.value;
	terminalHistory.appendChild(command);

	return terminalHistory;
}
