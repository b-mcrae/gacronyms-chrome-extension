var app = angular.module('acronymSearch', [])
app.controller('DataController', function($scope) {
	$scope.acronymList = "";
	$scope.errorValue = false;
	this.updateData = function() {
		setTimeout(function() {
			$.ajax({
				url: [BACKEND ROUTE],
			}).done(function(data) {
				data = data.filter(function(obj) {
					if (obj.name === null || obj.name === "") {
						return false;
					}
					else {
						return true;
					}
				});
				$scope.acronymList = data;
				$scope.$apply();
			})
			.fail(function() {
				$scope.errorValue = true;
				$scope.$apply();
			});
		}, 100)
	};
	$scope.startsWith = function(actual, expected) {
		var lowerStr = (actual + "").toLowerCase();
		return lowerStr.indexOf(expected.toLowerCase()) === 0;
	};
});
app.directive('href', function() {
  return {
    compile: function(element) {
      element.attr('target', '_blank');
    }
  };
});
