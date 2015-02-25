angular.module('sofa.footerLinks', [
    'sofa-footer-links.tpl.html',
    'sofa.core',
    'sofa.navigationService'
])
    .directive('sofaFooterLinks', function(configService, navigationService) {

        'use strict';

        var defaultIfUndefined = function(scope, property, defaultVal) {
            scope[property] = scope[property] === undefined ? defaultVal : scope[property];
        };

        var ABOUT_PAGES = configService.get('aboutPages');

        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                items: '=?'
            },
            templateUrl: 'sofa-footer-links.tpl.html',
            link: function(scope) {
                defaultIfUndefined(scope, 'items', ABOUT_PAGES);

                scope.goTo = function(item){
                    navigationService.navigateToContentPage(item.id);
                };
            }
        };
    });
