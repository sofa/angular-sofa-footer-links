require('shared-sofa-component-tasks')(require('gulp'), {
    pkg: require('./package.json'),
    baseDir: __dirname,
    testDependencyFiles: [
        'node_modules/sofa-core/dist/*.angular.js',
        'node_modules/angular-sofa-navigation-service/node_modules/sofa-couch-service/node_modules/*/dist/!(*.angular.*|*.min.*)',
        'node_modules/angular-sofa-navigation-service/node_modules/sofa-couch-service/node_modules/*/dist/*.angular.js',
        'node_modules/angular-sofa-navigation-service/dist/sofaNavigationService.js',
        'node_modules/angular-sofa-navigation-service/node_modules/*/dist/!(*.angular.*|*.min.*)',
        'node_modules/angular-sofa-navigation-service/node_modules/*/dist/*.angular.js'
    ]
});
