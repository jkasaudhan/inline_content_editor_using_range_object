const editControls = document.querySelector(".edit-controls");

editControls.addEventListener("click", function(event) {
	const command = (event.target !== undefined && event.target.getAttribute("data-command") !== null) ? 
					event.target.getAttribute("data-command"): null;
	if(command === null ) return;
	console.log("Selected command: " + command);

	if(document.getSelection().toString().length === 0) {
		alert("Please select some text before editing the content.");
		return;
	}
	
	let range = window.getSelection().getRangeAt(0);
	const oldConent = document.createTextNode(range.toString());
	const newElement = document.createElement(command);
	newElement.append(oldConent);
	range.deleteContents();
	range.insertNode(newElement);
});