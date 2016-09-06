angular.module('directivePractice').controller('lessonCtrl', function($scope) {

  $scope.test = "i for michael";

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day) { 
        lesson + ' is active on ' + day + '.';

    }
})
