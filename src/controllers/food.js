foodController.$inject = ['$scope'];

export default function foodController($scope) {
    $scope.foodLevel = 100;
    $scope.food = function() {
        $scope.foodLevel = $scope.foodLevel - (Math.floor(Math.random() * (20 - 11)) + 10);
        // $scope.foodLevel = $scope.foodLevel - Math.floor(Math.random() * 20);
    };
  


}
