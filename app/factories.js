angular.module("Factories", [])

.factory('Add', Add)

function Add(a, b) {
    return a + b;
}
