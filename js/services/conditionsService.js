app.service("conditionsService", ['$rootScope', '$http', 'apiUrl', conditionsService])

function conditionsService($rootScope, $http, apiUrl) {
    $rootScope.conditionLabel = "Stafford Springs, Connecticut";
    $rootScope.conditionLink = "";
    $rootScope.conditionObject = {};

    this.setConditions = function(name, link) {
        $rootScope.conditionLabel = name;
        $rootScope.conditionLink = link;
        $rootScope.conditionObject = {};

        if(link) {
            $http
            .get(apiUrl + 'conditions' + link + '.json')
            .then(function (response) {
                $rootScope.conditionObject = response.data.current_observation;
            });
        }
    }
}