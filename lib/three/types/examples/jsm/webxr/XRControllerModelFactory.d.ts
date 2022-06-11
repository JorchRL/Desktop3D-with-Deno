/// <reference lib="DOM" /> 
import { Group, Object3D, Texture } from '../../../src/Three.d.ts';

import { GLTFLoader } from '../loaders/GLTFLoader.d.ts';

export class XRControllerModel extends Object3D {
    constructor();

    motionController: any;

    envMap: Texture;

    setEnvironmentMap(envMap: Texture): XRControllerModel;
}

export class XRControllerModelFactory {
    constructor(gltfLoader?: GLTFLoader);
    gltfLoader: GLTFLoader | null;
    path: string;

    createControllerModel(controller: Group): XRControllerModel;
}
