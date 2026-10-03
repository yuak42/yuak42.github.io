const terminal = document.querySelector(".terminal");
const terminalBody = document.querySelector(".terminal-body");
const terminalInput = document.querySelector(".terminal-input");
const terminalCommandInput = document.getElementById("terminal-command-input");

terminalCommandInput.focus();

const commands = {
	whoami: "Yunus Emre Ak",
	help:
		"Available commands:\n" +
		"whoami     About me\n" +
		"education  My education\n" +
		"contact    Contact information\n" +
		"clear      Clear terminal",
	education:
		"İTÜ - Mathematical Engineering\n42 Türkiye - Software Development Program",
	contact: "yeak558@gmail.com",
	pwd: "https://yuak42.github.io",
	ls: "Yeah, every time I see a terminal I want to type 'ls' too",
};

terminalCommandInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		terminalInput.before(createTerminalHistory());
		executeCommand(terminalCommandInput.value);
		terminalCommandInput.value = "";
	}
});

terminal.addEventListener("click", () => {
	terminalCommandInput.focus();
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
	let trimmedCommand = command.trim().toLowerCase();
	if (trimmedCommand === "") {
		return;
	} else if (trimmedCommand in commands) {
		terminalInput.before(createTerminalOutput(commands[trimmedCommand]));
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
	terminalCommandInput.focus();
}
