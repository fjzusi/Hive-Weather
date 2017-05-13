app.controller('searchController',
	['$scope', '$location', '$filter', 'geoLookupService', 'conditionsService',
	function ($scope, $location, $filter, geoLookupService, conditionsService) {
		$scope.searchTerm = "";

		$scope.search = function() {
			if($scope.searchTerm.name) {
				conditionsService.setConditions($scope.searchTerm.name, $scope.searchTerm.l);
			} else{
				geoLookupService
				.geolookupAutoComplete($scope.searchTerm)
				.then(function (data) {
					var result = data.RESULTS[0];
					conditionsService.setConditions(result.name, result.l);
				});
			}
		};

		$scope.searchAuto = function() {
			geoLookupService
			.geolookupAuto()
			.then(function (data){
				console.log(data);
				conditionsService.setConditions(data.location.city + ", " + data.location.state, data.location.l);
			});
		};

		$scope.searchAutoComplete = function(q) {
			return geoLookupService
			.geolookupAutoComplete(q)
			.then(function (data) {
				return $filter('limitTo')(data.RESULTS, 5);
			});
		};
	}]
);