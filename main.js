difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    background('#C3C3C3');

    document.getElementById("font_size").innerHTML="Font Size Of The Text Will Be:" + difference + "px";
    textSize(difference);
    fill('#000080');
    text('Aryavir', 50, 400);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;

        console.log("leftWristX=" + leftWristX + "rightWristX=" + rightWristX + "difference=" + difference);
    }
}