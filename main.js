import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';
import { OBJLoader } from 'https://cdn.skypack.dev/three@0.130.1/examples/jsm/loaders/OBJLoader.js';

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criando os planetas
const planetas = [];

// Terra
const terraTextura = new THREE.TextureLoader().load("imagens/terra.png");
const terraGeometry = new THREE.SphereGeometry(1, 32, 32);
const terraMaterial = new THREE.MeshBasicMaterial({
  map: terraTextura
});
const terra = new THREE.Mesh(terraGeometry, terraMaterial);
scene.add(terra);
terra.position.x = 0; // Adicionando posição da Terra
planetas.push(terra);

// Sol
const solTextura = new THREE.TextureLoader().load("imagens/sol.png");
const solGeometry = new THREE.SphereGeometry(5, 32, 32);
const solMaterial = new THREE.MeshBasicMaterial({
  map: solTextura
});
const sol = new THREE.Mesh(solGeometry, solMaterial);
scene.add(sol);
sol.position.x = -8;
planetas.push(sol);

// Lua
const luaTextura = new THREE.TextureLoader().load("imagens/lua.png");
const luaGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const luaMaterial = new THREE.MeshBasicMaterial({
  map: luaTextura
});
const lua = new THREE.Mesh(luaGeometry, luaMaterial);
scene.add(lua);
lua.position.x = 7;
planetas.push(lua);

// Urano
const uranoTextura = new THREE.TextureLoader().load("imagens/urano.png");
const uranoGeometry = new THREE.SphereGeometry(3, 32, 32);
const uranoMaterial = new THREE.MeshBasicMaterial({
  map: uranoTextura
});
const urano = new THREE.Mesh(uranoGeometry, uranoMaterial);
scene.add(urano);
urano.position.x = 15;
planetas.push(urano);

// Marte
const marteTextura = new THREE.TextureLoader().load("imagens/marte.png");
const marteGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const marteMaterial = new THREE.MeshBasicMaterial({
  map: marteTextura
});
const marte = new THREE.Mesh(marteGeometry, marteMaterial);
scene.add(marte);
marte.position.x = -20;
planetas.push(marte);

// Júpiter
const jupterTextura = new THREE.TextureLoader().load("imagens/jupter.png");
const jupterGeometry = new THREE.SphereGeometry(4, 32, 32);
const jupterMaterial = new THREE.MeshBasicMaterial({
  map: jupterTextura
});
const jupter = new THREE.Mesh(jupterGeometry, jupterMaterial);
scene.add(jupter);
jupter.position.x = -20;
planetas.push(jupter);

// Estado para controlar a posição da câmera
let currentPlanetIndex = 0;

// Função para mover a câmera para o próximo planeta
function moveToNextPlanet() {
  currentPlanetIndex = (currentPlanetIndex + 1) % planetas.length;
  camera.position.x = planetas[currentPlanetIndex].position.x;
}

btn1.addEventListener("click", moveToNextPlanet);

const cameraZPosicao = [4, 6, 12];
let cunrretCameraIndex = 0;
btn2.addEventListener("click", () => {
  cunrretCameraIndex = (cunrretCameraIndex + 1) % cameraZPosicao.length;
  camera.position.z = cameraZPosicao[cunrretCameraIndex]
})
// Ajustar o tamanho do renderizador quando a janela é redimensionada
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

function animate() {
  requestAnimationFrame(animate);
  terra.rotation.y += 0.01;
  sol.rotation.y += 0.001;
  lua.rotation.y += 0.02;
  jupter.rotation.y += 0.01;
  marte.rotation.y += 0.01;
  urano.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();