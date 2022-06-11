/// <reference lib="DOM" /> 
import { CompressedPixelFormat, PixelFormat, TextureEncoding, TextureDataType } from '../../constants.d.ts';

export class WebGLUtils {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, extensions: any, capabilities: any);

    convert(p: PixelFormat | CompressedPixelFormat | TextureDataType, encoding?: TextureEncoding | null): number | null;
}
