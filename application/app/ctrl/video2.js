const app = angular.module('videoCall', []);
app.run(($rootScope) => {
    $rootScope.openSide = () => {
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
    };
    //document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    $rootScope.closeSide = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    };
    $rootScope.members = [
        {"name": "1",
        "procesor": "Intel i5",
        "age": 2011},
        {"name": "2",
        "procesor": "Intel i7",
        "age": 2010},
        {"name": "3",
        "procesor": "Intel core 2 duo",
        "age": 2008},
        {"name": "4",
        "procesor": "Intel core 2 duo",
        "age": 2012},
        {"name": "5",
        "procesor": "AMD",
        "age": 2006},
        {"name": "6",
        "procesor": "Intel i5",
        "age": 2009},
        {"name": "7",
        "procesor": "Intel i7",
        "age": 2008},
        {"name": "8",
        "procesor": "Intel i5",
        "age": 2011},
        {"name": "9",
        "procesor": "Intel i7",
        "age": 2010},
        {"name": "11",
        "procesor": "Intel core 2 duo",
        "age": 2008},
        {"name": "12",
        "procesor": "Intel core 2 duo",
        "age": 2012},
        {"name": "13",
        "procesor": "AMD",
        "age": 2006},
        {"name": "14",
        "procesor": "Intel i5",
        "age": 2009},
        {"name": "15",
        "procesor": "Intel i7",
        "age": 2008},
        {"name": "16",
        "procesor": "Intel i5",
        "age": 2011},
        {"name": "17",
        "procesor": "Intel i7",
        "age": 2010},
        {"name": "18",
        "procesor": "Intel core 2 duo",
        "age": 2008},
        {"name": "19",
        "procesor": "Intel core 2 duo",
        "age": 2012},
        {"name": "20",
        "procesor": "AMD",
        "age": 2006},
        {"name": "21",
        "procesor": "Intel i5",
        "age": 2009},
        {"name": "22",
        "procesor": "Intel i7",
        "age": 2008}
    ];
    $rootScope.activeMember = null;
    $rootScope.setActiveMember = m => {
        $rootScope.activeMember = m;
    };
    $rootScope.fullScreen = () => document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
})