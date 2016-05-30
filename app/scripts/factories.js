angular.module("Factories", [])

.factory('AddUp', Calculation)

function Calculation() {
    return {
        add: function(a, b) {
            return a + b;
        }
    }
}
