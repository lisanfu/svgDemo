SVG.Shape = function SHape(element){
    this.constructor.call(this,element);
};


//inherit from SVG.Element
SVG.Shape.prototype = new SVG.Element();


//set fill color and opacity
SVG.Shape.prototype.fill = function(fill){
<<<<<<< HEAD
   if(fill.color != null){
=======
    this._formatColor(fill);
    if(fill.color != null){
>>>>>>> b77b395a23acd6110fd859f9bbe2cf070467428d
        this.setAttribute('fill',fill.color);
    }
    if(fill.opacity != null){
        this.setAttribute('fill-opacity',fill.opacity);
    }
    return this;
}

//set stroke color and opacity
SVG.Shape.prototype.stroke = function(stroke){
<<<<<<< HEAD

=======
    this._formatColor(stroke);
>>>>>>> b77b395a23acd6110fd859f9bbe2cf070467428d
    if(stroke.color != null){
        this.setAttribute('stroke',stroke.color);
    }
    if(stroke.width != null){
        this.setAttribute('stroke-width',stroke.width);
    }
    if(stroke.opacity != null){
        this.setAttribute('stroke-opacity',stroke.opacity);
    }
    if(this.attributes['fill-opacity'] == null){
        this.fill({opacity:0})
    }
    return this;
}
<<<<<<< HEAD
=======

//ensure correct color string

SVG.Shape.prototype._formatColor = function(obj){
    if(typeof obj.color === 'number'){
        obj.color = '' + obj.color.toString(16);
        while(obj.color = '0' + obj.color);
        return obj.color = '#' + obj.color;
    }
}
>>>>>>> b77b395a23acd6110fd859f9bbe2cf070467428d
