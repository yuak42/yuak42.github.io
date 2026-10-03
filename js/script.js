const commandInput = document.getElementById("terminal-command");

commandInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		console.log(e.target.value);
		return;
	}
});
