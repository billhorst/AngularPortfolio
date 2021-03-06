angular.module('app', ['Factories', 'Directives'])

.controller('mainController', mainController);

function mainController($scope) {

    if (typeof(Storage) !== "undefined") {
        //do nothing
    } else {
        alert("Sorry, your browser may not support all the features of this website."+
            "Upgrade or else I'll tell all your friends that you're running an outdated browser."+
            "... and also that you use a flip phone...");
    }

    $scope.navigation = {};
    $scope.languageChoice = {};
    $scope.url = {};

    if(localStorage.getItem("languagePreference") === "English") {
        $scope.languageChoice.isEnglish = true; 
    } else if (localStorage.getItem("languagePreference") === "Japanese") {
        $scope.languageChoice.isJapanese = true;
    } else {
        $scope.languageChoice.isEnglish = true;
    }

    $scope.navigation.showHome = true;

    $scope.toHome = function() {
        $scope.navigation = {};
        $scope.navigation.showHome = true;
    }

    $scope.toAbout = function() {
        $scope.navigation = {};
        $scope.navigation.showAbout = true;
    }

    $scope.toProjects = function() {
        $scope.navigation = {};
        $scope.navigation.showProjects = true;
    }

    $scope.toContact = function() {
        $scope.navigation = {};
        $scope.navigation.showContact = true;
    }

    $scope.toEnglish = function() {
        $scope.languageChoice = {};
        $scope.languageChoice.isEnglish = true;
        localStorage.setItem("languagePreference", "English");
    }

    $scope.toJapanese = function() {
        $scope.languageChoice = {};
        $scope.languageChoice.isJapanese = true;
        localStorage.setItem("languagePreference", "Japanese");
    }

    //Project links

    $scope.openPlotGeneratorApp = function() {
        $scope.url.plotGenApp = 'http://billhorst.github.io/PlotGenerator/index.html';
    }

    $scope.openPlotGeneratorCode = function() {
        $scope.url.plotGenCode = 'https://github.com/billhorst/PlotGenerator';
    }

    $scope.openFlickrSearcherApp = function() {
        $scope.url.flickrSearcherApp = 'http://billhorst.github.io/FlickrSearcher/index.html';
    }

    $scope.openFlickrSearcherCode = function() {
        $scope.url.flickrSearcherCode = 'https://github.com/billhorst/FlickrSearcher';
    }

    $scope.openGeographyQuizApp = function() {
        //$scope.url.geographyQuizApp = 'Quiz game after I replace the billhorst one with the new one';
    }

    $scope.openGeographyQuizCode = function() {
        //$scope.url.geographyQuizCode = 'Same as the app: put up after I replace old one on billhorst GitHub';
    }

    $scope.openCalculatorApp = function() {
        $scope.url.calculatorApp = 'http://billhorst.github.io/Calculator/index.html';
    }

    $scope.openCalculatorCode = function() {
        $scope.url.calculatorCode = 'https://github.com/billhorst/Calculator';
    }


    $scope.openResumeApp = function() {
        $scope.url.resumeApp = "http://billhorst.github.io/resume/index.html";
    }

}
