

//Jack Johnson
const btn1Correct = document.getElementById('btn1Correct')

const btn1_1 = document.getElementById('btn1_1')
const btn1_2 = document.getElementById('btn1_2')
const btn1_3 = document.getElementById('btn1_3')
const btn1_4 = document.getElementById('btn1_4')
const btn1_5 = document.getElementById('btn1_5')
const btn1_6 = document.getElementById('btn1_6')


const word1_1 = document.getElementById('word1_1')
const word1_2 = document.getElementById('word1_2')


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

