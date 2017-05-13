app.service("conditionsService", ['$rootScope', '$http', 'apiUrl', conditionsService])

function conditionsService($rootScope, $http, apiUrl) {
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