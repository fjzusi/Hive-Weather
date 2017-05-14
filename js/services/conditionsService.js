app.service("conditionsService", ['$rootScope', '$http', 'apiUrl', conditionsService])

function conditionsService($rootScope, $http, apiUrl) {
    $rootScope.conditionObject = {
        "display_location": {"city": "Somewhere", "state": "Someplace"},
        "temperature_string": "10000 F",
        "local_time_rfc822": "600 Hours",
        
        "weather": "Light Drizzle"
    };

    this.setConditions = function(link) {
        $rootScope.conditionObject = null;

        if(link) {
            $http
            .get(apiUrl + 'conditions' + link + '.json')
            .then(function (response) {
                console.log(response.data.current_observation);
                $rootScope.conditionObject = response.data.current_observation;
            });
        }
    }
}