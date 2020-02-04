//This is the URL of the server where all the axios requests will be headed
// const SERVER_URL = "http://192.168.1.105:8080/api";
const SERVER_URL = "";
// Not needed when deployment and not needed when using 'proxy' in package.json
const API = {
	login: "/login",
	me: SERVER_URL + "/api/me",
	getcsrf: SERVER_URL + "/api/getcsrf",
	test: SERVER_URL + "/api/test",
	addKeycap: SERVER_URL + "/api/addkeycap",
	getAllKeycaps: SERVER_URL + "/api/getallkeycaps",
	addSwitch: SERVER_URL + "/api/addswitch",
	getAllSwitches: SERVER_URL + "/api/getallswitches",
	addPlate: SERVER_URL + "/api/addplate",
	getAllPlates: SERVER_URL + "/api/getallplates",
	addStabilizer: SERVER_URL + "/api/addstabilizer",
	getAllStabilizers: SERVER_URL + "/api/getallstabilizers",
	addPCB: SERVER_URL + "/api/addpcb",
	getAllPCBs: SERVER_URL + "/api/getallpcbs",
	addKeyboardCase: SERVER_URL + "/api/addkeyboardcase",
	getAllKeyboardCases: SERVER_URL + "/api/getallkeyboardcases",
};

export default API;
