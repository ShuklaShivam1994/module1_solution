(function () {

angular.module('LunchCheck', []);

.controller('LunchCheckController', function($scope) {
  $scope.items = "";
  $scope.deafaultmsg = "Please enter data first";
  $scope.displaymsg = function () {
    var finalmsg =
    splitString($scope.items);
  };

  function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);
  }

  const itemname = $scope.items;

  const space = ',';
  splitString(itemname, space);
  splitString(itemname);
  if (arrayOfStrings.length <= 2) {
    console.log('enjoy');
    }
    else {
      console.log('reduce');
  }

  }

});
})();
