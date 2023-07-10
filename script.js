const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
/*
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}
*/
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

//Jack Johnson
const btn1Correct = document.getElementById('btn1Correct')

const btn1_1 = document.getElementById('btn1_1')
const btn1_2 = document.getElementById('btn1_2')
const btn1_3 = document.getElementById('btn1_3')
const btn1_4 = document.getElementById('btn1_4')
const btn1_5 = document.getElementById('btn1_5')
const btn1_6 = document.getElementById('btn1_6')

const swipe1 = document.getElementById('swipe1')
const swipe2 = document.getElementById('swipe2')
const swipe3 = document.getElementById('swipe3')
const swipe4 = document.getElementById('swipe4')
const swipe5 = document.getElementById('swipe5')
const swipe6 = document.getElementById('swipe6')

const word1_1 = document.getElementById('word1_1')
const word1_2 = document.getElementById('word1_2')

const word2_1 = document.getElementById('word2_1')
const word2_2 = document.getElementById('word2_2')

const word3_1 = document.getElementById('word3_1')
const word3_2 = document.getElementById('word3_2')

const word4_1 = document.getElementById('word4_1')
const word4_2 = document.getElementById('word4_2')

const word5_1 = document.getElementById('word5_1')
const word5_2 = document.getElementById('word5_2')

const word6_1 = document.getElementById('word6_1')
const word6_2 = document.getElementById('word6_2')

const word7_1 = document.getElementById('word7_1')
const word7_2 = document.getElementById('word7_2')

const correctSound = document.getElementById('correctSound')
const wrongSound = document.getElementById('wrongSound')

const instruction1 = document.getElementById('instruction1')
const instruction2 = document.getElementById('instruction2')
const instruction3 = document.getElementById('instruction3')
const instruction4 = document.getElementById('instruction4')
const instruction5 = document.getElementById('instruction5')
const instruction6 = document.getElementById('instruction6')

btn1Correct.addEventListener("click", function() {
correctSound.play()
btn1Correct.style.backgroundColor = "lime"
btn1Correct.style.color = "yellow"
word1_1.innerText = "He"
word1_2.innerText = "His"
word1_1.style.color = "darkorange"
word1_2.style.color = "darkorange"
swipe1.style.visibility = "visible"
btn1Correct.disabled = "true"
instruction1.style.visibility = "hidden"
})

btn1_1.addEventListener('click', function() {
wrongSound.play()
btn1_1.style.backgroundColor = 'red'
word1_1.style.color = "red"
word2_1.style.color = "red"
btn1_1.disabled = "true"
})

btn1_2.addEventListener('click', function() {
  wrongSound.play()
  btn1_2.style.backgroundColor = 'red'
  word2_1.style.color = "red"
  word2_2.style.color = "red"
  btn1_2.disabled = "true"
  })

  btn1_3.addEventListener('click', function() {
    wrongSound.play()
    btn1_3.style.backgroundColor = 'red'
    word3_1.style.color = "red"
    word3_2.style.color = "red"
    btn1_3.disabled = "true"
    })

    btn1_4.addEventListener('click', function() {
      wrongSound.play()
      btn1_4.style.backgroundColor = 'red'
      word4_1.style.color = "red"
      word4_2.style.color = "red"
      btn1_4.disabled = "true"
      })

      btn1_5.addEventListener('click', function() {
        wrongSound.play()
        btn1_5.style.backgroundColor = 'red'
        word5_1.style.color = "red"
        word5_2.style.color = "red"
        btn1_5.disabled = "true"
        })

        btn1_6.addEventListener('click', function() {
          wrongSound.play()
          btn1_6.style.backgroundColor = 'red'
          word6_1.style.color = "red"
          word6_2.style.color = "red"
          btn1_6.disabled = "true"
          })

//Norah Jones

const btn2Correct = document.getElementById('btn2Correct')

const btn2_1 = document.getElementById('btn2_1')
const btn2_2 = document.getElementById('btn2_2')
const btn2_3 = document.getElementById('btn2_3')
const btn2_4 = document.getElementById('btn2_4')
const btn2_5 = document.getElementById('btn2_5')
const btn2_6 = document.getElementById('btn2_6')

