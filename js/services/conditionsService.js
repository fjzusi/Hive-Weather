app.service("conditionsService", ['$rootScope', '$http', 'apiUrl', conditionsService])

function conditionsService($rootScope, $http, apiUrl) {
    $rootScope.unknownCondition = {
        "weather": "unknown"
    };
    $rootScope.conditionObject = $rootScope.unknownCondition;

    this.setConditions = function(link) {
        $rootScope.conditionObject = null;

        if(link) {
            $http
            .get(apiUrl + 'conditions' + link + '.json')
            .then(function (response) {
                console.log(response.data.current_observation);
                $rootScope.conditionObject = response.data.current_observation;

                if($rootScope.conditionObject.weather.startsWith("Light") || $rootScope.conditionObject.weather.startsWith("Heavy")) {
                    $rootScope.conditionObject.weather = $rootScope.conditionObject.weather.substring(6);
                }
            });
        }
    }

    this.setUnknownCondition = function() {
        $rootScope.conditionObject = $rootScope.unknownCondition;
    }
}