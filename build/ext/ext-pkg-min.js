/*
Copyright 2010, KISSY UI Library v1.1.6
MIT Licensed
build time: Nov 22 20:39
*/
KISSY.add("ext-align",function(c){function e(){this.on("bindUI",this._bindUIAlign,this);this.on("renderUI",this._renderUIAlign,this);this.on("syncUI",this._syncUIAlign,this)}function f(a,d){var g=d.charAt(0),i=d.charAt(1),h,j,k,l;if(a){a=c.one(a);h=a.offset();j=a[0].offsetWidth;k=a[0].offsetHeight}else{h={left:b.scrollLeft(),top:b.scrollTop()};j=b.viewportWidth();k=b.viewportHeight()}l=h.left;h=h.top;if(g==="c")h+=k/2;else if(g==="b")h+=k;if(i==="c")l+=j/2;else if(i==="r")l+=j;return{left:l,top:h}}
c.namespace("Ext");var b=c.DOM;c.mix(e,{TL:"tl",TC:"tc",TR:"tr",CL:"cl",CC:"cc",CR:"cr",BL:"bl",BC:"bc",BR:"br"});e.ATTRS={align:{}};e.prototype={_bindUIAlign:function(){},_renderUIAlign:function(){},_syncUIAlign:function(){},_uiSetAlign:function(a){c.isPlainObject(a)&&this.align(a.node,a.points,a.offset)},align:function(a,d,g){var i,h=this.get("el");g=g||[0,0];i=b.offset(h);a=f(a,d[0]);d=f(h,d[1]);d=[d.left-a.left,d.top-a.top];this.set("xy",[i.left-d[0]+ +g[0],i.top-d[1]+ +g[1]])},center:function(a){this.set("align",
{node:a,points:[e.CC,e.CC],offset:[0,0]})},__destructor:function(){}};c.Ext.Align=e});
KISSY.add("ext-box",function(c){function e(){this.on("renderUI",this._renderUIBoxExt,this);this.on("syncUI",this._syncUIBoxExt,this);this.on("bindUI",this._bindUIBoxExt,this)}c.namespace("Ext");var f=document,b=c.Node;e.ATTRS={el:{setter:function(a){if(c.isString(a))return c.one(a)}},elCls:{},elStyle:{},width:{},height:{},html:{value:false}};e.HTML_PARSER={el:function(a){return a}};e.prototype={_syncUIBoxExt:function(){},_bindUIBoxExt:function(){},_renderUIBoxExt:function(){var a=this.get("render")||
c.one(f.body),d=this.get("el");a=new b(a);if(!d){d=new b("<div>");a.prepend(d);this.set("el",d)}},_uiSetElCls:function(a){a&&this.get("el").addClass(a)},_uiSetElStyle:function(a){a&&this.get("el").css(a)},_uiSetWidth:function(a){a&&this.get("el").width(a)},_uiSetHeight:function(a){a&&this.get("el").height(a)},_uiSetHtml:function(a){a!==false&&this.get("el").html(a)},__destructor:function(){var a=this.get("el");if(a){a.detach();a.remove()}}};c.Ext.Box=e});
KISSY.add("ext-overlay-close",function(c){function e(){this.on("renderUI",this._rendUICloseExt,this);this.on("bindUI",this._bindUICloseExt,this);this.on("syncUI",this._syncUICloseExt,this)}c.namespace("Ext");var f=c.Node;e.ATTRS={closable:{value:true},closeBtn:{}};e.HTML_PARSER={closeBtn:".ks-ext-close"};e.prototype={_syncUICloseExt:function(){},_uiSetClosable:function(b){var a=this.get("closeBtn");if(a)b?a.show():a.hide()},_rendUICloseExt:function(){var b=this.get("closeBtn"),a=this.get("contentEl");
if(!b&&a){b=(new f("<a href='#' class='ks-ext-close'><span class='ks-ext-close-x'>X</span></a>")).appendTo(a);this.set("closeBtn",b)}},_bindUICloseExt:function(){var b=this,a=b.get("closeBtn");a&&a.on("click",function(d){b.hide();d.halt()})},__destructor:function(){var b=this.get("closeBtn");b&&b.detach()}};c.Ext.Close=e});
KISSY.add("ext-constrain",function(c){function e(){this.on("bindUI",this._bindUIConstrain,this);this.on("renderUI",this._renderUIConstrain,this);this.on("syncUI",this._syncUIConstrain,this)}function f(a){var d=undefined;if(!a)return d;var g=this.get("el");if(a!==true){a=c.one(a);d=a.offset();c.mix(d,{maxLeft:d.left+a[0].offsetWidth-g[0].offsetWidth,maxTop:d.top+a[0].offsetHeight-g[0].offsetHeight})}else{d={left:b.scrollLeft(),top:b.scrollTop()};c.mix(d,{maxLeft:d.left+b.viewportWidth()-g[0].offsetWidth,
maxTop:d.top+b.viewportHeight()-g[0].offsetHeight})}return d}c.namespace("Ext");var b=c.DOM;e.ATTRS={constrain:{value:false}};e.prototype={_bindUIConstrain:function(){},_renderUIConstrain:function(){},_constrainX:function(a){a=a.newVal;var d=f.call(this,this.get("constrain"));if(d)if(a>=d.maxLeft||a<=d.left)return false},_constrainY:function(a){a=a.newVal;var d=f.call(this,this.get("constrain"));if(d)if(a>=d.maxTop||a<=d.top)return false},_syncUIConstrain:function(){},_uiSetConstrain:function(a){if(a){this.detach("beforeXChange",
this._constrainX,this);this.detach("beforeYChange",this._constrainY,this);this.on("beforeXChange",this._constrainX,this);this.on("beforeYChange",this._constrainY,this)}else{this.detach("beforeXChange",this._constrainX,this);this.detach("beforeYChange",this._constrainY,this)}},__destructor:function(){}};c.Ext.Constrain=e});
KISSY.add("ext-contentbox",function(c){function e(){this.on("renderUI",this._renderUIContentBox,this);this.on("syncUI",this._syncUIContentBox,this);this.on("bindUI",this._bindUIContentBox,this)}c.namespace("Ext");var f=c.Node;e.ATTRS={contentEl:{},content:{}};e.HTML_PARSER={contentEl:".ks-contentbox"};e.prototype={_syncUIContentBox:function(){},_bindUIContentBox:function(){},_renderUIContentBox:function(){var b=this.get("contentEl"),a=this.get("el");if(!b){b=(new f("<div class='ks-contentbox'>")).appendTo(a);
this.set("contentEl",b)}},_uiSetContent:function(b){b!==undefined&&this.get("contentEl").html(b)},__destructor:function(){}};c.Ext.ContentBox=e});
KISSY.add("ext-drag",function(c){function e(){this.on("bindUI",this._bindUIDragExt,this);this.on("renderUI",this._renderUIDragExt,this);this.on("syncUIUI",this._syncUIDragExt,this)}c.namespace("Ext");e.ATTRS={handlers:{value:[]},draggable:{value:true}};e.prototype={_uiSetHanlders:function(f){f&&f.length>0&&this.__drag.set("handlers",f)},_syncUIDragExt:function(){},_renderUIDragExt:function(){},_bindUIDragExt:function(){var f=this.get("el");this.__drag=new c.Draggable({node:f,handlers:this.get("handlers")})},
_uiSetDraggable:function(f){var b=this.__drag;if(f){b.detach("drag");b.on("drag",this._dragExtAction,this)}else b.detach("drag")},_dragExtAction:function(f){this.set("xy",[f.left,f.top])},__destructor:function(){var f=this.__drag;f&&f.destroy()}};c.Ext.Drag=e});
KISSY.add("ext-loading",function(c){function e(){}c.namespace("Ext");e.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new c.Node("<div class='ks-ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var f=this._loadingExtEl;f&&f.hide()}};c.Ext.Loading=e});
KISSY.add("ext-mask",function(c){function e(){this.on("bindUI",this._bindUIMask,this);this.on("renderUI",this._renderUIMask,this);this.on("syncUI",this._syncUIMask,this)}c.namespace("Ext");var f,b=c.UA,a=0;e.ATTRS={mask:{value:false}};e.prototype={_bindUIMask:function(){},_renderUIMask:function(){},_syncUIMask:function(){},_uiSetMask:function(d){if(d){this.on("show",this._maskExtShow,this);this.on("hide",this._maskExtHide,this)}else{this.detach("show",this._maskExtShow,this);this.detach("hide",this._maskExtHide,
this)}},_maskExtShow:function(){if(!f){f=(new c.Node("<div class='ks-ext-mask'>")).prependTo(document.body);f.css({position:"absolute",left:0,top:0,width:"100%",height:c.DOM.docHeight()});b.ie==6&&f.append("<iframe style='width:100%;height:expression(this.parentNode.offsetHeight);filter:alpha(opacity=0);z-index:-1;'>")}f.css({"z-index":this.get("zIndex")-1});a++;f.show()},_maskExtHide:function(){a--;if(a<=0)a=0;a||f&&f.hide()},__destructor:function(){}};c.Ext.Mask=e});
KISSY.add("ext-position",function(c){function e(){this.on("bindUI",this._bindUIPosition,this);this.on("renderUI",this._renderUIPosition,this);this.on("syncUI",this._syncUIPosition,this)}c.namespace("Ext");var f=document,b=c.Event;e.ATTRS={x:{},y:{},xy:{setter:function(a){var d=c.makeArray(a);if(d.length){d[0]&&this.set("x",d[0]);d[1]&&this.set("y",d[1])}return a}},zIndex:{value:9999},visible:{value:undefined}};e.prototype={_syncUIPosition:function(){},_renderUIPosition:function(){this.get("el").addClass("ks-ext-position");
this.get("el").css("display","")},_bindUIPosition:function(){},_uiSetZIndex:function(a){a!==undefined&&this.get("el").css("z-index",a)},_uiSetX:function(a){a!==undefined&&this.get("el").offset({left:a})},_uiSetY:function(a){a!==undefined&&this.get("el").offset({top:a})},_uiSetVisible:function(a){if(a!==undefined){this.get("el").css("visibility",a?"visible":"hidden");this[a?"_bindKey":"_unbindKey"]();this.fire(a?"show":"hide")}},_bindKey:function(){b.on(f,"keydown",this._esc,this)},_unbindKey:function(){b.remove(f,
"keydown",this._esc,this)},_esc:function(a){a.keyCode===27&&this.hide()},move:function(a,d){if(c.isArray(a)){d=a[1];a=a[0]}this.set("xy",[a,d])},show:function(){this._firstShow()},_firstShow:function(){this.renderer();this._realShow();this._firstShow=this._realShow},_realShow:function(){this.set("visible",true)},hide:function(){this.set("visible",false)},__destructor:function(){}};c.Ext.Position=e});
KISSY.add("ext-shim",function(c){function e(){this.on("renderUI",this._renderUIShimExt,this);this.on("bindUI",this._bindUIShimExt,this);this.on("syncUI",this._syncUIShimExt,this)}c.namespace("Ext");var f=c.Node;e.prototype={_syncUIShimExt:function(){},_bindUIShimExt:function(){},_renderUIShimExt:function(){var b=this.get("el"),a=new f("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'>");
b.prepend(a)},__destructor:function(){}};c.Ext.Shim=e});
KISSY.add("ext-stdmod",function(c){function e(){this.on("renderUI",this._renderUIStdMod,this);this.on("syncUI",this._syncUIStdMod,this);this.on("bindUI",this._bindUIStdMod,this)}c.namespace("Ext");var f=c.Node;e.ATTRS={header:{},body:{},footer:{},bodyStyle:{},headerContent:{value:false},bodyContent:{value:false},footerContent:{value:false}};e.HTML_PARSER={header:".ks-stdmod-header",body:".ks-stdmod-body",footer:".ks-stdmod-footer"};e.prototype={_bindUIStdMod:function(){},_syncUIStdMod:function(){},
_setStdModContent:function(b,a){if(a!==false)if(c.isString(a))this.get(b).html(a);else{this.get(b).html("");this.get(b).append(a)}},_uiSetBodyStyle:function(b){b!==undefined&&this.get("body").css(b)},_uiSetBodyContent:function(b){this._setStdModContent("body",b)},_uiSetHeaderContent:function(b){this._setStdModContent("header",b)},_uiSetFooterContent:function(b){this._setStdModContent("footer",b)},_renderUIStdMod:function(){var b=this.get("contentEl"),a=this.get("header"),d=this.get("body"),g=this.get("footer");
this.get("headerContent");this.get("bodyContent");this.get("footerContent");if(!a){a=(new f("<div class='ks-stdmod-header'>")).appendTo(b);this.set("header",a)}if(!d){d=(new f("<div class='ks-stdmod-body'>")).appendTo(b);this.set("body",d)}if(!g){g=(new f("<div class='ks-stdmod-footer'>")).appendTo(b);this.set("footer",g)}},__destructor:function(){}};c.Ext.StdMod=e});
