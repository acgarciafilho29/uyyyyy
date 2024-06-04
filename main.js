Webcam.set({
    width:350,
    height:300,
    imageformat:'png',

    pngQuality:90
});


camera = document.getElementById("CAMERA")


Webcam.attach('#camera');


function takeSnapshot()
{
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  })  ;
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzEn/model.json',modelloader);

function modelLoader() {
    console.log('model Loader!');
}

function speak(){
    var synth = window.speechSynthesis;
    speakData1 =" A primeira previsão é " + prediction1;
    speakData2 =" E a segunda previsão é " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2)
synth.speak(utterThis);
}