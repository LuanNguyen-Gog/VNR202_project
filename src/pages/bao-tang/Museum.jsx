import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, OrbitControls, useTexture, Html } from "@react-three/drei";
import * as THREE from "three";
import { exhibits, HALL } from "./museumData";

const WALK_SPEED = 5;
const EYE_HEIGHT = 1.6;
const MARGIN = 1.2; // cách tường tối thiểu

// Vị trí & hướng của từng tranh theo tường
const slotTransform = (wall, slot) => {
  const zs = [-14, -8, -2, 4, 10];
  switch (wall) {
    case "left":
      return { pos: [-HALL.width / 2 + 0.06, 2.2, zs[slot]], rotY: Math.PI / 2 };
    case "right":
      return { pos: [HALL.width / 2 - 0.06, 2.2, zs[slot]], rotY: -Math.PI / 2 };
    default: // end wall
      return { pos: [slot === 0 ? -3 : 3, 2.3, -HALL.length / 2 + 0.06], rotY: 0 };
  }
};

const Painting = ({ img, wall, slot }) => {
  const texture = useTexture(img);
  const { pos, rotY } = slotTransform(wall, slot);
  const W = 3.2;
  const H = 2.4;

  return (
    <group position={pos} rotation-y={rotY}>
      {/* Khung tranh */}
      <mesh position={[0, 0, -0.05]} castShadow>
        <boxGeometry args={[W + 0.3, H + 0.3, 0.1]} />
        <meshStandardMaterial color="#5a4130" roughness={0.6} />
      </mesh>
      {/* Tranh */}
      <mesh position={[0, 0, 0.011]}>
        <planeGeometry args={[W, H]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      {/* Đèn rọi tranh */}
      <pointLight position={[0, 1.8, 1.2]} intensity={6} distance={5} color="#ffe9c4" />
    </group>
  );
};

const Room = () => {
  const { width, length, height } = HALL;
  return (
    <group>
      {/* Sàn */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[width, length]} />
        <meshStandardMaterial color="#8a6a4e" roughness={0.85} />
      </mesh>
      {/* Thảm đỏ giữa sảnh */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.01, 0]}>
        <planeGeometry args={[2.4, length - 4]} />
        <meshStandardMaterial color="#7a2e30" roughness={0.95} />
      </mesh>
      {/* Trần */}
      <mesh rotation-x={Math.PI / 2} position={[0, height, 0]}>
        <planeGeometry args={[width, length]} />
        <meshStandardMaterial color="#3a2f26" roughness={1} />
      </mesh>
      {/* Tường trái / phải */}
      <mesh position={[-width / 2, height / 2, 0]} rotation-y={Math.PI / 2}>
        <planeGeometry args={[length, height]} />
        <meshStandardMaterial color="#e8d9bd" roughness={0.9} />
      </mesh>
      <mesh position={[width / 2, height / 2, 0]} rotation-y={-Math.PI / 2}>
        <planeGeometry args={[length, height]} />
        <meshStandardMaterial color="#e8d9bd" roughness={0.9} />
      </mesh>
      {/* Tường cuối / đầu */}
      <mesh position={[0, height / 2, -length / 2]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial color="#dcc9a5" roughness={0.9} />
      </mesh>
      <mesh position={[0, height / 2, length / 2]} rotation-y={Math.PI}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial color="#dcc9a5" roughness={0.9} />
      </mesh>
    </group>
  );
};

// Di chuyển WASD khi pointer-lock đang bật
const Player = ({ lockedRef }) => {
  const { camera } = useThree();
  const keys = useRef({});
  const dir = useMemo(() => new THREE.Vector3(), []);
  const side = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    camera.position.set(0, EYE_HEIGHT, HALL.length / 2 - 3);
    const down = (e) => (keys.current[e.code] = true);
    const up = (e) => (keys.current[e.code] = false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [camera]);

  useFrame((_, dt) => {
    if (!lockedRef.current) return;
    const k = keys.current;
    const fwd = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0);
    const strafe = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0);
    if (!fwd && !strafe) return;

    camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();
    side.crossVectors(dir, camera.up).normalize();

    const step = WALK_SPEED * Math.min(dt, 0.05);
    camera.position.addScaledVector(dir, fwd * step);
    camera.position.addScaledVector(side, strafe * step);

    // Giữ người xem trong sảnh
    camera.position.x = THREE.MathUtils.clamp(
      camera.position.x,
      -HALL.width / 2 + MARGIN,
      HALL.width / 2 - MARGIN,
    );
    camera.position.z = THREE.MathUtils.clamp(
      camera.position.z,
      -HALL.length / 2 + MARGIN,
      HALL.length / 2 - MARGIN,
    );
    camera.position.y = EYE_HEIGHT;
  });

  return null;
};

const Loader = () => (
  <Html center>
    <div className="bg-brown text-beige border-2 border-ink shadow-hard rounded-xl px-6 py-3 font-mono text-xs uppercase tracking-widest whitespace-nowrap">
      Đang tải bảo tàng...
    </div>
  </Html>
);

const Museum = ({ isTouch, onLockChange }) => {
  const lockedRef = useRef(false);
  const controlsRef = useRef(null);

  // Cho phép trang gọi .lock() qua nút "Vào tham quan"
  useEffect(() => {
    if (isTouch) return;
    window.__museumLock = () => controlsRef.current?.lock();
    return () => {
      delete window.__museumLock;
    };
  }, [isTouch]);

  return (
    <Canvas
      shadows
      camera={{ fov: 70, position: [0, EYE_HEIGHT, HALL.length / 2 - 3] }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#1a1410"]} />
      <fog attach="fog" args={["#1a1410", 25, 45]} />

      <ambientLight intensity={0.55} />
      {[-15, -7.5, 0, 7.5, 15].map((z) => (
        <pointLight
          key={z}
          position={[0, HALL.height - 0.4, z]}
          intensity={10}
          distance={12}
          color="#fff2d9"
        />
      ))}

      <Suspense fallback={<Loader />}>
        <Room />
        {exhibits.map((e) => (
          <Painting key={e.id} {...e} />
        ))}
      </Suspense>

      {isTouch ? (
        <OrbitControls
          target={[0, EYE_HEIGHT, 0]}
          enablePan={false}
          maxDistance={18}
          minDistance={2}
          maxPolarAngle={Math.PI / 2 + 0.2}
        />
      ) : (
        <>
          <PointerLockControls
            ref={controlsRef}
            onLock={() => {
              lockedRef.current = true;
              onLockChange?.(true);
            }}
            onUnlock={() => {
              lockedRef.current = false;
              onLockChange?.(false);
            }}
          />
          <Player lockedRef={lockedRef} />
        </>
      )}
    </Canvas>
  );
};

export default Museum;
