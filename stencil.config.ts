import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'st-feather',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    }
  ],
};
