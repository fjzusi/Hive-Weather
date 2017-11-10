(function () {
    angular
        .module('hive-weather')
        .config(['$sceDelegateProvider', delegateProvider])
        .config(['$interpolateProvider', interpolateProvider]);

    function delegateProvider ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://autocomplete.wunderground.com/**'
        ]);
    }

    function interpolateProvider($interpolateProvider) {
        return $interpolateProvider.startSymbol('[[').endSymbol(']]');
    }
})()