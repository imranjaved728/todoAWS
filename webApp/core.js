var toDo = angular.module('toDo', []);


function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/tasks')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createTodo = function() {
        console.log( $scope.formData);
        $http.post('/tasks', $scope.formData)
            .success(function(data) {
                if(!data.errors){
                    $scope.formData = {}; 
                      $http.get('/tasks')
                            .success(function(data) {
                                $scope.todos = data;
                            })
                            .error(function(data) {
                                console.log('Error: ' + data);
                            });
                   
                }
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteTodo = function(id) {
        $http.delete('/tasks/' + id)
            .success(function(data) {
                 if(!data.errors){
                      $http.get('/tasks')
                            .success(function(data) {
                                $scope.todos = data;
                            })
                            .error(function(data) {
                                console.log('Error: ' + data);
                            });
                     console.log(data);
                 }
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
