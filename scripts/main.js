const ui = require("ui-lib/library");
var dialog = null, button = null;

function loadDialog() {
	dialog = new BaseDialog("TSR Easy Reusabe Commands (TSR ERC)");
	const table = dialog.cont; 

	var fields = [];
	const a = table.table().center().bottom().get();

	var cmd1, cmd2, cmd3, cmd4;
	a.field("", n=>{cmd1 = n}).width(500).get();

	a.button("Execute", Icon.warning, () => {
		Call.sendChatMessage(cmd1);
		dialog.hide();
	}).width(200).height(75);
	
	a.add("     ");
	a.row();


	a.field("", n=>{cmd2 = n}).width(500).get();

	a.button("Execute", Icon.warning, () => {
		Call.sendChatMessage(cmd2);
		dialog.hide();
	}).width(200).height(75);
	
	a.add("     ");
	a.row();


	a.field("", n=>{cmd3 = n}).width(500).get();

	a.button("Execute", Icon.warning, () => {
		Call.sendChatMessage(cmd3);
		dialog.hide();
	}).width(200).height(75);
	
	a.add("     ");
	a.row();


	a.field("", n=>{cmd4 = n}).width(500).get();

	a.button("Execute", Icon.warning, () => {
		Call.sendChatMessage(cmd4);
		dialog.hide();
	}).width(200).height(75);
	
	a.add("     ");
	a.row();

	dialog.addCloseButton();
}

ui.onLoad(() => {
	loadDialog();
});

ui.addButton("tsr-erc", "edit", () => {
	dialog.show();
}, b => {button = b.get()});
