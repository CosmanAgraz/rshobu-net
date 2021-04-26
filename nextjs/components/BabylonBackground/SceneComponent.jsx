import { Engine, Scene, ArcRotateCamera, Vector3 } from '@babylonjs/core';
import React, { useEffect, useRef } from 'react';

const SceneComponent = (props) => 
{

    const reactCanvas = useRef(null);
    const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest } = props;

    useEffect(() => 
    {
        if (reactCanvas.current) 
        {
            const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
            const scene = new Scene(engine, sceneOptions);
            const camera = new ArcRotateCamera("Camera", 3 * Math.PI / 3.5, Math.PI / 3.2, 0, Vector3.Zero(), scene);

            if (scene.isReady()) 
            {
                props.onSceneReady(scene);
            } else 
            {
                scene.onReadyObservable.addOnce(scene => props.onSceneReady(scene));
            }

            engine.runRenderLoop(() => 
            {
                if (typeof onRender === 'function') {
                    onRender(camera);
                }
                scene.render();
            });

            const resize = () => 
            {
                scene.getEngine().resize();
            }
            if (window) 
            {
                window.addEventListener('resize', resize);
            }

            return () => 
            {
                scene.getEngine().dispose();
                if (window) {
                    window.removeEventListener('resize', resize);
                }
            }
        }
    }, [reactCanvas])
    return (
        <canvas ref={reactCanvas} {...rest} />
    );
}

export default SceneComponent;