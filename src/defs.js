SVG.Defs = function Defs(){
    this.constructor.call(this,SVG.create('defs'));
}

//inherit from SVG.Element
SVG.Defs.prototype = new SVG.Element();

//defs clippath
SVG.Defs.prototype.clipath = function(){
    var e = new SVG.ClipPath();
    this.add(e);
    return e;
}

//include the container object
SVG.Utils.merge(SVG.Defs,SVG.Container);

//add def-specific functions
SVG.Utils.merge(SVG.Defs,{
    //define clippath
    clipPath: function(){
        var e = new SVG.ClipPath();
        this.add(e);

        return e;
    }
})