
SVG.Element = function Element(node){
    this.node = node;
    this.attrs = {};
}

SVG.Utils.merge(SVG.Element,{
    move: function(x,y){
        this.attr('x',x);
        this.attr('y',y);

        return this;
    },
    //set element opacity
    opacity: function(o){
        return this.attr('opacity',Math.max(0,Math.min(1,o)));
    },

    //set element size to given width and height
    size: function(w,h){
        this.attr('width',w);
        this.attr('height',h);

        return this;
    },
    clip: function(block){
        var p = this.parentSVG().defs().clipPath();

        block(p);

        return this.clipTo(p);
    },
    clipTo: function(p){
        return this.attr('clip-path','url(#' + p.id + ')');
    },
    destory: function(){
        return this.parent != null ? this.parent.remove(this) : void 0;
    },
    parentDoc: function(){
        return this._parent(SVG.Document);
    },
    parentSVG: function(){
        return this.parentDoc();
    },
    attr: function(v){
        var a = arguments;
        this.attrs[a[0]] = a[1];
        if(typeof v == 'object'){
            for(var k in v){
                this.attr(k,v[k]);
            }
        }else if(a.length == 2){
            this.node.setAttribute(a[0],a[1]);
        }else if(a.length == 3){
            this.node.setAttributeNS(a[2],a[0],a[1]);
        }else{
            return this;
        }
       
    },
    bbox: function(){
        return this.node.getBBox();
    },
    _parent: function(pt){
        var e = this;
        while(e != null && !(e instanceof pt)){
            e = e.parent;
        }
        return e;
    }
})
