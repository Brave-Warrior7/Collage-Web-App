var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
recognition.start();
}

recognition.onresult = function run (event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);
   
    Webcam.attach("#camera");

    if(Content=="take my selfie"){
        console.log("taking selfie --------");
        speak()
    }
}




function speak(){
    var synth=window.speechSynthesis;
    speak_data= "Taking Your next selfie in 5 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
      take_snapshot();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90

});
camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result1").innerHTML='<img id="selfie_image1" src="'+data_uri+'">';
        document.getElementById("result2").innerHTML='<img id="selfie_image2" src="'+data_uri+'">';
        document.getElementById("result3").innerHTML='<img id="selfie_image3" src="'+data_uri+'">';
    })
}

