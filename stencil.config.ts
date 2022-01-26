import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'st-lucide',
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
