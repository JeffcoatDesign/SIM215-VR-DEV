var sc_AnSceneNodegallery3_0_0_fn = function() {
{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.door1.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("gallery1");
});
}


{
var _this = this;

//Set camera position specified as {x,y,z}
var __cameraPos__ = {x:120, y:-10, z:30};
anWebgl.virtualCamera.getCamera().setPosition(__cameraPos__);
}

};
var sc_AnSceneNodegallery2_0_0_fn = function() {

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.door1.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("gallery1");
});
}

};
var sc_AnSceneNodegallery1_0_0_fn = function() {

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.door2.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("gallery2");
});
}

{
var _this = this;

//Clicking on the specified symbol instance executes a function.
_this.door3.addEventListener(AnEvent.CLICK, function() {

//Go to the specified scene and play
anWebgl.gotoScene("gallery3");
});
}

};
