
export default {
  basePath: 'https://sidreds06.github.io/angular_assignment',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
