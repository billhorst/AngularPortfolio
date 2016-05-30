angular.module('app', ['Factories', 'Directives'])

.controller('mainController', mainController);

function mainController($scope, AddUp) {
    // $scope.data = {};
    // $scope.data.test1 = "Hi";
    // var inputA = $scope.data.inputa;
    // var inputB = $scope.data.inputb;
    // console.log(inputA);


    if (typeof(Storage) !== "undefined") {
        //do nothing
    } else {
        alert("Sorry, your browser may not support all the features of this website."+
            "Upgrade or else I'll tell all your friends that you're running an outdated browser."+
            "... and that you use a flip phone...");
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
    //set navigation to whatever is current in browser's local storage (if empty, default is 'home')

    // $scope.addNumbers = function(c,d) {
    //     console.log("Add Numbers clicked, first: "+c+" second: "+d);
    //     $scope.answer = AddUp.add(c,d);
    // }

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

    $scope.openCalcApp = function() {
        //open my calculator gh-pages app in a new tab
        $scope.url.calculatorApp = 'http://billhorst.github.io/Calculator/index.html';
    }

    $scope.openCalcCode = function() {
        //open my calculator master code page in GitHub in a new tab
        $scope.url.calculatorCode = 'https://github.com/billhorst/Calculator';
    }

    $scope.openPlotGeneratorApp = function() {
        //open my calculator gh-pages app in a new tab
        $scope.url.plotGenApp = 'http://billhorst.github.io/PlotGenerator/index.html';
    }

    $scope.openPlotGeneratorCode = function() {
        //open my calculator master code page in GitHub in a new tab
        $scope.url.plotGenCode = 'https://github.com/billhorst/PlotGenerator';
    }

    $scope.openResumeApp = function() {
        $scope.url.resumeApp = "http://billhorst.github.io/resume/index.html";
    }

}
