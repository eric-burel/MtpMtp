Package.describe({
  name: 'mtp-core',
});

Package.onUse((api) => {
  api.use(['vulcan:core', 'vulcan:forms', 'vulcan:ui-bootstrap']);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
  api.addFiles(['./assets/bootstrap.css'], 'client')
});
