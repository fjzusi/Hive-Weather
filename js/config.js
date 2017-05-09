(function () {
    angular
        .module('hive-weather')
        .config(['$sceDelegateProvider', delegateProvider])

    function delegateProvider ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://api.wunderground.com/api/d5cc774a45c7794d/**',
            'http://autocomplete.wunderground.com/**'
        ]);
    }
})()