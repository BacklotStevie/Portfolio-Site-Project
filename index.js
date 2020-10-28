function typeWriter(i, txt, id, speed) {


  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(function () { typeWriter(i, txt, id, speed) }, speed);
  }
}

typeWriter(0, 'Lorem ipsum dummy text blabla.', 'demo', 50)


setTimeout(function () {
  typeWriter(0, 'im a web dev blan blabla.', 'demo2', 50)
}, 2000)

