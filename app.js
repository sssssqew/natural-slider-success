const container = document.querySelector('.container')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let index = 1

function moveToRight(e){
  index--
  console.log(index)
  container.style.marginLeft = -1 * index * 50 + 'vw'

  if(index === 0){ // 첫번째 사진(마지막사진 복사본) 이동시작 
    setTimeout(function(){ // 첫번째 사진 이동 끝남
      container.style.transition = 'none'
      container.style.opacity = '0' // 첫번째 사진 가림
      index = 5
      container.style.marginLeft = -1 * index  * 50 + 'vw' // 마지막 사진으로 이동
      container.style.opacity = '1' // 마지막 사진 보여줌
      
      setTimeout(function(){ // 트랜지션은 나중에 다시 설정하기
        container.style.transition = '.5s  ease-in-out'
      }, 100)
    }, 500)
  }
}
function moveToLeft(e){
  index++
  container.style.marginLeft = -1 * index  * 50 + 'vw'

  if(index === 6){ // 마지막 사진(첫번째사진 복사본) 이동시작 
    setTimeout(function(){ // 마지막 사진 이동 끝남
      container.style.transition = 'none'
      container.style.opacity = '0' // 마지막 사진 가림
      index = 1
      container.style.marginLeft = -1 * index  * 50 + 'vw' // 첫번째 사진으로 이동
      container.style.opacity = '1' // 첫번째 사진 보여줌
      
      setTimeout(function(){ // 트랜지션은 나중에 다시 설정하기
        container.style.transition = '.5s  ease-in-out'
      }, 100)
    }, 500)
  }
}



prev.addEventListener('click', moveToRight)
next.addEventListener('click', moveToLeft)

