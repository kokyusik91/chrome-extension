
const images = Array.from(document.querySelectorAll('img'));

images.forEach((image) => image.addEventListener('click', ()=>{
  // 이미지 src를 브라우저의 저장소에 저장한다.
  chrome.storage.local.set({image : image.src})
}))