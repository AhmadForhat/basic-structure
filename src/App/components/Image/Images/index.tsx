import React, { FC } from 'react';

export interface ImageProps extends React.SVGAttributes<SVGElement> {}

export type Image = FC<ImageProps>;

export { default as Error } from './Error';
export { default as Success } from './Success';