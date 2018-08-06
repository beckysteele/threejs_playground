var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

var camera = new THREE.PerspectiveCamera(
    35, // angle
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, 3000 // Near, far for clipping
);

var scene = new THREE.Scene();

// Lighting/shading

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var pointLight = new THREE.PointLight(0xffffff, 0.5);
scene.add(pointLight);

// Create a mesh w/geometry & material

var geometry = new THREE.BoxGeometry(100, 100, 100); // x, y, z axes
var material = new THREE.MeshLambertMaterial({color: 0xf3ffe2});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,0,-1000);

scene.add(mesh);

requestAnimationFrame(render);

function render(){
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

// renderer.render(scene, camera);