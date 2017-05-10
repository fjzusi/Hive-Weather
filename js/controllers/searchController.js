app.controller('searchController',
	['$scope', '$location', '$filter', 'geoLookupService', 'conditionsService',
	function ($scope, $location, $filter, geoLookupService, conditionsService) {
		$scope.searchTerm = "";

		$scope.search = function() {
			alert($scope.searchTerm);
		};

		$scope.searchAuto = function() {
			alert("Auto searching");
		};

		$scope.searchAutoComplete = function(q) {
			return geoLookupService
			.geolookupAutoComplete(q)
			.then(function (data) {
				var results = data.RESULTS.map(function(a){return a.name});
				return $filter('limitTo')(results, 5);
			});
		};
	}]
);