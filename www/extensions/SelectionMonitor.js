class SelectionMonitor extends Autodesk.Viewing.Extension {
    constructor(viewer, options) {
        super(viewer, options);
    }
    
    onSelectionChange(event) {
        
        const dbIds = event.dbIdArray;
        if (dbIds.length > 0) {
            console.log('Now Selected: ', event);
            //Notice need manuel set face north direction.
            viewer.navigation.toPerspective()

            var bBox = new THREE.Box3();
    
            viewer.model.getFragmentList().getWorldBounds(event.fragIdsArray[0], bBox);

            //drawBox(bBox);
            /*

            //console.log(bBox);
            const nav = viewer.navigation;
            nav.setPosition(new THREE.Vector3(31.098258018493652,6.346170663833618,0));
            var pos = nav.getPosition(); //person point.
            var target = nav.getTarget();//person eyes target. 
            var angle = 90; //從北邊算起
            var radians = angle*Math.PI/180;
            nav.setTarget(new THREE.Vector3(pos.x+Math.cos(radians),pos.y+Math.sin(radians),pos.z))

            */
            //getid(i);
            //draw();


            
            
        }
        
        else {
            console.log('Now Nothing Selected');
            
        }
        
        
    }

    load() {
        viewer.addEventListener(
            Autodesk.Viewing.SELECTION_CHANGED_EVENT,
            this.onSelectionChange
        );

        return true;
    }

    unload() {
        
        viewer.removeEventListener(
            Autodesk.Viewing.SELECTION_CHANGED_EVENT,
            this.onSelectionChange
        );
        return true;
    }

}

Autodesk.Viewing.theExtensionManager.registerExtension(
    'Autodesk.ADN.Extension.Monitor.Selection',  
    SelectionMonitor  
);

