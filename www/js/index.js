
var viewer;


/////////////////////////////////////////////////////////////////////////////////
//
//設定Extension
//
/////////////////////////////////////////////////////////////////////////////////
const config = {
      extensions: [
          'Autodesk.ADN.Extension.Monitor.Selection',
          'MyAwesomeExtension',
          //'markup3d',
          
          //'HeatMapFloorFlat',
          /*'Autodesk.ADN.Extensions.MyTool',*/
          /*'Autodesk.ADN.Extensions.MyPanelTool',
      'Autodesk.focuscolor.contextmenu'*/]
  };
  

/////////////////////////////////////////////////////////////////////////////////
//
//Viewer設定
//
/////////////////////////////////////////////////////////////////////////////////
var options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken,

    useConsolidation: true,
    useADP: false,
}
//civil research build 
var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dGVzdGluZ3VrajZodGI1Y3AyaHlmYmgzb2FicG1zeG5iY3dmcHFvL2NpdmlsYnVpbGRpbmcyMDE4LWYucnZ0';

//crc-p
//var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE5LTAyLTEyLTE0LTE4LTIwLWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL05vLjElMjBMYXVyZW5jZSUyMEdyb3ZlXzEyMDIxOS5ydnQ';

//thesis smaple build
//var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dGVzdGluZ3VrajZodGI1Y3AyaHlmYmgzb2FicG1zeG5iY3dmcHFvL3JhbmRvbV9zYW1wbGVfY29sb3IucnZ0';

Autodesk.Viewing.Initializer(options, function onInitialized() {
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
    
});

function onDocumentLoadSuccess(doc) {

    // A document contains references to 3D and 2D viewables.
    var viewable = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
        'type': 'geometry',
        'role': '3d'
    }, true);
    if (viewable.length === 0) {
        console.error('Document contains no viewables.');
        return;
    }

    // Choose any of the available viewable
    var initialViewable = viewable[0]; // You can check for other available views in your model,
    var svfUrl = doc.getViewablePath(initialViewable);
    var modelOptions = {
        sharedPropertyDbPath: doc.getPropertyDbPath()
    };

    var viewerDiv = document.getElementById('viewerDiv');

    ///////////////USE ONLY ONE OPTION AT A TIME/////////////////////////

    /////////////////////// Headless Viewer /////////////////////////////
    // viewer = new Autodesk.Viewing.Viewer3D(viewerDiv);
    //////////////////////////////////////////////////////////////////////

    //////////////////Viewer with Autodesk Toolbar///////////////////////
    viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv, config);

    //////////////////////////////////////////////////////////////////////

    viewer.start(svfUrl, modelOptions, onLoadModelSuccess, onLoadModelError);
}


function onDocumentLoadFailure(viewerErrorCode) {
    console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}

function onLoadModelSuccess(model) {
    console.log('onLoadModelSuccess()!');
    console.log('Validate model loaded: ' + (viewer.model === model));
    //code before the pause
}

function onLoadModelError(viewerErrorCode) {
    console.error('onLoadModelError() - errorCode:' + viewerErrorCode);
}



/////////////////////////////////////////////////////////////////////////////////
//
// Load Viewer Background Color Extension
//
/////////////////////////////////////////////////////////////////////////////////

function changeBackground (){
       viewer.setBackgroundColor(0, 59, 111, 255,255, 255);
}

/////////////////////////////////////////////////////////////////////////////////
//
// Unload Viewer Background Color Extension
//
/////////////////////////////////////////////////////////////////////////////////

function resetBackground (){
       viewer.setBackgroundColor(169,169,169, 255,255, 255);
}