btn2Correct.addEventListener("click", function() {
  correctSound.play()
  btn2Correct.style.backgroundColor = "lime"
  btn2Correct.style.color = "yellow"
  word2_1.innerText = "She"
  word2_2.innerText = "Her"
  word2_1.style.color = "darkorange"
  word2_2.style.color = "darkorange"
  swipe2.style.visibility = "visible"
  btn2Correct.disabled = "true"
  instruction2.style.visibility = "hidden"
  })
  
  btn2_1.addEventListener('click', function() {
  wrongSound.play()
  btn2_1.style.backgroundColor = 'red'
  word2_1.style.color = "red"
  word2_2.style.color = "red"
  btn2_1.disabled = "true"
  })
  
  btn2_2.addEventListener('click', function() {
    wrongSound.play()
    btn2_2.style.backgroundColor = 'red'
    word2_1.style.color = "red"
    word2_2.style.color = "red"
    btn2_2.disabled = "true"
    })
  
    btn2_3.addEventListener('click', function() {
      wrongSound.play()
      btn2_3.style.backgroundColor = 'red'
      word3_1.style.color = "red"
      word3_2.style.color = "red"
      btn2_3.disabled = "true"
      })
  
      btn2_4.addEventListener('click', function() {
        wrongSound.play()
        btn2_4.style.backgroundColor = 'red'
        word4_1.style.color = "red"
        word4_2.style.color = "red"
        btn2_4.disabled = "true"
        })
  
        btn2_5.addEventListener('click', function() {
          wrongSound.play()
          btn2_5.style.backgroundColor = 'red'
          word5_1.style.color = "red"
          word5_2.style.color = "red"
          btn2_5.disabled = "true"
          })
  
          btn2_6.addEventListener('click', function() {
            wrongSound.play()
            btn2_6.style.backgroundColor = 'red'
            word6_1.style.color = "red"
            word6_2.style.color = "red"
            btn2_6.disabled = "true"
            })

//The Lumineers

const btn3Correct = document.getElementById('btn3Correct')

const btn3_1 = document.getElementById('btn3_1')
const btn3_2 = document.getElementById('btn3_2')
const btn3_3 = document.getElementById('btn3_3')
const btn3_4 = document.getElementById('btn3_4')
const btn3_5 = document.getElementById('btn3_5')
const btn3_6 = document.getElementById('btn3_6')

btn3Correct.addEventListener("click", function() {
  correctSound.play()
  btn3Correct.style.backgroundColor = "lime"
  btn3Correct.style.color = "yellow"
  word3_1.innerText = "They"
  word3_2.innerText = "Their"
  word3_1.style.color = "darkorange"
  word3_2.style.color = "darkorange"
  swipe3.style.visibility = "visible"
  btn3Correct.disabled = "true"
  instruction3.style.visibility = "hidden"
  })
  
  btn3_1.addEventListener('click', function() {
  wrongSound.play()
  btn3_1.style.backgroundColor = 'red'
  word3_1.style.color = "red"
  word3_2.style.color = "red"
  btn3_1.disabled = "true"
  })
  
  btn3_2.addEventListener('click', function() {
    wrongSound.play()
    btn3_2.style.backgroundColor = 'red'
    word3_1.style.color = "red"
    word3_2.style.color = "red"
    btn3_2.disabled = "true"
    })
  
    btn3_3.addEventListener('click', function() {
      wrongSound.play()
      btn3_3.style.backgroundColor = 'red'
      word3_1.style.color = "red"
      word3_2.style.color = "red"
      btn3_3.disabled = "true"
      })
  
      btn3_4.addEventListener('click', function() {
        wrongSound.play()
        btn3_4.style.backgroundColor = 'red'
        word4_1.style.color = "red"
        word4_2.style.color = "red"
        btn3_4.disabled = "true"
        })
  
        btn3_5.addEventListener('click', function() {
          wrongSound.play()
          btn3_5.style.backgroundColor = 'red'
          word5_1.style.color = "red"
          word5_2.style.color = "red"
          btn3_5.disabled = "true"
          })
  
          btn3_6.addEventListener('click', function() {
            wrongSound.play()
            btn3_6.style.backgroundColor = 'red'
            word6_1.style.color = "red"
            word6_2.style.color = "red"
            btn3_6.disabled = "true"
            })

//The Teacher

const btn4Correct = document.getElementById('btn4Correct')

const btn4_1 = document.getElementById('btn4_1')
const btn4_2 = document.getElementById('btn4_2')
const btn4_3 = document.getElementById('btn4_3')
const btn4_4 = document.getElementById('btn4_4')
const btn4_5 = document.getElementById('btn4_5')
const btn4_6 = document.getElementById('btn4_6')

