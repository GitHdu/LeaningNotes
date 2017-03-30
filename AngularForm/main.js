var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {
    $scope.userdata = {};
    $scope.submitForm = function() {
        console.log($scope.userdata);
        if ($scope.submitForm.$invalid) {
            alert("请检查您的信息");
        } else {
            alert("提交成功");
        }
    }
});

myApp.directive('compare', function() {
    var o = {};
    o.strict = 'EA';
    o.scope = {
        orgText: '=compare'
    }
    o.require = 'ngModel';
    o.link = function(sco, ele, att, con) {//con->ngModelController
        con.$validators.compare = function(val) {
            return val == sco.orgText;//original text
        };

        sco.$watch('orgText', function() {
            con.$validate();
        });
    }
    return o;
})
