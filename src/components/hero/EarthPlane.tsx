import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import * as THREE from 'three';

export const EarthPlane = component$(() => {
    const canvasRef = useSignal<HTMLCanvasElement>();

    useVisibleTask$(() => {
        const canvas = canvasRef.value!;
        const scene = new THREE.Scene();

        // CAMERA
        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 3.5;

        // RENDERER
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Correcciones REALISTAS
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.85;   // 🔥 mucho más natural

        // TEXTURE
        const loader = new THREE.TextureLoader();
        const texture = loader.load('/images/hero-img-canva.png');

        texture.encoding = THREE.sRGBEncoding;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        // PLANE
        const geometry = new THREE.PlaneGeometry(6, 3.2);
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true,
            roughness: 1,
            metalness: 0.0,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, -2.3, 0);
        mesh.rotation.x = -0.28;
        scene.add(mesh);

        // LUCES
        const light = new THREE.DirectionalLight(0xffffff, 0.55);
        light.position.set(3, 4, 6);
        scene.add(light);

        const ambient = new THREE.AmbientLight(0xffffff, 0.35);
        scene.add(ambient);

        // ANIMACIÓN
        function animate() {
            requestAnimationFrame(animate);

            const t = Date.now() * 0.00015;

            mesh.rotation.z = Math.sin(t * 1.2) * 0.035;
            mesh.rotation.x = -0.28 + Math.cos(t * 0.6) * 0.015;
            mesh.position.y = -2.3 + Math.sin(t * 0.8) * 0.05;

            renderer.render(scene, camera);
        }
        animate();

        // RESIZE
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    });

    return (
        <canvas
            ref={canvasRef}
            class="absolute inset-0 w-full h-full"
            style={{
                filter: `
                    drop-shadow(0px -10px 40px rgba(0,150,255,0.25))
                    drop-shadow(0px -20px 60px rgba(0,150,255,0.2))
                `
            }}
        />
    );
});
