let iWord = document.getElementById('tWord');
let bText = document.getElementById('bText');
let bSpeech = document.getElementById('bSpeech');
let pCodes = document.getElementById('nato');

var codes = ["Alpha","Bravo","Charlie","Delta","Echo","Fox","Golf","Hotel","India","Juliette","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","Xray","Yankee","Zulu"];
function set_text_area(element){
    
    let inputWord = (iWord.value).toLowerCase();
    var i;
    var acode = "a".charCodeAt(0);
    var zcode = "z".charCodeAt(0);
    var text = "";
    var isValid = true;
    for (i = 0; i < inputWord.length; i++) {
        var current = inputWord.charCodeAt(i);
        var index = current-acode;
        if (index>=0 && current<=zcode){
            text += codes[index];
        }
        else if(current==' '.charCodeAt(0)){
            
        }
        else{
            isValid = false;
            break;
        }
        text += "<br/>"
    }
    if (isValid){
        pCodes.innerHTML=text;
    }
    else{
        pCodes.innerHTML="Unsupported text, please ented english characters/space only"
    }
}

function speak_text(element){
    let inputWord = (iWord.value).toLowerCase();
    var i;
    var acode = "a".charCodeAt(0);
    var zcode = "z".charCodeAt(0);
    var text = "";
    for (i = 0; i < inputWord.length; i++) {
        var current = inputWord.charCodeAt(i);
        var index = current-acode;
        if (index>=0 && current<=zcode){
            var msg = new SpeechSynthesisUtterance(codes[index]);
            window.speechSynthesis.speak(msg);
        }
        else if(current==' '.charCodeAt(0)){
        }
        else{
            pCodes.innerHTML="Unsupported text, please ented english characters/space only"
            break;
        }
    }
}
bText.onclick = set_text_area;
bSpeech.onclick = speak_text;