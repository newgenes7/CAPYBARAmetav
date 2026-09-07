import * as THREE from 'three';

/**
 * 실험관. 담당 부서는 이 함수 안에서만 작업하면 된다.
 * (그룹 자체의 위치는 건드리지 말 것 — 방끼리 겹친다)
 *
 * @returns {THREE.Group}
 */
export function createExperimentRoom() {
  const room = new THREE.Group();
  room.name = 'experimentRoom';
  room.position.x = 0;

  const placeholder = new THREE.Mesh(
    new THREE.SphereGeometry(2.5, 32, 16),
    new THREE.MeshStandardMaterial({ color: 0x4ecdc4 }),
  );
  placeholder.name = 'experimentPlaceholder';
  room.add(placeholder);

  return room;
}
