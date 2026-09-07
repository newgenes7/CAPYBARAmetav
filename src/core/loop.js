/**
 * requestAnimationFrame 렌더링 루프.
 *
 * @param {import('three').WebGLRenderer} renderer
 * @param {import('three').Scene} scene
 * @param {import('three').Camera} camera
 * @param {(delta: number, elapsed: number) => void} [onFrame] 매 프레임 실행할 추가 로직
 * @returns {() => void} 루프를 멈추는 함수
 */
export function startLoop(renderer, scene, camera, onFrame) {
  let frameId = 0;
  let last = performance.now();
  const start = last;

  function tick(now) {
    frameId = requestAnimationFrame(tick);

    const delta = (now - last) / 1000;
    last = now;

    if (onFrame) onFrame(delta, (now - start) / 1000);
    renderer.render(scene, camera);
  }

  frameId = requestAnimationFrame(tick);

  return () => cancelAnimationFrame(frameId);
}
