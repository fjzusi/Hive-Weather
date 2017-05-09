app.controller('searchController',
	['$scope', '$location', 'geoLookupService', 'conditionsService',
	function ($scope, $location, geoLookupService, conditionsService) {
		$scope.searchTerm = "";

		$scope.search = function() {
			alert($scope.searchTerm);
		};

		$scope.searchAuto = function() {
			alert("Auto searching");
		};

		$scope.onSearchTermChange = function() {
			clearTimeout($scope.searchTimeout);
			$scope.searchTimeout = setTimeout($scope.searchTermAutoComplete, 1000);
		};

		$scope.searchTermAutoComplete = function(){
			// $("#txtSearch").typeahead({
			// 	hint: true,
			// 	highlight: true,
			// 	minLength: 3
			// },
			// {
			// 	source:
			// });
		}
	}]
);