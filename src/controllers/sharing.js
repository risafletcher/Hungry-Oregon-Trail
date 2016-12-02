sharingController.$inject = ['$scope'];

export default function sharingController($scope) {
    $scope.fate = '';
    $scope.percentage = 60;
  
    if($scope.percentage <= 10) {
        $scope.fate = 'The wagon\'s occupants accuse you of miserliness and kill you.';
    } else if($scope.percentage > 10 && $scope.percentage <= 50) {
        $scope.fate = 'The wagon\'s occupants don\'t want another mouth to feed, so they kill you.';
    } else {
        $scope.fate = 'You were too generous. Your food eventually spoiled and you all died.';
    }
}
