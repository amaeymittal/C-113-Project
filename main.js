function preload(){

}
function setup(){
    filter = "";
    canvas = createCanvas(640,480);
    canvas.position(110,250)
    video = createCapture(VIDEO)
    video.hide()

}
function draw(){
    image(video,230,150,220,200)
    tint(filter);
    fill("red")
    circle(50,50,80)
    circle(590,50,80)
    circle(50,430,80)
    circle(590,430,80)
    fill("green")
    rect(90,40,460,20)
    rect(90,420,460,20)
    rect(40,90,20,300)
    rect(580,90,20,300)


    
}
function apply_filter(){
    filter = document.getElementById("filter_color").value;
}
function take_snapshot(){
    save("filtered_selfie.png")
}