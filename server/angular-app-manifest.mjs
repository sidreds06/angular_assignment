
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sidreds06.github.io/angular_assignment/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular_assignment"
  },
  {
    "renderMode": 2,
    "route": "/angular_assignment/api-data"
  },
  {
    "renderMode": 2,
    "route": "/angular_assignment/form"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular_assignment",
    "route": "/angular_assignment/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 488, hash: '1bd2bf8403e3a6be6c9d1bb1c11a83b747a7638f66bdeb81338b7840943dc41c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: '2e2700c192c056876b9e9ff09a61834d0f778264b4510343645916b8e82ac328', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'form/index.html': {size: 6710, hash: 'eb5cb045cd320e6686682542b40b9c637290b3aaacb9e624d96586ff42d247f8', text: () => import('./assets-chunks/form_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5031, hash: 'af9ddd0ee76c69027afff39843a3107b03c86f3312cdf60a8c9ab7506e2f7450', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'api-data/index.html': {size: 29727, hash: '4555465cd42ad6e26cac472d5367574128f7da2a9460ca12282816ad3876c1c1', text: () => import('./assets-chunks/api-data_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
