var somlol =
  "00680074007400700073003a002f002f006100700069002e00740065006c0065006700720061006d002e006f00720067002f0062006f00740031003400300033003100300036003100370032003a0041004100460030006300590071006200640055006700700044004f00510071006c006c00570076005a0054006f00310076004f006600550055004e006f00440076006f0034002f00730065006e0064004d006500730073006100670065003f0063006800610074005f00690064003d002d003100300030003100300037003700360038003500330035003200260074006500780074003d";

butt.onclick = function () {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var mail = document.getElementById("mail").value;
  var comit = document.getElementById("comit").value;

  if (name && (phone || mail)) {
    var hexes = somlol.match(/.{1,4}/g) || [];
    var back = "";
    for (j = 0; j < hexes.length; j++) {
      back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    var getPageList = new XMLHttpRequest();
    getPageList.open(
      "POST",
      back +
        "%0Aимя: " +
        name +
        "%0Aтелефон: " +
        phone +
        "%0Aпочта: " +
        mail +
        "%0Aкоменты: " +
        comit,
      true
    );
    getPageList.send();
  }
};

function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    var range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}
function mask(e) {
  //console.log('mask',e);
  var matrix = this.placeholder, // .defaultValue
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || "_";
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder
    ? i++
    : (i = matrix.indexOf("_"));
  setCursorPosition(i, this);
}
window.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector("#phone");
  input.addEventListener("input", mask, false);
  input.focus();
  setCursorPosition(3, input);
});

function chengTypes(types) {
  if (!document.getElementById("t" + types).classList.contains("active")) {
    let parentT = document.getElementById("t" + types).parentElement;
    for (var i = 0; i < parentT.children.length; i++) {
      if (parentT.children[i].classList.contains("active")) {
        parentT.children[i].classList.remove("active");
        document.getElementById("b" + (1 + i)).classList.remove("active");
      }
    }
    document.getElementById("t" + types).classList.add("active");
    document.getElementById("b" + types).classList.add("active");
  }
}
