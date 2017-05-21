
'use strict';

angular.module('swot').component('swotBox', {
    templateUrl: 'app/box/box.html',
    bindings: {
        name: '@',
        color: '@'
    },
    controller: function() {
        var vm = this;
        
        vm.$onInit = function() {
            vm.letter = vm.name[0];
        };
    }
});
