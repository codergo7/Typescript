//let log = (message) => console.log(message);
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        return 5;
    };
    return Point;
}());
var point = new Point(10);
point.draw();
