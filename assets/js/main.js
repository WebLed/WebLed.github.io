{
  const somlol =
    "00680074007400700073003a002f002f006100700069002e00740065006c0065006700720061006d002e006f00720067002f0062006f00740031003400300033003100300036003100370032003a0041004100460030006300590071006200640055006700700044004f00510071006c006c00570076005a0054006f00310076004f006600550055004e006f00440076006f0034002f00730065006e0064004d006500730073006100670065003f0063006800610074005f00690064003d002d003100300030003100300037003700360038003500330035003200260074006500780074003d";
  let svich = true;
  errororderphone.onclick = () => errororderphone.classList.remove("active");

  butt.onclick = () => {
    if (svich) {
      let order = "";
      {
        let i = 0;
        while (document.getElementById("order" + i)) {
          if (document.getElementById("order" + i).checked) {
            order +=
              document.getElementById("order" + i).nextElementSibling
                .textContent + ", ";
          }
          i++;
        }
      }
      if (phone.value) {
        let hexes = somlol.match(/.{1,4}/g) || [];
        let back = "";
        for (j = 0; j < hexes.length; j++) {
          back += String.fromCharCode(parseInt(hexes[j], 16));
        }

        let getPageList = new XMLHttpRequest();
        getPageList.open(
          "POST",
          back +
            "%0Aимя: " +
            namelid.value +
            "%0Aтелефон: " +
            phone.value +
            "%0AЧто нужно: " +
            order +
            "%0Aкоменты: " +
            comit.value,
          true
        );
        getPageList.send();
        butt.classList.add("active");
        svich = false;
        namelid.value = "";
        phone.value = "";
        comit.value = "";
        setTimeout(() => {
          butt.classList.remove("active");
          svich = true;
        }, 10000);
      } else {
        errororderphone.classList.add("active");
        setTimeout(() => errororderphone.classList.remove("active"), 10000);
      }
    }
  };
}

//-------------------

function chengTypes(types) {
  if (!document.getElementById("t" + types).classList.contains("active")) {
    let parentT = document.getElementById("t" + types).parentElement;
    for (let i = 0; i < parentT.children.length; i++) {
      if (parentT.children[i].classList.contains("active")) {
        parentT.children[i].classList.remove("active");
        document.getElementById("b" + (1 + i)).classList.remove("active");
      }
    }
    document.getElementById("t" + types).classList.add("active");
    document.getElementById("b" + types).classList.add("active");
  }
}
