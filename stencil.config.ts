import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'st-lucide',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
<<<<<<< HEAD
=======
      generateTypeDeclarations: true,
>>>>>>> cc3bc5e (Upgrade lucide package and include new icons. Change output target type to dist-custom-elements in favor of deprecated dist-custom-elements-bundle. Bump version)
    }
  ],
};
