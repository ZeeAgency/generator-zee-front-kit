module.exports = {
  options: {
    sourcemap: 'none',
    style: 'compact',
    precision: 10,
    compass: true,
    lineNumbers: true,
    loadPath: '<%= assetsPath %>/bower_components'
  },
  dev: {
    files: [{
      expand: true,
      cwd: '<%%= pkg.assetsPath %>/scss/',
      src: ['*.{scss,sass}'],
      dest: '<%%= pkg.distPath %>/css/',
      ext: '.css'
    }]
  }
};
