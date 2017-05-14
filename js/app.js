var app = angular.module('hive-weather', ['ui.bootstrap']);

app.constant("apiUrl", "https://api.wunderground.com/api/d5cc774a45c7794d/");
app.constant("autoCompleteUrl", "https://autocomplete.wunderground.com/");

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})