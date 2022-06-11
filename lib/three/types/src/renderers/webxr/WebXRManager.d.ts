/// <reference lib="DOM" /> 
/// <reference types="webxr" />

import { Vector4 } from '../../math/Vector4.d.ts';
import { ArrayCamera } from '../../cameras/ArrayCamera.d.ts';
import { PerspectiveCamera } from '../../cameras/PerspectiveCamera.d.ts';
import { EventDispatcher } from '../../core/EventDispatcher.d.ts';
import { XRTargetRaySpace, XRGripSpace, XRHandSpace } from './WebXRController.d.ts';

export type WebXRCamera = PerspectiveCamera & { viewport: Vector4 };
export type WebXRArrayCamera = Omit<ArrayCamera, 'cameras'> & { cameras: [WebXRCamera, WebXRCamera] };

export class WebXRManager extends EventDispatcher {
    constructor(renderer: any, gl: WebGLRenderingContext);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default false
     */
    isPresenting: boolean;

    /**
     * @default true
     */
    cameraAutoUpdate: boolean;

    getController(index: number): XRTargetRaySpace;
    getControllerGrip(index: number): XRGripSpace;
    getHand(index: number): XRHandSpace;
    setFramebufferScaleFactor(value: number): void;
    setReferenceSpaceType(value: XRReferenceSpaceType): void;
    getReferenceSpace(): XRReferenceSpace | null;
    setReferenceSpace(value: XRReferenceSpace): void;
    getBaseLayer(): XRWebGLLayer | XRProjectionLayer;
    getBinding(): XRWebGLBinding;
    getFrame(): XRFrame;
    getSession(): XRSession | null;
    setSession(value: XRSession): Promise<void>;
    getCamera(): WebXRArrayCamera;
    updateCamera(camera: PerspectiveCamera): void;
    setAnimationLoop(callback: XRFrameRequestCallback | null): void;
    getFoveation(): number | undefined;
    setFoveation(foveation: number): void;
    dispose(): void;
}
