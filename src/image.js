SVG.Image = function Image(){
    this.drag = new SVG.Draggable(this);
    this.constructor.call(this,SVG.createElement('image'));
};

//inherit from SVG.Element
SVG.Image.prototype = new SVG.Element();

//load image
SVG.Image.prototype.load = function(url){
    this.setAttribute('href',url,SVG.xlink);
    return this;
}

//include the container object

SVG.Image.include(SVG.Container);