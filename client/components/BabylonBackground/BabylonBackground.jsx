import React from 'react';
import { 
    ArcRotateCamera, 
    Vector3, 
    HemisphericLight, 
    PointLight, 
    MeshBuilder,
    Color3,
    Layer,
    Animation
 } from '@babylonjs/core';

import { GradientMaterial } from "@babylonjs/materials";
import SceneComponent from './SceneComponent';

import styles from "./BabylonBackground.module.scss";

const toRadians = (angle) =>
{
    return angle * (Math.PI / 180);
}

const onSceneReady = scene =>
{
    // This creates and positions a camera
    const camera = new ArcRotateCamera("Camera", 3 * Math.PI / 3.5, Math.PI / 3.2, 0, Vector3.Zero(), scene);

    //background color
    scene.clearColor = new Color3(0, 0, 0.2);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());
    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("hemi", new Vector3(0, 1, 0), scene);
    light.groundColor = new Color3(0.4, 0.4, 0.5);
    light.intensity = 1;
    var plight = new PointLight("pl", new Vector3(0, 0, 0), scene);
    plight.diffuse = Color3.White();
    plight.specular = Color3.Blue();
    plight.intensity = 6.0;


    //init arary of cubes
    const cubes = [];

    var gradientMaterial = new GradientMaterial("grad", scene);
    gradientMaterial.topColor = Color3.Teal(); // Set the gradient top color
    gradientMaterial.bottomColor = Color3.Magenta(); // Set the gradient bottom color
    gradientMaterial.offset = 0.25;

    //populate arraay of cubes with random size
    for (var i = 0; i < 400; i++)
    {
        let size = Math.floor(Math.random() * 10) * 0.1;
        let cube = MeshBuilder.CreateBox("box", { height: size, width: size, depth: size });
        cube.material = gradientMaterial;
        cubes.push(cube);
    }

    const frameCount = 90;
    //translate cubes orign
    cubes.forEach((cube) =>
    {
        cube.position.x = Math.ceil((Math.random() * 10)) * (Math.round(Math.random()) ? 1 : -1);
        let initY = Math.ceil((Math.random() * 10)) * (Math.round(Math.random()) ? 1 : -1);
        cube.position.z = Math.ceil((Math.random() * 10)) * (Math.round(Math.random()) ? 1 : -1);

        const floatAnim = new Animation("floatAnim", "position.y", frameCount, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE);

        const keyFrames = [];
        let randomTranslation = Math.random() * 180;

        for (var i = 0; i <= 360; i++)
        {
            keyFrames.push({
                frame: i,
                value: Math.cos(toRadians(i + randomTranslation)) * 0.1 + initY
            });
        }

        floatAnim.setKeys(keyFrames);

        cube.animations.push(floatAnim);

        scene.beginAnimation(cube, 0, 360, true);

    });

    //set background gradient
    var url = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Gradient_1024x768.jpg";
    var background = new Layer("back", url, scene);
    background.isBackground = true;

}

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */

const onRender = camera =>  
{
    camera.alpha -= 0.0001;
}

const BabylonBackground = () => (
    <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} adaptToDeviceRatio={true} className={styles.root}/>
)

export default BabylonBackground;