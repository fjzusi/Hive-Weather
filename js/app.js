var app = angular.module('hive-weather', []);

app.constant("apiUrl", "http://api.wunderground.com/api/d5cc774a45c7794d/");

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})