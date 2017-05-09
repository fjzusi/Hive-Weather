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

		$scope.searchAutoComplete = function(q, syn, asyn) {
			geoLookupService
			.geolookupAutoComplete(q)
			.then(function (data) {
				var results = data.RESULTS.map(function(a){return a.name});
				asyn(results);
			});
		};

		$("#txtSearch").typeahead({
			hint: true,
			highlight: true,
			minLength: 3
		},
		{
			source: $scope.searchAutoComplete
		});
	}]
);