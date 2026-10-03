const terminalBody = document.querySelector(".terminal-body");
const terminalInput = document.querySelector(".terminal-input");
const terminalCommandInput = document.getElementById("terminal-command-input");

terminalCommandInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		terminalInput.before(createTerminalHistory());
		executeCommand(terminalCommandInput.value);
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

function executeCommand(command) {
	let trimmedCommand = command.trim();
	if (trimmedCommand === "whoami") {
		terminalInput.before(createTermialOutput("Yunus Emre Ak"));
	} else if (trimmedCommand === "help") {
		terminalInput.before(createTerminalOutput("helpText"));
	} else if (trimmedCommand === "clear") {
		clearTerminal();
	} else {
		terminalInput.before(
			createTerminalOutput(`Command not found: ${trimmedCommand}`),
		);
	}
}

function createTerminalOutput(text) {
	const output = document.createElement("div");
	output.classList.add("terminal-output");
	output.textContent = text;

	return output;
}

function clearTerminal() {
	terminalBody.replaceChildren();
	terminalBody.appendChild(terminalInput);
}
