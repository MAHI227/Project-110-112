var predict1="";
var predict2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
 Webcam.snap(function (URI)
    {
        document.getElementById("result").innerHTML="<img src='"+URI+"' id='captured_image'>";
    }
 );
}
console.log("version",ml5.version);
   classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mFdWznp4J/model.json",modeloaded);
       function modeloaded(){
           console.log("model is loaded");
       }
   function check(){
            image=document.getElementById("captured_image");
            classifier.classify(image,gotresult);
        }

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 ="The first prediction is"+ predict1;
    speak_data_2 ="And the second prefiction is"+ predict2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

   function gotresult(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("result_emotion_one").innerHTML=results[0].label;
    document.getElementById("result_emotion_two").innerHTML=results[1].label;
    predict1 = results[0].label;
    predict2 = results[1].label;
    speak();
    if(results[0].label == "happy"){
        document.getElementById("update_emoji").innerHTML="&#128522";
    }
    if(results[0].label == "sad"){
        document.getElementById("update_emoji").innerHTML="&#128532";
    }

    if(results[0].label == "angry"){
        document.getElementById("update_emoji").innerHTML="&#128548";
    }
    
    if(results[1].label == "happy"){
            document.getElementById("update_emoji").innerHTML="&#128522";
        }
        if(results[1].label == "happy"){
            document.getElementById("update_emoji").innerHTML="&#128522";
        }
        if(results[1].label == "happy"){
            document.getElementById("update_emoji").innerHTML="&#128522";
        }
    }
    }
   
   
        