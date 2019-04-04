this.points = [];

/////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////
function drawBox (bbox){
    cleanPath();

const { x, y } = bbox;

var cubeGeometry = new THREE.CircleGeometry(0.5, 32);
var cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 1, depthTest: false});
var asd = new THREE.Mesh(cubeGeometry, cubeMaterial);
var pos = new THREE.Vector3(x, y, -7.053806304931641);
asd.geometry.attributes = {position:{array:[]}}
asd.position.x = pos.x;
asd.position.y = pos.y;
asd.position.z = pos.z;

this.points.push(pos);
if(this.points.length >1)
{
    var rev = [];
    var geometry = new THREE.Geometry();
    
    this.points.forEach(element => {
        rev.push(element);
        rev.push(element);
    });
    
    rev = rev.slice(1,rev.length-1)
    rev.forEach(element => {
        geometry.vertices.push(element);
    });

    var linesMaterial = createMaterial(0x0000FF);
    console.log(geometry)
    
    var lines = new THREE.Line(geometry, linesMaterial, THREE.LinePieces);

    viewer.impl.sceneAfter.add(lines);

    viewer.impl.invalidate(true)

}



viewer.impl.sceneAfter.add(asd)

viewer.impl.invalidate(true)
}

/////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////
function createMaterial (color = 0x000000, opacity = 1.0) {

    return new THREE.LineBasicMaterial({
    color: new THREE.Color(color),
    transparent: true,
    depthWrite: false,
    depthTest: true,
    linewidth: 10,
    opacity
    })
}
/////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////
function cleanPath () {

    viewer.impl.sceneAfter.children = []

    viewer.impl.invalidate(true, true, true);

}