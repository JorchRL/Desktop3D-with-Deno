/// <reference lib="DOM" /> 
import { CubeTexture, Loader, LoadingManager, TextureDataType } from '../../../src/Three.d.ts';

import { RGBELoader } from './RGBELoader.d.ts';

export class HDRCubeTextureLoader extends Loader {
    constructor(manager?: LoadingManager);
    hdrLoader: RGBELoader;
    type: TextureDataType;

    load(
        urls: string[],
        onLoad: (texture: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CubeTexture;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<CubeTexture>;
    setDataType(type: TextureDataType): this;
}
