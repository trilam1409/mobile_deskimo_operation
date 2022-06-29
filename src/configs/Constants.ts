import {BuildConfigProps} from './DeclareType';

// Declare type build
export const BUILD_DEV_CONFIG: string = 'dev';
export const BUILD_RELEASE_CONFIG: string = 'release';
export const BUILD_MODE_CONFIG: BuildConfigProps = BUILD_DEV_CONFIG;
//export const BUILD_MODE_CONFIG: BuildConfigProps = BUILD_RELEASE_CONFIG;

export const APP_LANGUAGE_CACHE = 'APP_LANGUAGE_CACHE';

export const REQUEST_TIME_OUT: number = 30000; // <-- ms
export const BAD_REQUEST: number = 400;
export const UNAUTHORIZED: number = 401;
export const INTERNAL_SERVER_ERROR: number = 500;
