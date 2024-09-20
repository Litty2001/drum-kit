var n = document.querySelectorAll(".item").length;

for( var i=0;i<n;i++)
{
    document.querySelectorAll(".item")[i].addEventListener("click",function ()
    {
        var n = this.innerHTML;
        switch(n)
        {
            case "W" : var audio = new Audio("./audio/tom-4.mp3");
            audio.play();
            break;
            case "A" : var audio = new Audio("./audio/tom-2.mp3");
            audio.play();
            break;
            case "S" : var audio = new Audio("./audio/tom-1.mp3");
            audio.play();
            break;
            case "D" : var audio = new Audio("./audio/snare.mp3");
            audio.play();
            break;
            case "J" : var audio = new Audio("./audio/kick-bass.mp3");
            audio.play();
            break;
            case "K" : var audio = new Audio("./audio/crash.mp3");
            audio.play();
            break;
            case "L" : var audio = new Audio("./audio/tom-3.mp3");
            audio.play();
            break;
        }
        sound(n);
        
        
    });
}

document.addEventListener("keydown", function(event)
{
    sound(event.key);
});
function sound(key)
{
    switch(key)
        {
            case "w" : var audio = new Audio("./audio/tom-4.mp3");
            audio.play();
            break;
            case "a" : var audio = new Audio("./audio/tom-2.mp3");
            audio.play();
            break;
            case "s" : var audio = new Audio("./audio/tom-1.mp3");
            audio.play();
            break;
            case "d" : var audio = new Audio("./audio/snare.mp3");
            audio.play();
            break;
            case "j" : var audio = new Audio("./audio/kick-bass.mp3");
            audio.play();
            break;
            case "k" : var audio = new Audio("./audio/crash.mp3");
            audio.play();
            break;
            case "l" : var audio = new Audio("./audio/tom-3.mp3");
            audio.play();
            break;
        }
}

