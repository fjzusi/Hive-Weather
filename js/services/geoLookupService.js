app.service("geoLookupService", ['$rootScope', '$http', 'apiUrl', 'autoCompleteUrl', geoLookupService])

function geoLookupService($rootScope, $http, apiUrl, autoCompleteUrl) {
    this.geolookupAuto = function() {
        return $http
			.get(apiUrl + 'geolookup/q/autoip.json')
			.then(function (response) {
				return response.data;
			});
    };

    this.geolookupByPostalCode = function(postalCode) {
        return $http
			.get(apiUrl + 'geolookup/q/' + postalCode + '.json')
			.then(function (response) {
				return response.data;
			});
    };

    this.geolookupAutoComplete = function(q) {
        return $http
			.jsonp(autoCompleteUrl + 'aq?h=0&query=' + q, {jsonpCallbackParam: 'cb'})
			.then(function (response) {
				return response.data;
			});
    };
}