gdjs.mainCode = {};
gdjs.mainCode.localVariables = [];
gdjs.mainCode.GDbackgroundObjects1= [];
gdjs.mainCode.GDbackgroundObjects2= [];
gdjs.mainCode.GDplayerObjects1= [];
gdjs.mainCode.GDplayerObjects2= [];
gdjs.mainCode.GDballObjects1= [];
gdjs.mainCode.GDballObjects2= [];
gdjs.mainCode.GDstarttextObjects1= [];
gdjs.mainCode.GDstarttextObjects2= [];
gdjs.mainCode.GDbarrierObjects1= [];
gdjs.mainCode.GDbarrierObjects2= [];
gdjs.mainCode.GDsinglebrickObjects1= [];
gdjs.mainCode.GDsinglebrickObjects2= [];
gdjs.mainCode.GDscoreTextObjects1= [];
gdjs.mainCode.GDscoreTextObjects2= [];
gdjs.mainCode.GDbackgroundforthescoretextObjects1= [];
gdjs.mainCode.GDbackgroundforthescoretextObjects2= [];
gdjs.mainCode.GDbottomObjects1= [];
gdjs.mainCode.GDbottomObjects2= [];
gdjs.mainCode.GDNewTiledSpriteObjects1= [];
gdjs.mainCode.GDNewTiledSpriteObjects2= [];
gdjs.mainCode.GDdoublebrickObjects1= [];
gdjs.mainCode.GDdoublebrickObjects2= [];


gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.mainCode.GDballObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.mainCode.GDbarrierObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.mainCode.GDbarrierObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.mainCode.GDballObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.mainCode.GDballObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDsinglebrickObjects1Objects = Hashtable.newFrom({"singlebrick": gdjs.mainCode.GDsinglebrickObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDsinglebrickObjects1Objects = Hashtable.newFrom({"singlebrick": gdjs.mainCode.GDsinglebrickObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.mainCode.GDballObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbottomObjects1Objects = Hashtable.newFrom({"bottom": gdjs.mainCode.GDbottomObjects1});
gdjs.mainCode.asyncCallback9739836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.mainCode.asyncCallback9739836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.mainCode.GDballObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDdoublebrickObjects1Objects = Hashtable.newFrom({"doublebrick": gdjs.mainCode.GDdoublebrickObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDdoublebrickObjects1Objects = Hashtable.newFrom({"doublebrick": gdjs.mainCode.GDdoublebrickObjects1});
gdjs.mainCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.mainCode.GDdoublebrickObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDdoublebrickObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDdoublebrickObjects1[i].getVariableNumber(gdjs.mainCode.GDdoublebrickObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDdoublebrickObjects1[k] = gdjs.mainCode.GDdoublebrickObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDdoublebrickObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDdoublebrickObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDdoublebrickObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDdoublebrickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.mainCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].addPolarForce(0, 300, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].addPolarForce(0, -(300), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("starttext"), gdjs.mainCode.GDstarttextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDstarttextObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDstarttextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDstarttextObjects1[k] = gdjs.mainCode.GDstarttextObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDstarttextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].setPosition((( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointX("Center")),(( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointY("Center")) - 25);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("starttext"), gdjs.mainCode.GDstarttextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDstarttextObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDstarttextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDstarttextObjects1[k] = gdjs.mainCode.GDstarttextObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDstarttextObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
/* Reuse gdjs.mainCode.GDstarttextObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].addPolarForce(gdjs.randomInRange(-(145), -(45)), 250, 1);
}
}{for(var i = 0, len = gdjs.mainCode.GDstarttextObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDstarttextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("barrier"), gdjs.mainCode.GDbarrierObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbarrierObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDballObjects1 */
/* Reuse gdjs.mainCode.GDbarrierObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbarrierObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDballObjects1 */
/* Reuse gdjs.mainCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("singlebrick"), gdjs.mainCode.GDsinglebrickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDsinglebrickObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDballObjects1 */
/* Reuse gdjs.mainCode.GDsinglebrickObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDsinglebrickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.mainCode.GDsinglebrickObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDsinglebrickObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("scoreText"), gdjs.mainCode.GDscoreTextObjects1);
{for(var i = 0, len = gdjs.mainCode.GDscoreTextObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDscoreTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("bottom"), gdjs.mainCode.GDbottomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbottomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("doublebrick"), gdjs.mainCode.GDdoublebrickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDdoublebrickObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDballObjects1 */
/* Reuse gdjs.mainCode.GDdoublebrickObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDdoublebrickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.mainCode.GDdoublebrickObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDdoublebrickObjects1[i].returnVariable(gdjs.mainCode.GDdoublebrickObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("doublebrick"), gdjs.mainCode.GDdoublebrickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDdoublebrickObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDdoublebrickObjects1[i].getVariableNumber(gdjs.mainCode.GDdoublebrickObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDdoublebrickObjects1[k] = gdjs.mainCode.GDdoublebrickObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDdoublebrickObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDdoublebrickObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDdoublebrickObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDdoublebrickObjects1[i].getBehavior("Animation").setAnimationName("grey");
}
}
{ //Subevents
gdjs.mainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDbackgroundObjects1.length = 0;
gdjs.mainCode.GDbackgroundObjects2.length = 0;
gdjs.mainCode.GDplayerObjects1.length = 0;
gdjs.mainCode.GDplayerObjects2.length = 0;
gdjs.mainCode.GDballObjects1.length = 0;
gdjs.mainCode.GDballObjects2.length = 0;
gdjs.mainCode.GDstarttextObjects1.length = 0;
gdjs.mainCode.GDstarttextObjects2.length = 0;
gdjs.mainCode.GDbarrierObjects1.length = 0;
gdjs.mainCode.GDbarrierObjects2.length = 0;
gdjs.mainCode.GDsinglebrickObjects1.length = 0;
gdjs.mainCode.GDsinglebrickObjects2.length = 0;
gdjs.mainCode.GDscoreTextObjects1.length = 0;
gdjs.mainCode.GDscoreTextObjects2.length = 0;
gdjs.mainCode.GDbackgroundforthescoretextObjects1.length = 0;
gdjs.mainCode.GDbackgroundforthescoretextObjects2.length = 0;
gdjs.mainCode.GDbottomObjects1.length = 0;
gdjs.mainCode.GDbottomObjects2.length = 0;
gdjs.mainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.mainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.mainCode.GDdoublebrickObjects1.length = 0;
gdjs.mainCode.GDdoublebrickObjects2.length = 0;

gdjs.mainCode.eventsList2(runtimeScene);
gdjs.mainCode.GDbackgroundObjects1.length = 0;
gdjs.mainCode.GDbackgroundObjects2.length = 0;
gdjs.mainCode.GDplayerObjects1.length = 0;
gdjs.mainCode.GDplayerObjects2.length = 0;
gdjs.mainCode.GDballObjects1.length = 0;
gdjs.mainCode.GDballObjects2.length = 0;
gdjs.mainCode.GDstarttextObjects1.length = 0;
gdjs.mainCode.GDstarttextObjects2.length = 0;
gdjs.mainCode.GDbarrierObjects1.length = 0;
gdjs.mainCode.GDbarrierObjects2.length = 0;
gdjs.mainCode.GDsinglebrickObjects1.length = 0;
gdjs.mainCode.GDsinglebrickObjects2.length = 0;
gdjs.mainCode.GDscoreTextObjects1.length = 0;
gdjs.mainCode.GDscoreTextObjects2.length = 0;
gdjs.mainCode.GDbackgroundforthescoretextObjects1.length = 0;
gdjs.mainCode.GDbackgroundforthescoretextObjects2.length = 0;
gdjs.mainCode.GDbottomObjects1.length = 0;
gdjs.mainCode.GDbottomObjects2.length = 0;
gdjs.mainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.mainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.mainCode.GDdoublebrickObjects1.length = 0;
gdjs.mainCode.GDdoublebrickObjects2.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
