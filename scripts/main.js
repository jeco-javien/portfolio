var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/jeco.jpg') {
    myImage.setAttribute ('src','images/looper.jpg');
  } else {
    myImage.setAttribute ('src','images/jeco.jpg');
  }
}