
const { series } = require('gulp');
const browserSync = require('browser-sync');
const ssi = require('@cxteam/browsersync-ssi');
const path = require('path');

const config = {
  development: {
    root: 'project',
  },
}
const serve = (done) => {
  browserSync({
    server: path.resolve(config[process.env.NODE_ENV].root),
    port: 3000,
    directory: true,
    ghostMode: false,
    watchOptions: {
      ignoreInitial: true,
      ignored: ['node_modules'],
      awaitWriteFinish: true,
    },
    middleware: ssi({
      baseDir: path.resolve(config[process.env.NODE_ENV].root),
      ext: '.html'
    }),
  });
  done();
};

module.exports = {
  default: series(serve)
};
