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
				console.log(data.RESULTS.length);
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