import * as THREE from 'three';

/**
 * 씬 / 카메라 / 렌더러 / 기본 조명을 한 번에 세팅한다.
 * 부서별 방(room) 모듈은 여기서 만든 scene에 Group을 add 하기만 하면 된다.
 *
 * @param {HTMLElement} container 렌더러 캔버스를 붙일 DOM 요소
 * @returns {{ scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer }}
 */
export function setupScene(container = document.body) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x12141c);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.set(0, 12, 45);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // 전체를 은은하게 채우는 빛 + 그림자 방향을 잡아주는 빛
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
  directionalLight.position.set(10, 20, 15);
  scene.add(directionalLight);

  // 창 크기 변경 대응
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, camera, renderer };
}
