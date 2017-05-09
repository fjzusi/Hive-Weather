var app = angular.module('hive-weather', []);

app.constant("apiUrl", "http://api.wunderground.com/api/d5cc774a45c7794d/");
app.constant("autoCompleteUrl", "http://autocomplete.wunderground.com/");

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})