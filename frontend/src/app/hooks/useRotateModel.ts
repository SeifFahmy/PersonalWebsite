import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, BufferGeometry, NormalBufferAttributes, Material, Object3DEventMap } from "three";

type models = Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap> | THREE.Group<THREE.Object3DEventMap>

const useRotateModel = () => {
    const trophyRef = useRef<any>(null);
    useFrame((state) => {
        const trophy = trophyRef.current;
        if (!trophy) return;

        const angleX = (0.05 * Math.PI) / 180;
        const angleY = angleX / 2;

        const turnLeft = () => {
            if (trophy.rotation.y > -0.3)
                trophy.rotation.y -=
                    angleX * Math.abs(trophy.position.x - state.pointer.x);
        };

        const turnRight = () => {
            if (trophy.rotation.y < 0.3)
                trophy.rotation.y +=
                    angleX * Math.abs(trophy.position.x - state.pointer.x);
        };

        const turnUp = () => {
            if (trophy.rotation.x > -0.3)
                trophy.rotation.x -=
                    angleY * Math.abs(trophy.position.y - state.pointer.y);
        };
        
        const turnDown = () => {
            if (trophy.rotation.x < 0.3)
                trophy.rotation.x +=
                    angleY * Math.abs(trophy.position.y - state.pointer.y);
        };

        if (state.pointer.x > trophy.position.x) turnRight();
        else turnLeft();

        if (state.pointer.y > trophy.position.y) turnUp();
        else turnDown();
    });

    return trophyRef;
};

export default useRotateModel;
