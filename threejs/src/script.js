import * as THREE from 'three';
//[Code] agregar libreria OrbitControls

// inicializar la escena
const scene = new THREE.Scene()

// agregar objetos a la escena
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

// inicializar la camara
const camera = new THREE.PerspectiveCamera(
  35, 
  window.innerWidth / window.innerHeight,
  0.1,
  200
  );
camera.position.z = 5

// inicializar el renderizado
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
  //[code] agregar antialias
})
renderer.setSize(window.innerWidth, window.innerHeight)
//[code] agregar renderer.setPixelRatio

//[code] Inicializar los controles
//[code] agregar el addEventListener
//[code] renderizar la escena con un loop

//[code] comentar la siguiente línea
renderer.render(scene, camera)

