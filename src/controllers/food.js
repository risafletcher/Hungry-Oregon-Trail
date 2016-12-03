foodController.$inject = ['$scope'];

export default function foodController($scope) {
    $scope.foodLevel = 100;
    
    $scope.eatFood = function() {
        $scope.foodLevel = $scope.foodLevel - (Math.floor(Math.random() * (20 - 11)) + 10);
    };

    $scope.loseFood = function() {
        $scope.foodLevel = $scope.foodLevel * 0;
    };

    $scope.addFood = function() {
        $scope.foodLevel = $scope.foodLevel + (Math.floor(Math.random() * (20 - 11)) + 10);
    };

    $scope.restart = function() {
        $scope.foodLevel = 100;
        $scope.beginGame = false;
    };

    // $scope.offer = function() {
    //     $scope.choice5 = true;
    // };

    $scope.submitWagon = function () {
        $scope.fate = '';
        if($scope.percentage <= 10) {
            $scope.fate = 'The wagon\'s occupants accuse you of miserliness and kill you.';
        } else if($scope.percentage > 10 && $scope.percentage <= 50) {
            $scope.fate = 'The wagon\'s occupants don\'t want another mouth to feed, so they kill you.';
        } else {
            $scope.fate = 'You were too generous. Your food eventually spoiled and you all died.';
        }
    };

    $scope.submitIndian = function () {
        $scope.fate = '';
        if($scope.percentage <= 10) {
            $scope.fate = 'The Indians accuse you of miserliness and kill you slowly.';
        } else if($scope.percentage > 10 && $scope.percentage <= 50) {
            $scope.fate = 'The tribe decides you aren\'t worth it. They take your food and leave you to die.';
        } else {
            $scope.fate = 'The Indians respect your generosity and take you. They eventually help you to Oregon. YOU WIN!';
        }
    };
 
}
