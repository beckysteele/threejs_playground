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

// Custom geometry with vertices, a triangle rotating in space
// var geometry = new THREE.Geometry(); 
// geometry.vertices.push(
//     new THREE.Vector3(-10, 10, 0), // x 
//     new THREE.Vector3(-10, -10, 0), // y
//     new THREE.Vector3(10, -10, 0) // z
// );
// geometry.faces.push(new THREE.Face3(0, 1, 2));

// Same triangle with Buffer geometry, optimized for performance but less dynamic
// var geometry = new THREE.BufferGeometry(); 
// var vertices = new Float32Array([
//     -10.0, -10.0, 0.0,
//     10.0, -10.0, 0.0,
//     10.0, 10.0, 0.0
// ]);
// geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));

// Sphere geometry, can also do cone geometry, cylinder, polyhedron, rings, torus, torus knot, etc.
var geometry = new THREE.SphereGeometry(50, 30, 30); // pass in radius, width segments, height segments

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