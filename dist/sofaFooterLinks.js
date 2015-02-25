/**
 * angular-sofa-footer-links - v0.1.0 - Wed Feb 25 2015 11:04:12 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa-footer-links.tpl.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('sofa-footer-links.tpl.html',
    '\n' +
    '<ul class="sofa-footer-list">\n' +
    '    <li ng-repeat="item in ::items" ng-click="goTo(item)" class="sofa-footer-list__item">{{::item.title}}</li>\n' +
    '</ul>\n' +
    '');
}]);

angular.module('sofa.footerLinks', [
    'sofa-footer-links.tpl.html',
    'sofa.core',
    'sofa.navigationService'
])
    .directive('sofaFooterLinks', ["configService", "navigationService", function(configService, navigationService) {

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
    }]);
}(angular));
