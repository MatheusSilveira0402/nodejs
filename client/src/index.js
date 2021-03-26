import Events from 'events'
import CliConfig from './cliConfig.js';
import TerminalController from "./terminalController.js";

const [nodePath, filePath, ...commands] = process.argv
const  config = CliConfig.parseArguments(commands)
console.log('config', config)

const componrntEmitter = new Events()

//const controller = new TerminalController()
//await controller.initializeTable(componrntEmitter)

