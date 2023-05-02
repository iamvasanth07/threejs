const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

const sizes = {
   width: 800,
   height: 600,
}

const camera = new THREE.PerspectiveCamera(
   75,
   sizes.width / sizes.height,
   0.1,
   1000
)

const canvas = document.querySelector(".webgl")

const renderer = new THREE.WebGLRenderer({
   canvas,
})

renderer.setSize(sizes.width, sizes.height)

camera.position.z = 3

renderer.render(scene, camera)

// document.body.appendChild(renderer.domElement)

// camera.position.z = 5

// const animate = function () {
//    requestAnimationFrame(animate)

//    cube.rotation.x += 0.01
//    cube.rotation.y += 0.01

//    renderer.render(scene, camera)
// }

// animate()
