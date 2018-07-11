var SVG = {
    namespace: "http://www.w3.org/2000/svg",//命名空间
    xlink:     "http://www.w3.org/1999/xlink",
    createElement: function(e){
        return document.createElementNS(this.namespace,e);
    }
}
this.SVG = SVG