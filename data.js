const data = {
    "nodes":[
        {"id":"Automatisierung","group":1},
        {"id":"Digitalisierung","group":1},
        {"id":"Literatur_1","group":2},
        {"id":"Literatur_2","group":2},
        {"id":"Literatur_3","group":2},
        {"id":"Literatur_4","group":2},
        {"id":"Literatur_5","group":2},
        ],

        "links":
        [
            {"source":"Automatisierung","target":"Digitalisierung","value":1},
            {"source":"Automatisierung","target":"Literatur_1","value":1},
            {"source":"Automatisierung","target":"Literatur_2","value":1},
            {"source":"Digitalisierung","target":"Literatur_3","value":1},
            {"source":"Digitalisierung","target":"Literatur_4","value":1},
            {"source":"Automatisierung","target":"Literatur_5","value":1},

            // {"source":"ISO 9001","target":"ISO 10003 ","value":1},{"source":"ISO 9001","target":"ISO 10004 ","value":1},{"source":"ISO 9001","target":"ISO 10005 ","value":1},{"source":"ISO 9001","target":"ISO 10006 ","value":1},{"source":"ISO 9001","target":"ISO 10007 ","value":1},{"source":"ISO 9001","target":"ISO 10008 ","value":1},{"source":"ISO 9001","target":"ISO 10012 ","value":1},{"source":"ISO 9001","target":"ISO/TR 10013 ","value":1},{"source":"ISO 9001","target":"ISO 10014 ","value":1},{"source":"ISO 9001","target":"ISO 10015 ","value":1},{"source":"ISO 9001","target":"ISO/TR 10017 ","value":1},{"source":"ISO 9001","target":"ISO 10018 ","value":1},{"source":"ISO 9001","target":"ISO 10019 ","value":1},{"source":"ISO 9001","target":"ISO 14001 ","value":1},{"source":"ISO 9001","target":"ISO 19011 ","value":1},{"source":"ISO 9001","target":"ISO 31000 ","value":1},{"source":"ISO 9001","target":"ISO 37500 ","value":1},{"source":"ISO 9001","target":"ISO/IEC 90003 ","value":1},{"source":"ISO 9001","target":"IEC 60300-1","value":1},{"source":"ISO 9001","target":"IEC 61160 ","value":1},{"source":"ISO 9001","target":"ISO 12207","value":1},{"source":"ISO 9001","target":"ISO/IEC 25010","value":1},{"source":"ISO 9001","target":"ISO/IEC/IEEE 29119-3","value":1},{"source":"IEEE 1012","target":"IEEE 1012","value":72},{"source":"IEEE 1012","target":"IEEE 1","value":45},{"source":"IEEE 1012","target":"IEEE 15288","value":41},{"source":"IEEE 1012","target":"IEEE 24765","value":25},{"source":"IEEE 1012","target":"IEEE 15","value":10},{"source":"IEEE 1012","target":"IEEE 2","value":2},{"source":"IEEE 1012","target":"IEEE 152","value":2},
        ]
        }