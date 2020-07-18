function reverse(str) {
  var reverseStr = ''
  for(var i = str.length; i >= 0; i--) {
    reverseStr += str[i]
  }
  console.log(reverseStr)
}

reverse('hello');