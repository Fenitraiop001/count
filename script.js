var s = 2.5;
var min = 0
var max = 1000

alert('coucoup')

var number = document.getElementById('count')
var letter = document.getElementById('letter')

n = 0

var u = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var d = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var c = ['hundred']

function anim() {
  n = randint(min, max)
  number.innerHTML = n

  if(n < 10) {
    if(n == 0) {
      letter.innerHTML = 0
    } else {
      letter.innerHTML = u[n]
    }
  } else if(n < 100) {
    if(n < 20) {
      letter.innerHTML = d[n-10]
    } else {
    letter.innerHTML = d[(n-n%10)/10+8] + ' ' + u[n%10]
    }
  } else if(n < 1000) {
    letter.innerHTML = u[(n-n%100)/100] + ' ' + c[0] + ' '
    n = n%100
    if(n < 10) {
      letter.innerHTML += u[n]
    } else if(n < 20) {
      letter.innerHTML += d[n-10]
    } else {
      letter.innerHTML += d[(n-n%10)/10+8] + ' ' + u[n%10]
    }
  }

  setTimeout(anim, s*1000)
}

anim()

function randint(min, max) {
  return parseInt(Math.random() * (max - min) + min)
}
