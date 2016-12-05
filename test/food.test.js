/* globals angular, chai */

const { assert } = chai;

describe( 'food counter controller', () => {

    // what modules are we needing to test?
    beforeEach(angular.mock.module('controllers'));
    
    let $controller, $scope;
    beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
        // $rootScope allows us to create new scopes
        $scope = $rootScope.$new();
        // $controller is the generic controller factory
        $controller = _$controller_;
        $controller('food', { $scope });

    }));

    it('starting food level is 100', () => {
        // make a controller, we don't actually need
        // a ref to controller...
        /*const cowsay = */ 

        // ...as it's the modification of
        // $scope that we need to test
        assert.equal($scope.foodLevel, 100);
    });

    it('decrements food by a quantity between 10 and 20 points', () => {
        $scope.eatFood();
        assert.isAtLeast($scope.foodLevel, 80);
        assert.isAtMost($scope.foodLevel, 90);
    });

    it('adds food by a quantity between 10 and 20 points', () => {
        $scope.addFood();
        assert.isAtLeast($scope.foodLevel, 110);
        assert.isAtMost($scope.foodLevel, 120);
    });

    it('reduces food level to zero', () => {
        $scope.loseFood();
        assert.equal($scope.foodLevel, 0);
    });

});
