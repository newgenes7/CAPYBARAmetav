import * as THREE from 'three';

/**
 * 홍보관. 담당 부서는 이 함수 안에서만 작업하면 된다.
 * (그룹 자체의 위치는 건드리지 말 것 — 방끼리 겹친다)
 *
 * @returns {THREE.Group}
 */
export function createPromoRoom() {
  const room = new THREE.Group();
  room.name = 'promoRoom';
  room.position.x = -20;

  const placeholder = new THREE.Mesh(
    new THREE.BoxGeometry(4, 4, 4),
    new THREE.MeshStandardMaterial({ color: 0xff6b6b }),
  );
  placeholder.name = 'promoPlaceholder';
  room.add(placeholder);

  return room;
}
