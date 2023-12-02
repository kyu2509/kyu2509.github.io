function alertHW() {
  alert("Hello, world!");
}

function changeFontSize() {
  document.getElementById("textBox").style.fontSize = "24pt";
}

function changeCaseMoo() {
  var result = document.getElementById("textBox").value;

  var parts = result.split(" ");
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].endsWith(".")) {
      let lastPart = parts[i];
      let s1 = lastPart.substring(0, lastPart.length - 1);
      s1 = s1 + "Moo" + ".";
      parts[i] = s1;
    }
  }
  result = parts.join(" ");
  result = result.toUpperCase();
  document.getElementById("textBox").value = result;
}

function fancy() {
  document.getElementById("textBox").style.fontWeight = "bold";
  document.getElementById("textBox").style.color = "blue";
  document.getElementById("textBox").style.textDecoration = "underline";
}

function boring() {
  document.getElementById("textBox").style.fontWeight = "normal";
  document.getElementById("textBox").style.color = "black";
  document.getElementById("textBox").style.textDecoration = "none";
}

function check() {
  document.getElementById("fancy").checked = true;
}

function unCheck() {
  document.getElementById("fancy").checked = false;
}

