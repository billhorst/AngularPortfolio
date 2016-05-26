angular.module('Directives',[])

.directive('front', Front)

function Front() {
    return {
        template: '<h1>Sup?</h1>',
        type: 'E'
    }
}