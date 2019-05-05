// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
var exec = require("child_process").exec;
var hexo_cli = require("hexo-cli");
var Hexo = require("hexo");
var hexo = new Hexo(process.cwd(), {});
var minimist = require('minimist');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hexo-cmd" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let hexo_g = vscode.commands.registerCommand('extension.hexo.hexo-generate', function () {
		// The code you place here will be executed every time your command is executed
		hexo_cli(process.cwd(), minimist(["generate"])).then(()=>{
			
		});
	});

	let hexo_d = vscode.commands.registerCommand('extension.hexo.hexo-deploy', function () {
		// The code you place here will be executed every time your command is executed
		hexo_cli(process.cwd(), minimist(["deploy"])).then(()=>{

		});
	});

	let hexo_init = vscode.commands.registerCommand('extension.hexo.hexo-init', function () {
		// The code you place here will be executed every time your command is executed
		hexo.init().then(data=>{
			console.log("=======================");
		}).catch(err=>{
			console.log("2=======================");
		});	
	});

	context.subscriptions.push(hexo_g);
	context.subscriptions.push(hexo_d);
	context.subscriptions.push(hexo_init);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
