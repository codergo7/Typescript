//let log = (message) => console.log(message);


class Point {
    x: number;
    y: number;

     constructor(x: number, y?:number){
        this.x =x;
        this.y = y;
    }

    draw(){
       console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point){
        return 5;
    }
}

let point = new Point(10);

point.draw();


