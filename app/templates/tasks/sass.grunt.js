module.exports = {
  options: {
    sourcemap: 'none',
    style: 'expanded',
    precision: 10,
    compass: true,
    lineNumbers: true,
    loadPath: '<%%= pkg.assetsPath %>/bower_components',
    require: [
      'sass-globbing',
      'sass-css-importer'
    ]
  },
  dev: {
    files: [{
      expand: true,
      cwd: '<%%= pkg.assetsPath %>/scss/',
      src: ['*.{scss,sass}'],
      dest: '<%%= pkg.assetsPath %>/css/',
      ext: '.css'
    }]
  }
};