btn4Correct.addEventListener("click", function() {
  correctSound.play()
  btn4Correct.style.backgroundColor = "lime"
  btn4Correct.style.color = "yellow"
  word4_1.innerText = "I"
  word4_2.innerText = "My"
  word4_1.style.color = "darkorange"
  word4_2.style.color = "darkorange"
  swipe4.style.visibility = "visible"
  btn4Correct.disabled = "true"
  instruction4.style.visibility = "hidden"
  })

  btn4_1.addEventListener('click', function() {
    wrongSound.play()
    btn4_1.style.backgroundColor = 'red'
    word4_1.style.color = "red"
    word4_2.style.color = "red"
    btn4_1.disabled = "true"
    })
  
  btn4_2.addEventListener('click', function() {
  wrongSound.play()
  btn4_2.style.backgroundColor = 'red'
  word4_1.style.color = "red"
  word4_2.style.color = "red"
  btn4_2.disabled = "true"
  })
  
  btn4_3.addEventListener('click', function() {
    wrongSound.play()
    btn4_3.style.backgroundColor = 'red'
    word4_1.style.color = "red"
    word4_2.style.color = "red"
    btn4_3.disabled = "true"
    })
  
    btn4_4.addEventListener('click', function() {
      wrongSound.play()
      btn4_4.style.backgroundColor = 'red'
      word4_1.style.color = "red"
      word4_2.style.color = "red"
      btn4_4.disabled = "true"
      })
  
        btn4_5.addEventListener('click', function() {
          wrongSound.play()
          btn4_5.style.backgroundColor = 'red'
          word4_1.style.color = "red"
          word4_2.style.color = "red"
          btn4_5.disabled = "true"
          })
  
          btn4_6.addEventListener('click', function() {
            wrongSound.play()
            btn4_6.style.backgroundColor = 'red'
            word4_1.style.color = "red"
            word4_2.style.color = "red"
            btn4_6.disabled = "true"
            })

//Me and my friends

const btn5Correct = document.getElementById('btn5Correct')

const btn5_1 = document.getElementById('btn5_1')
const btn5_2 = document.getElementById('btn5_2')
const btn5_3 = document.getElementById('btn5_3')
const btn5_4 = document.getElementById('btn5_4')
const btn5_5 = document.getElementById('btn5_5')
const btn5_6 = document.getElementById('btn5_6')

btn5Correct.addEventListener("click", function() {
  correctSound.play()
  btn5Correct.style.backgroundColor = "lime"
  btn5Correct.style.color = "yellow"
  word5_1.innerText = "We"
  word5_2.innerText = "our"
  word5_1.style.color = "darkorange"
  word5_2.style.color = "darkorange"
  swipe5.style.visibility = "visible"
  btn5Correct.disabled = "true"
  instruction5.style.visibility = "hidden"
  })

  btn5_1.addEventListener('click', function() {
    wrongSound.play()
    btn5_1.style.backgroundColor = 'red'
    word5_1.style.color = "red"
    word5_2.style.color = "red"
    btn5_1.disabled = "true"
    })
  
  btn5_2.addEventListener('click', function() {
  wrongSound.play()
  btn5_2.style.backgroundColor = 'red'
  word5_1.style.color = "red"
  word5_2.style.color = "red"
  btn5_2.disabled = "true"
  })
  
  btn5_3.addEventListener('click', function() {
    wrongSound.play()
    btn5_3.style.backgroundColor = 'red'
    word5_1.style.color = "red"
    word5_2.style.color = "red"
    btn5_3.disabled = "true"
    })
  
    btn5_4.addEventListener('click', function() {
      wrongSound.play()
      btn5_4.style.backgroundColor = 'red'
      word5_1.style.color = "red"
      word5_2.style.color = "red"
      btn5_4.disabled = "true"
      })
  
        btn5_5.addEventListener('click', function() {
          wrongSound.play()
          btn5_5.style.backgroundColor = 'red'
          word5_1.style.color = "red"
          word5_2.style.color = "red"
          btn5_5.disabled = "true"
          })
  
          btn5_6.addEventListener('click', function() {
            wrongSound.play()
            btn5_6.style.backgroundColor = 'red'
            word5_1.style.color = "red"
            word5_2.style.color = "red"
            btn5_6.disabled = "true"
            })

//Dear student

const btn6Correct = document.getElementById('btn6Correct')

