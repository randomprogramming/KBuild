//This is the URL of the server where all the axios requests will be headed
const SERVER_URL = "http://192.168.1.105:8080/api";

const API = {
	test: SERVER_URL + "/test",
	addKeycap: SERVER_URL + "/addkeycap",
	getAllKeycaps: SERVER_URL + "/getallkeycaps",
};

export default API;
