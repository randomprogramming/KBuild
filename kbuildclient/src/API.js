//This is the URL of the server where all the axios requests will be headed
const SERVER_URL = "http://192.168.1.105:8080/api";

const API = {
	test: SERVER_URL + "/test",
	addKeycap: SERVER_URL + "/addkeycap",
	getAllKeycaps: SERVER_URL + "/getallkeycaps",
	addSwitch: SERVER_URL + "/addswitch",
	getAllSwitches: SERVER_URL + "/getallswitches",
	addPlate: SERVER_URL + "/addplate",
	getAllPlates: SERVER_URL + "/getallplates",
	addStabilizer: SERVER_URL + "/addstabilizer",
	getAllStabilizers: SERVER_URL + "/getallstabilizers",
	addPCB: SERVER_URL + "/addpcb",
	getAllPCBs: SERVER_URL + "/getallpcbs",
	addKeyboardCase: SERVER_URL + "/addkeyboardcase",
	getAllKeyboardCases: SERVER_URL + "/getallkeyboardcases",
};

export default API;
