app.service("geoLookupService", ['$rootScope', '$http', 'apiUrl', geoLookupService])

function geoLookupService($rootScope, $http, apiUrl) {
    this.geolookupAuto = function(postalCode) {
        return $http
			.get(apiUrl + '/geolookup/q/autoip.json')
			.then(function (response) {
				return response.data;
			});
    };

    this.geolookupByPostalCode = function(postalCode) {
        return $http
			.get(apiUrl + '/geolookup/q/' + postalCode + '.json')
			.then(function (response) {
				return response.data;
			});
    };
}