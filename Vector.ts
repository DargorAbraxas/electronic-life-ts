export default function Vector(x : number, y : number){
    this.x = x;
    this.y = y;
    Object.defineProperty(this, 'length', {
        get : function(){
            return Math.sqrt(this.x*this.x + this.y*this.y);
        }
    });
};
interface vector_interface{
    x : number;
    y : number;
}
Vector.prototype.plus = function(vector : vector_interface){
    return new Vector(this.x + vector.x, this.y + vector.y);
};
Vector.prototype.minus = function(vector  : vector_interface){
    return new Vector(this.x - vector.x, this.y - vector.y);
};