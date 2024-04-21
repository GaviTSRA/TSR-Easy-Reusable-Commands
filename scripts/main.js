const ui = require("ui_lib/library");
var dialog = null, button = null;

function loadDialog() {
	dialog = new BaseDialog("TSR Easy Reusabe Commands (TSR ERC)");
	const table = dialog.cont; 

	var fields = [];
	const a = table.table().center().bottom().get();

	var cmd1, cmd2, cmd3, cmd4;
	a.field(Core.settings.get("cmd1", ""), n=>{cmd1 = n; Core.settings.put("cmd1", n)}).width(500).get();

	a.button("Execute", Icon.warning, () => {
		Call.sendChatMessage(Core.settings.get("cmd1", ""));
		if(Core.settings.get("auto-exit", true))
			dialog.hide();
	}).width(200).height(75);
	
	a.add("     ");
	a.row();


	a.field(Core.settings.get("cmd2", ""), n=>{cmd2 = n; Core.settings.put("cmd2", n)}).width(500).get();

	a.button("Execute", Icon.warning, () => {
		Call.sendChatMessage(Core.settings.get("cmd2", ""));
		if(Core.settings.get("auto-exit", true))
			dialog.hide();
	}).width(200).height(75);
	
	a.add("     ");
	a.row();


	a.field(Core.settings.get("cmd3", ""), n=>{cmd3 = n; Core.settings.put("cmd3", n)}).width(500).get();

	a.button("Execute", Icon.warning, () => {
		Call.sendChatMessage(Core.settings.get("cmd3", ""));
		if(Core.settings.get("auto-exit", true))
			dialog.hide();
	}).width(200).height(75);
	
	a.add("     ");
	a.row();


	a.field(Core.settings.get("cmd4", ""), n=>{cmd4 = n; Core.settings.put("cmd4", n)}).width(500).get();

	a.button("Execute", Icon.warning, () => {
		Call.sendChatMessage(Core.settings.get("cmd4", ""));
		if(Core.settings.get("auto-exit", true))
			dialog.hide();
	}).width(200).height(75);
	
	a.add("     ");
	a.row();

	dialog.addCloseButton();
}

ui.onLoad(() => {
        Vars.ui.settings.game.checkPref("save-commands", Core.settings.getBool("save-commands", true));
        Vars.ui.settings.game.checkPref("auto-exit", Core.settings.getBool("auto-exit", false));
	loadDialog();
});

ui.addButton("tsr-erc", "edit", () => {
	dialog.show();
}, b => {button = b.get()});
