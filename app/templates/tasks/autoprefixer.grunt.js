module.exports = {
  options: {
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%%= pkg.distPath %>/css/',
      src: '{,*/}*.css',
      dest: '<%%= pkg.distPath %>/css/'
    }]
  }
};
