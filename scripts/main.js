let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'test6.png') {
      myImage.setAttribute('src','test4.png');
    } else {
      myImage.setAttribute('src','test6.png');
    }
}