import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry: any = {
  mfe1: (): Promise<any> =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './web-components',
    }),
  mfe2: (): Promise<any> =>
    loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'mfe2',
      exposedModule: './web-components',
    }),
};
