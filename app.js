/* 문제점 : 클릭을 빠르게 하면 이상하게 동작함 */
/* 쓰로틀링과 디바운싱 적용해서 막아야 할듯 */

const container = document.querySelector('.container')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const widthOfPhoto = 50, unit = 'vw', duration = 500 // ms
let index = 1

// 시작점 또는 끝점으로 이동하는 함수
function slideToEnd(container, index, widthOfPhoto, unit, duration){
  setTimeout(function(){ // 마지막 사진 이동 끝남
    container.style.transition = 'none'
    container.style.opacity = '0' // 마지막 사진 가림
    container.style.marginLeft = -1 * index  * widthOfPhoto + unit // 첫번째 사진으로 이동
    container.style.opacity = '1' // 첫번째 사진 보여줌
    
    setTimeout(function(){ // 트랜지션은 나중에 다시 설정하기
      container.style.transition = `${duration}ms  ease-in-out`
    }, 100)
  }, duration)
}

function moveToRight(e){
  index--
  container.style.marginLeft = -1 * index * widthOfPhoto + unit

  if(index === 0){ // 첫번째 사진(마지막사진 복사본) 이동시작 
    index = 5
    slideToEnd(container, index, widthOfPhoto, unit, duration)
  }
}
function moveToLeft(e){
  index++
  container.style.marginLeft = -1 * index  * widthOfPhoto + unit

  if(index === 6){ // 마지막 사진(첫번째사진 복사본) 이동시작 
    index = 1
    slideToEnd(container, index, widthOfPhoto, unit, duration)
  }
}

prev.addEventListener('click', moveToRight)
next.addEventListener('click', moveToLeft)
