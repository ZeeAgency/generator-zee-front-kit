module.exports = {
  bower: {
    files: ['bower.json'],
    tasks: ['bowerRequirejs']
  },
  css: {
    files: ['<%%= pkg.assetsPath %>/scss/**/*.{scss,sass}'],
    tasks: ['build:css']
  },
  js: {
    files: ['<%%= pkg.assetsPath %>/js/**/*.{js,json}'],
    tasks: ['build:js']
  }
};
