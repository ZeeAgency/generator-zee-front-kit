module.exports = {
  bower: {
    files: ['bower.json'],
    tasks: ['bowerRequirejs']
  },
  sass: {
    files: ['<%%= pkg.assetsPath %>/scss/{,*/}*.{scss,sass}'],
    tasks: ['sass:dev', 'autoprefixer']
  }
};
