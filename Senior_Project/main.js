import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DragControls } from 'three/addons/controls/DragControls.js';

const scene = new THREE.Scene();
scene.background 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
const loader2 = new GLTFLoader();

var model; // this is the glTF model

// Load a glTF resource
loader.load(
	// resource URL
	'./public/Public/Day_20_1.glb',
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

var model2;
loader2.load(
	// resource URL
	'./public/Public/Day_28.glb',
	// called when the resource is loaded
	function (gltf) {
        model2 = gltf.scene;
        
        console.log(model2);
        scene.add(model2);
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
const light = new THREE.AmbientLight(0xFFFFFF, 5);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(10, 10, 20).normalize();
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 5, 1);
pointLight.position.set(10, 10, 20); // Set the position of the light
scene.add(pointLight);


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

    if (model2) {
        model2.position.y = 1;
        model2.rotation.x += get_rotation();
        model2.rotation.y += get_rotation();
    }

    // for element in element_array { do the thing }

	renderer.render(scene, camera);
}

animate();

