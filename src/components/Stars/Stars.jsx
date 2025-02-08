import { useState, useRef, useMemo, Suspense , useEffect} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import * as THREE from "three";

const Stars = (props) => {
  const ref = useRef();

  // Ensure correct Float32Array size (multiple of 3)
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3); // 5000 points * 3 (x,y,z)
    random.inSphere(positions, { radius: 1.2 });
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {

  useEffect(() => {
    // Fix scroll-blocking issue by marking wheel event as passive
    const wheelHandler = (event) => event.preventDefault();
    document.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      document.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div className="w-full h-full md:h-[70vh] lg:h-[80vh]  absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor("#000000");
          scene.background = new THREE.Color("#000000");
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
export default StarsCanvas;
