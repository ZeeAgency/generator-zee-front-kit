module.exports = {
  main: {
    options: {
      baseUrl: '<%%= pkg.assetsPath %>/js',
      mainConfigFile: '<%%= pkg.assetsPath %>/js/require.conf.js',
      optimize: 'none',

      name: 'main',
      include: [
        'require.conf'
      ],

      findNestedDependencies: true,

      paths: {
        
      },
      
      out: '<%%= pkg.assetsPath %>/js/main.build.js',

      wrap: {
        start: '(function($){',
        end: '})(jQuery);'
      },
      optimizeCss: "none"
    }
  }
};
