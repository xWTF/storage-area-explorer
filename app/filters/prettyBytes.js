angular.module('storageExplorer').filter("prettyBytes", function () {

    var kbSize = 1024;
    var mbSize = 1024 * kbSize;
    return function (input) {
        if (input < +(kbSize / 10)) {
            if (input == 1) {
                return '1 B';
            }
            return input + ' B'
        }
        var result;
        var type;
        if (input < mbSize) {
            result = (input / kbSize);
            type = " KB"
        } else {
            result = (input / mbSize);
            type = " MB"
        }

        result = +(result.toFixed(2));

        return result + type;
    };
});
