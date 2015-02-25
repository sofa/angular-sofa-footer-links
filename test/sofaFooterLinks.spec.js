'use strict';

describe('sofa.footerLinks', function () {

    var element, $compile, $rootScope, navigationService;

    beforeEach(module('sofa.footerLinks'));

    beforeEach(inject(function (_$compile_, _$rootScope_, $injector) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        navigationService = $injector.get('navigationService');
    }));

    it('should render the links', function () {
        $rootScope.items = [{
            title: 'Test',
            id: 'test'
        }];
        element = $compile('<sofa-footer-links items="items"></sofa-footer-links>')($rootScope);
        $rootScope.$digest();

        expect(element.find('li')[0].innerText.trim()).toEqual('Test');
    });

    it('should go to the correct link when clicked', function() {
        spyOn(navigationService, 'navigateToContentPage');
        $rootScope.items = [{
            title: 'Test',
            id: 'test'
        }];
        element = $compile('<sofa-footer-links items="items"></sofa-footer-links>')($rootScope);
        $rootScope.$digest();
        element.find('li').triggerHandler('click');
        expect(navigationService.navigateToContentPage).toHaveBeenCalled();
    });
});
