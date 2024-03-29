import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DragControls } from 'three/addons/controls/DragControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

var model; // this is the glTF model



// Load a glTF resource
loader.load(
	// resource URL
	'/Senior_Project/public/Public/Day_20.glb',
	// called when the resource is loaded
	function (gltf) {
        model = gltf.scene;
        
        console.log(model);
        scene.add(model);
	},
	// called while loading is progressing
	function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	// called when loading has errors
	function (error) {
        console.log(error);
	}
);

camera.position.z = 2;

// need lights, otherwise model will be in the dark (I think)
const light = new THREE.AmbientLight(0xFFFFFF);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(10, 10, 20).normalize();
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 5, 1);
pointLight.position.set(10, 10, 20); // Set the position of the light
scene.add(pointLight);

// random motion
var positive_dir = 1;
var current_calls = 0;

// this function is called over and over
function get_rotation() {
    const rotation = positive_dir * 0.01; // either 1 * .01 = .01 or -1 * .01 = -.01 (either forwards or backwards)
    if (current_calls == 500) {  // we keep same direction for 500 (some amount) calls
        var is_positive = Math.round(Math.random()); // 0 or 1, is our random number positive 
        if (is_positive) 
            positive_dir = 1;
        else 
            positive_dir = -1;
        current_calls = 0;
    }
    current_calls++;
    return rotation;
}

// const controls = new DragControls([model], camera,)

function animate() {
	requestAnimationFrame(animate);

    if (model) {
        model.rotation.x += get_rotation();
        model.rotation.y += get_rotation();
    }

	renderer.render(scene, camera);
}

animate();
