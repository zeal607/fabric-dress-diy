window.onload=function(){
    //添加canvas
    let cvs=document.createElement("canvas");
    cvs.id="cvs";
    document.body.prepend(cvs);
    //设置canvas全屏
    cvs.width = document.body.clientWidth;
    cvs.height = document.body.clientHeight;
    console.info("canvas全屏,宽："+cvs.width+",高："+cvs.height)
    fabric_cvs=new fabric.Canvas('cvs');
    console.info("fabric_cvs初始化完成")
}
