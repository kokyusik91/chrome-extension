chrome.storage.local.get(["image"], async function(result) {
  if(result.image){
    document.body.style.backgroundImage = `url(${result.image})`;
    document.body.style.backgroundSize = `200px`;
    document.body.style.backgroundRepeat = "repeat"
  }
})

// 해당 웹페이지에 있는 모든 사진들을 지정한 사진으로 대체한다.
// const images = [...document.querySelectorAll('img')]
// images.forEach((image) => {
//   image.src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg'
// })

// 해당 웹페이지에 있는 사진을 누르게 되면 이미지가 변경된다.
// window.addEventListener('click', (e)=> {
//   const tag = e.target.tagName
//   if(tag === 'IMG'){
//     const target = e.target
//     target.src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg'
//   }
// })

// DOM 요소를 클릭하면 해당 DOM 요소가 삭제된다.
// window.addEventListener('click', (e)=>{
//   e.preventDefault()
//   e.stopImmediatePropagation()
//   const target = e.target
//   target.remove()
// })