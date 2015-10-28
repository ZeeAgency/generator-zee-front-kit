module.exports = {
  options: {
    /** /
    beautify: true,
    compress: false,
    /**/
    banner: '/* <%%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\r\n'
  },
  dist: {
    files: {
      '<%%= pkg.distPath %>/js/head.build.min.js': require('../<%= assetsPath %>/js/head.conf.json'),
      '<%%= pkg.distPath %>/js/libs.build.min.js': require('../<%= assetsPath %>/js/libs.conf.json'),
      '<%%= pkg.distPath %>/js/main.build.min.js': require('../<%= assetsPath %>/js/main.conf.json'),
    }
  }
};