const btn6_1 = document.getElementById('btn6_1')
const btn6_2 = document.getElementById('btn6_2')
const btn6_3 = document.getElementById('btn6_3')
const btn6_4 = document.getElementById('btn6_4')
const btn6_5 = document.getElementById('btn6_5')
const btn6_6 = document.getElementById('btn6_6')

btn6Correct.addEventListener("click", function() {
  correctSound.play()
  btn6Correct.style.backgroundColor = "lime"
  btn6Correct.style.color = "yellow"
  word6_1.innerText = "You"
  word6_2.innerText = "Your"
  word6_1.style.color = "darkorange"
  word6_2.style.color = "darkorange"
  swipe6.style.visibility = "visible"
  btn6Correct.disabled = "true"
  instruction6.style.visibility = "hidden"
  })

  btn6_1.addEventListener('click', function() {
    wrongSound.play()
    btn6_1.style.backgroundColor = 'red'
    word6_1.style.color = "red"
    word6_2.style.color = "red"
    btn6_1.disabled = "true"
    })
  
  btn6_2.addEventListener('click', function() {
  wrongSound.play()
  btn6_2.style.backgroundColor = 'red'
  word6_1.style.color = "red"
  word6_2.style.color = "red"
  btn6_2.disabled = "true"
  })
  
  btn6_3.addEventListener('click', function() {
    wrongSound.play()
    btn6_3.style.backgroundColor = 'red'
    word6_1.style.color = "red"
    word6_2.style.color = "red"
    btn6_3.disabled = "true"
    })
  
    btn6_4.addEventListener('click', function() {
      wrongSound.play()
      btn6_4.style.backgroundColor = 'red'
      word6_1.style.color = "red"
      word6_2.style.color = "red"
      btn6_4.disabled = "true"
      })
  
        btn6_5.addEventListener('click', function() {
          wrongSound.play()
          btn6_5.style.backgroundColor = 'red'
          word6_1.style.color = "red"
          word6_2.style.color = "red"
          btn6_5.disabled = "true"
          })
  
          btn6_6.addEventListener('click', function() {
            wrongSound.play()
            btn6_6.style.backgroundColor = 'red'
            word6_1.style.color = "red"
            word6_2.style.color = "red"
            btn6_6.disabled = "true"
            })

//sunset

const btn7Correct = document.getElementById('btn7Correct')

const btn7_1 = document.getElementById('btn7_1')
const btn7_2 = document.getElementById('btn7_2')
const btn7_3 = document.getElementById('btn7_3')
const btn7_4 = document.getElementById('btn7_4')
const btn7_5 = document.getElementById('btn7_5')
const btn7_6 = document.getElementById('btn7_6')

btn7Correct.addEventListener("click", function() {
  correctSound.play()
  btn7Correct.style.backgroundColor = "lime"
  btn7Correct.style.color = "yellow"
  word7_1.innerText = "It"
  word7_2.innerText = "Its"
  word7_1.style.color = "darkorange"
  word7_2.style.color = "darkorange"
  btn7Correct.disabled = "true"
  })

  btn7_1.addEventListener('click', function() {
    wrongSound.play()
    btn7_1.style.backgroundColor = 'red'
    word7_1.style.color = "red"
    word7_2.style.color = "red"
    btn7_1.disabled = "true"
    })
  
  btn7_2.addEventListener('click', function() {
  wrongSound.play()
  btn7_2.style.backgroundColor = 'red'
  word7_1.style.color = "red"
  word7_2.style.color = "red"
  btn7_2.disabled = "true"
  })
  
  btn7_3.addEventListener('click', function() {
    wrongSound.play()
    btn7_3.style.backgroundColor = 'red'
    word7_1.style.color = "red"
    word7_2.style.color = "red"
    btn7_3.disabled = "true"
    })
  
    btn7_4.addEventListener('click', function() {
      wrongSound.play()
      btn7_4.style.backgroundColor = 'red'
      word7_1.style.color = "red"
      word7_2.style.color = "red"
      btn7_4.disabled = "true"
      })
  
        btn7_5.addEventListener('click', function() {
          wrongSound.play()
          btn7_5.style.backgroundColor = 'red'
          word7_1.style.color = "red"
          word7_2.style.color = "red"
          btn7_5.disabled = "true"
          })
  
          btn7_6.addEventListener('click', function() {
            wrongSound.play()
            btn7_6.style.backgroundColor = 'red'
            word7_1.style.color = "red"
            word7_2.style.color = "red"
            btn7_6.disabled = "true"
            })

         



