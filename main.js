var input23;
var currentid;
var favcolor1;
var imgid;
var currentid2;
var alignid;
var chbg;
var btnicon;
var btn;
var status = 0;

function store_id(clicked_id) {
  currentid = clicked_id;
  testiing();
  console.log(currentid);
}

//event listeners

function testiing() {
  document.getElementById(currentid).addEventListener("dblclick", edittextbef);
  document.getElementById(currentid).addEventListener("drag", ddrag);
  document.getElementById("icon").addEventListener("click", changeimg);
}

//form hml

function edittextbef() {
  var try4 = (document.getElementById(currentid).innerHTML +=
    '<form  id="form" onsubmit="return false;"><input type="text" id="userInput" placeholder="enter your text here"><input style= "margin-left:5px; width : 50px;" type="number" id="fsize1" placeholder="size"><br><button style= "margin-left:5px; " id="b1" onclick="align23(this.id)">left<br>align</button><button style= "margin-left:5px; " id="b2" onclick="align23(this.id)">center<br>align</button><button style= "margin-left:5px; " id="b3" onclick="align23(this.id)">right<br>align</button><br><input type="color" id="favcolor" id="favcolor" value="#ff0000"><select id="input-font" class="input" onchange="changeFontStyle (this);"><option value="Times New Roman" selected="selected"> Times New Roman</option> <option value="Arial">Arial</option> <option value="fantasy">Fantasy</option> <option value="cursive">cursive</option> </select><br><input type="submit" onclick="name23()">');
}
//calling functions
function name23() {
  input23 = document.getElementById("userInput").value;
  favcolor1 = document.getElementById("favcolor").value;
  fsize2 = document.getElementById("fsize1").value;
  edittext();
  editcolor();
  fsize();
  console.log("it runned ");
}

//font size

function fsize() {
  document.getElementById(currentid).style.fontSize = `${fsize2}px`;
}

//chaging color

function editcolor() {
  document.getElementById(currentid).style.color = favcolor1;
}

//chaging text

function edittext() {
  document.getElementById(currentid).innerHTML = input23;
  console.log("it runned ");
}

//changing font family

var changeFontStyle = function f_family(font) {
  document.getElementById(currentid).style.fontFamily = font.value;
};

// draging element

function ddrag() {
  console.log("trigs");
  $(function ddrag() {
    $(`#${currentid}`).draggable({});
  });
}

//resizeing (in progress)
function resize2() {
  console.log("trigs");
  $(function resize() {
    $(`#${currentid}`).resizeable({});
  });
}

//alignment of text
function align23(clicked_id3) {
  alignid = clicked_id3;

  if (alignid == "b1") {
    document.getElementById(currentid).style.textAlign = "left";
    console.log("l");
  } else if (alignid == "b2") {
    document.getElementById(currentid).style.textAlign = "center";
    console.log("c");
  } else if (alignid == "b3") {
    document.getElementById(currentid).style.textAlign = "right";
    console.log("r");
  }

  //changing background
}

function changeimg() {
  var bodycolor = document.getElementById("body1").style.background.value;
  chbg = document.getElementById("inp").innerHTML;
  document.getElementById("inp").innerHTML +=
    '<div  id="addmenu"style="margin-left: 50px;padding:1em 1em 1em 1em;justify-content:center; width: fit-content; height : fit-content;"><form onsubmit="return false;"><input type="text" style="margin:5px 5px 5px 5px;" id="myimg" placeholder="enter your url here"><br>solid color<br><input type="color" id="bgcolor" value="#ffffff"><input type="submit" style="margin-left:80px;padding:3px 3px 3px 3px;width:auto;border-radius:20px" onclick="changeimgapp()"></form> </div>';
  document.getElementById("bgcolor").value = bodycolor;
}
function changeimgapp() {
  var imgurl = document.getElementById("myimg").value;
  var bgbodycolor = document.getElementById("bgcolor").value;
  console.log(imgurl);

  document.getElementById(
    "home"
  ).style.background = `url(${imgurl}) no-repeat center center/cover`;
  document.getElementById("body1").style.background = bgbodycolor;

  document.getElementById("inp").innerHTML = chbg;
}
//add menu
document.getElementById("adbtnicon").addEventListener("click", add_menu);
function add_menu() {
  btnicon = document.getElementById("adbtn").innerHTML;
  document.getElementById("adbtn").innerHTML +=
    '<div class="well" id="addmenu"style="margin-left: 50px; width: fit-content"><ul class="option"><li class="item"><a href="#" onclick="text_types()" id="texts">TEXT</a></li><li class="item" ><a href="#" id="buts" onclick="but_types()" >BUTTONS</a></li><li><a href="#" id="imgs">IMAGES</a></li></ul></div>';
  // var status = 1;
  // if (status = "1"){

  // }
}
function but_types() {
  document.getElementById("buts").innerHTML +=
    '<style> #btndiv{display:flex;margin:10px 10px 10px 10px;flex-direction:column;width:7em ;height:14em;}#btndiv>.mybt{margin:10px 10px 10px 10px}</style><div class="well" id="addmenu"style="margin-left: 50px; width: fit-content;"><div id ="btndiv"><button id="1" onclick="add_button(this.id)" type="button" class="btn btn-primary mybt">Primary</button> <button type="button" id="2" onclick="add_button(this.id)" class="btn btn-secondary mybt">click</button> <button id="3" onclick="add_button(this.id)" type="button" class="btn btn-success mybt">Success</button> <button type="button" id="4" onclick="add_button(this.id)" class="btn btn-danger mybt">Danger</button></div></div>';
}
function text_types() {
  var text_but = document.getElementById("texts").innerHTML;
  document.getElementById("texts").innerHTML +=
    '<div class="well" id="addmenu"style="margin-left: 50px; width: fit-content"><ul class="option"><li class="item" ><a href="#" onclick="add_text()" id="h1"><h1>heading 1</h1></a></li><li class="item"><a href="#" onclick="add_text()" id="h2"><h2>heading 2</h2></a></li><li class="item"><a href="#" onclick="add_text()"  id="h3"><h3>heading 3</h3></a></li><li class="item"><a  onclick="add_text()"  href="#" id="h4"><h4>heading 4</h4></a></li><li class="item"><a href="#"  onclick="add_text()"  id="h5"><h5>heading 5</h5></a></li><li class="item"><a href="#"  onclick="add_text()"  id="h6"><h6>heading 6</h6></a></li><li class="item"><a href="#"  onclick="add_text()"  id="p"><p>paragraph</p></a></li>';
}
//add btn

function add_button(clickedbtid) {
  var butclass = clickedbtid;
  var btclsname = document.getElementById(butclass).className;
  console.log(btclsname);
  var btn = document.createElement("BUTTON"); // Create a <button> element
  btn.innerHTML = "BUTTON"; // Insert text
  document.getElementById("home").appendChild(btn);
  btn.className = btclsname;
  btn.setAttribute("id", "newbut");
  btn.setAttribute("onmouseover", "store_id(this.id)");
  btn.draggable = true;

  document.getElementById("adbtn").innerHTML = btnicon;
}
// adding text box

function add_text() {
  var texttagname = document.getElementById("h1").tagName;
  console.log(texttagname);
  var textbux = document.createElement(texttagname);
  textbux.innerHTML = "enter your text here";
  textbux.setAttribute("id", "newtext");
  textbux.setAttribute("onmouseover", "store_id(this.id)");
  document.getElementById("home").appendChild(textbux);
  document.getElementById("texts").innerHTML = text_but;
}
