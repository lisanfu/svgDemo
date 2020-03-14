SVG.Circle = function Circle() {
  this.constructor.call(this, SVG.create("circle"));
};

//inherit from SVG.Shape

SVG.Circle.prototype = new SVG.Shape();
//add circle-specific function
SVG.Utils.merge(SVG.Circle, {
  move: function(x, y) {
    this.attrs.x = x;
    this.attrs.y = y;
    this.center();
    return this;
  },
  size: function(w, h) {
    this.attr("r", h / 2);
    // this.attr("r", w / 2);
    this.center();

    return this;
  },
  //private center
  center: function(cx, cy) {
    var r = this.attrs.r || 0;
    this.attr("cx", cx || (this.attrs.x || 0) + r);
    this.attr("cy", cy || (this.attrs.y || 0) + r);
  }
});
