const exportStops = require("efa-export-stops-by-coordinates");

const ENDPOINT_BASE_URL_TEMPLATE = "http://bsvg.efa.de/vrbstd/XML_COORD_REQUEST?mId=efa_www&language=en&itdLPxx_mapName=MRCV&coordOutputFormat=WGS84%5BGGZHTXX%5D&boundingBox=1&boundingBoxLU={minx}%3A{miny}%3AWGS84%5BDD.DDDDD%5D&boundingBoxRL={maxx}%3A{maxy}%3AWGS84%5BDD.DDDDD%5D&inclFilter=1&purpose=5&max=-1&coordListFormat=STRING&itdLPxx_mdvMapName=mdvMap_efaFullPanelMap&coordListOutputFormat=STRING&scale=13&outputFormat=JSON&type_1=STOP&inclDrawClasses_1=";
const DISTRICT_CODES = ["03101", "03102", "03103", "03151", "03153", "03154", "03157", "03158"];

exportStops(ENDPOINT_BASE_URL_TEMPLATE, 6.2, 51.2, 11.6, 54.2, 0, DISTRICT_CODES);
