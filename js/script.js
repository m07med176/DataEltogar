
function boxbut2() {
   if (document.getElementById("progress").style.display === "block") {    document.getElementById("progress").style.display = "none";    document.getElementById("abouto").style.margin= "120px 0px 0px 0px";
    document.getElementById("but4").style.margin= "2px -500px";            } else { document.getElementById("progress").style.display = "block";         document.getElementById("abouto").style.margin = "0px 0px 0px 0px";
    document.getElementById("but4").style.margin = "8px 40px"; }   }

document.getElementById("stream_vidyt").style.display = "none";
function vidbut1() {
    document.getElementById("stream_vid").style.display = "none";
    document.getElementById("stream_vidyt").style.display = "block";
}

function vidbut2() {
    document.getElementById("stream_vid").style.display = "block";
    document.getElementById("stream_vidyt").style.display = "none";
}

function boxbut3() {
   if (document.getElementById("box1").style.display === "block") { document.getElementById("box1").style.display = "none"; } else { document.getElementById("box1").style.display = "block"; } }

function boxbut4() {
   if (document.getElementById("box2").style.display === "block") { document.getElementById("box2").style.display = "none"; } else { document.getElementById("box2").style.display = "block"; } }

function boxbut5() {
   if (document.getElementById("video_unit").style.display === "block") { document.getElementById("video_unit").style.display = "none"; } else { document.getElementById("video_unit").style.display = "block"; } }
