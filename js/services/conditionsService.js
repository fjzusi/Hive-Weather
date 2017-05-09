app.service("conditionsService", ['$rootScope', '$http', 'apiUrl', conditionsService])

function conditionsService($rootScope, $http, apiUrl) {
    this.conditionsByPostalCode = function(postalCode) {
        return $http
			.get(apiUrl + 'conditions/q/' + postalCode + '.json')
			.then(function (response) {
				return response.data;
			});
    };

    this.conditionsByCityState = function(city, state) {
        return $http
			.get(apiUrl + 'conditions/q/' + city + '/' + state + '.json')
			.then(function (response) {
				return response.data;
			});
    };
}