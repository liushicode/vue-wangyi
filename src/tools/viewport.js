function ViewPort(){
    let width=375;
    let vw=document.documentElement.clientWidth;
    let scale=(vw/width).toFixed(2);
    console.log(scale)
    let viewport=document.querySelector('meta[name=viewport]');
    viewport.content=`initial-scale=${scale},user-scalable=no`;
}

ViewPort();