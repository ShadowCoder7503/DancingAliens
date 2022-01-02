var div = document.getElementById("full");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
  div.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,1000);


function StartRecording(){
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Wk2X_eNlR/',modelReady);

}
function modelReady(){
  classfier.classify(gotResults);
}

function gotResults(error,results){
if (error){
  console.error(error);
}
else{
  console.log(results);
  random_number_r = Math.floor(Math.random()*255) + 1;
  random_number_g = Math.floor(Math.random()*255) + 1;
  random_number_b = Math.floor(Math.random()*255) + 1;

   document.getElementById("result").innerHTML ="I can hear" + results[0].label;
  document.getElementById("accuracy").innerHTML ="Accuracy:" +
   (results[0].confidence*100).toFixed(2) + "%";
   document.getElementById("result").style.color = random_number_r +random_number_g+random_number_b;
   document.getElementById("accuracy").style.color = random_number_r +random_number_g+random_number_b;

   img1 = document.getElementById("A1")
   img2 = document.getElementById("A2")
   img3 = document.getElementById("A3")
   img4 = document.getElementById("A4")

   if(results[0].label == "Bell"){
     img1.src = 'aliens-01.gif';
     img2.src = 'aliens-02.png';
     img3.src = 'aliens-03.png';
     img4.src = 'aliens-04.png';
    
   }
   else if(results[0].label == "Clapping"){
    img1.src = 'aliens-01.png';
    img2.src = 'aliens-02.gif';
    img3.src = 'aliens-03.png';
    img4.src = 'aliens-04.png';
   }
   else if(results[0].label == "Snapping"){
    img1.src = 'aliens-01.png';
    img2.src = 'aliens-02.png';
    img3.src = 'aliens-03.gif';
    img4.src = 'aliens-04.png';
}

else if(results[0].label == "Background Noise"){
  img1.src = 'aliens-01.png';
  img2.src = 'aliens-02.png';
  img3.src = 'aliens-03.png';
  img4.src = 'aliens-04.gif';
}
}
}