let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/efcf7a809867bbb8b5b71844da4978c5.jpeg') {
      myImage.setAttribute('src', 'images/20200826001631_8ebc3.jpg');
    } else {
      myImage.setAttribute('src', 'images/efcf7a809867bbb8b5b71844da4978c5.jpeg');
    }
}
