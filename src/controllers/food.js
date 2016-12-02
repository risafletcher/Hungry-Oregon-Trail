foodController.$inject = ['$scope'];

export default function foodController($scope) {
    $scope.foodLevel = 100;
    
    $scope.eatFood = function() {
        $scope.foodLevel = $scope.foodLevel - (Math.floor(Math.random() * (20 - 11)) + 10);
    };

    $scope.loseFood = function() {
        $scope.foodLevel = scope.foodLevel * 0;
    };

    $scope.addFood = function() {
        $scope.foodLevel = $scope.foodLevel + (Math.floor(Math.random() * (20 - 11)) + 10);
    ;}
  
}
