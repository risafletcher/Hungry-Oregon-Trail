/* globals angular, chai */

const { assert } = chai;

describe( 'counter controller', () => {

    // what modules are we needing to test?
    beforeEach(angular.mock.module('controllers'));
    
    let $controller, $scope;
    beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
        // $rootScope allows us to create new scopes
        $scope = $rootScope.$new();
        // $controller is the generic controller factory
        $controller = _$controller_;


    }));

    it('starting food level is 100', () => {
        // make a controller, we don't actually need
        // a ref to controller...
        /*const cowsay = */ $controller('food', { $scope });

        // ...as it's the modification of
        // $scope that we need to test
        assert.equal($scope.foodLevel, 100);
    });

});
