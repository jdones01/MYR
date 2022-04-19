import View from "../structural/View";
import React from "react";

export const Canvas = ({editor, scene})=>(
    <div id="scene">
        <View objects={editor.objects} sceneConfig={scene} assets={editor.assets} />
    </div>
);
export default Canvas;