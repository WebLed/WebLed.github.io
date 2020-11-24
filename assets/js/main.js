butt.onclick = function () {
  var val = document.getElementById("elem1").value;
  window.open(
    "https://api.telegram.org/bot1403106172:AAF0cYqbdUgpDOQqllWvZTo1vOfUUNoDvo4/sendMessage?chat_id=-1001077685352&parse_mode=html&text=" +
      val
  );
  window.close();
};
