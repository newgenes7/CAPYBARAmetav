import { setupScene } from './src/core/sceneSetup.js';
import { startLoop } from './src/core/loop.js';
import { createPromoRoom } from './src/rooms/promoRoom.js';
import { createExperimentRoom } from './src/rooms/experimentRoom.js';
import { createGameRoom } from './src/rooms/gameRoom.js';

const container = document.querySelector('#app');
const { scene, camera, renderer } = setupScene(container);

// 부서별 방을 씬에 추가. 새 방이 생기면 여기에 한 줄씩만 늘리면 된다.
const rooms = [createPromoRoom(), createExperimentRoom(), createGameRoom()];
rooms.forEach((room) => scene.add(room));

// placeholder가 살아 있는지 눈으로 확인할 수 있게 살짝 회전시킨다.
startLoop(renderer, scene, camera, (delta) => {
  rooms.forEach((room) => {
    room.rotation.y += delta * 0.5;
  });
});
