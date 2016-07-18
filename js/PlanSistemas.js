/**
 * Created by matias on 7/18/16.
 */

class PlanSistemas{
    constructor(diagramFactory){
        let diagram = diagramFactory.create("myDiagram");
        diagramFactory.init(diagram);
        diagramFactory.load(diagram, this.getPlan());
        diagramFactory.layout(diagram);
    }


    getPlan(){
        return { "nodeDataArray": [

            { "key": "CNE", "text": "EPA" },
            { "key": "CNC", "text": "COC" },
            { "key": "CNM", "text": "Mat 0" },


            { "key": "SI106", "text": "CADP" },
            { "key": "SI104", "text": "Org" },
            { "key": "SI101", "text": "Mate 1" },

            { "key": "SI107", "text": "TProgra" },
            { "key": "SI105", "text": "Arq" },
            { "key": "SI102", "text": "Mate 2" },


            { "key": "SI209", "text": "FOD" },
            { "key": "SI203", "text": "AyED" },
            { "key": "SI207", "text": "Seminario" },

            { "key": "SI210", "text": "DBD" },
            { "key": "SI202", "text": "Ing 1" },
            { "key": "SI206", "text": "POO 1" },
            { "key": "SI204", "text": "ISO" },

            { "key": "SI208", "text": "Ingles" },


            { "key": "SI308", "text": "Mate 3" },
            { "key": "SI302", "text": "Ing 2" },
            { "key": "SI307", "text": "POO 2" },
            { "key": "SI306", "text": "CPLP" },

            { "key": "SI304", "text": "Redes" },
            { "key": "SI305", "text": "Proyecto" },
            { "key": "SI301", "text": "Concurrente" },
            { "key": "SO303", "text": "BD 1" },


            { "key": "SO407", "text": "FTC" },
            { "key": "SI403", "text": "SO" },
            { "key": "SO405", "text": "BD 2" },
            { "key": "SO406", "text": "Ing 3" },

            { "key": "SO410", "text": "Sistemas y Organizacion" },
            { "key": "SI409", "text": "Mate 4" },
            { "key": "SO408", "text": "DSSD" },
            { "key": -1, "text": "Optativa 1" },


            { "key": "SI504", "text": "ASPI" },
            { "key": -2, "text": "Optativa 2" },
            { "key": -1, "text": "Optativa 3" },

            { "key": "SO502", "text": "Tesina" }

        ],
            "linkDataArray": [
                { "from": "CNE", "to": "SI106" },
                { "from": "CNC", "to": "SI106" },
                { "from": "CNM", "to": "SI106" },
                { "from": "CNE", "to": "SI104" },
                { "from": "CNC", "to": "SI104" },
                { "from": "CNM", "to": "SI104" },
                { "from": "CNE", "to": "SI101" },
                { "from": "CNC", "to": "SI101" },
                { "from": "CNM", "to": "SI101" },

                { "from": "SI106", "to": "SI107" },
                { "from": "SI104", "to": "SI105" },
                { "from": "SI101", "to": "SI102" },


                { "from": "SI107", "to": "SI209" },
                { "from": "SI102", "to": "SI203" },
                { "from": "SI107", "to": "SI203" },
                { "from": "SI107", "to": "SI207" },

                { "from": "SI209", "to": "SI210" },
                { "from": "SI107", "to": "SI202" },
                { "from": "SI107", "to": "SI206" },
                { "from": "SI107", "to": "SI204" },
                { "from": "SI105", "to": "SI204" },


                { "from": "SI102", "to": "SI308" },
                { "from": "SI202", "to": "SI302" },
                { "from": "SI208", "to": "SI302" },
                { "from": "SI206", "to": "SI307" },
                { "from": "SI208", "to": "SI307" },
                { "from": "SI203", "to": "SI306" },
                { "from": "SI207", "to": "SI306" },
                { "from": "SI208", "to": "SI306" },

                { "from": "SI102", "to": "SI304" },
                { "from": "SI204", "to": "SI304" },
                { "from": "SI208", "to": "SI304" },
                { "from": "SI210", "to": "SI305" },
                { "from": "SI202", "to": "SI305" },
                { "from": "SI206", "to": "SI305" },
                { "from": "SI207", "to": "SI305" },
                { "from": "SI208", "to": "SI305" },
                { "from": "SI204", "to": "SI301" },
                { "from": "SI207", "to": "SI301" },
                { "from": "SI208", "to": "SI301" },
                { "from": "SI210", "to": "SO303" },
                { "from": "SI208", "to": "SO303" },


                { "from": "SI308", "to": "SO407" },
                { "from": "SI306", "to": "SO407" },
                { "from": "SI304", "to": "SI403" },
                { "from": "SO303", "to": "SO405" },
                { "from": "SI308", "to": "SO406" },
                { "from": "SI202", "to": "SO406" },

                { "from": "SI210", "to": "SO410" },
                { "from": "SI202", "to": "SO410" },
                { "from": "SI208", "to": "SO410" },
                { "from": "SI308", "to": "SI409" },
                { "from": "SI301", "to": "SO408" },
                { "from": "SO303", "to": "SO408" },
                { "from": "SI304", "to": "SO408" },


                { "from": "SI305", "to": "SI504" }
            ]
        };
    }
}