
var camera, scene, renderer;
init();
requestAnimationFrame(render);
function init(){
camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 3000;
scene = new THREE.Scene();

var vector = new THREE.Vector3();
var spherical = new THREE.Spherical();
var targets = { table: [], sphere: [], helix: [], grid: [] };


    for ( var i = 0, l = 150; i < l; i ++ ) {
        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;
        var object = new THREE.Object3D();
        spherical.set( 800, phi, theta );
        object.position.setFromSpherical( spherical );
        vector.copy( object.position ).multiplyScalar( 2 );
        object.lookAt( vector );
        targets.sphere.push( object );
        scene.add(object);
    }
// scene.add(object);
renderer = new THREE.CSS3DRenderer();
// document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById( 'container' ).appendChild( renderer.domElement );

}
// requestAnimationFrame(render);
function render() {
    renderer.render( scene, camera );
    requestAnimationFrame(render);
}