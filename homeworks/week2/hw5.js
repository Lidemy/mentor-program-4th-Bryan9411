function join(arr, concatStr) {
    if(arr.length === 0) {
        return ''
    }
    var answer = arr[0]
    for(var i = 1; i < arr.length;  i++) {
        answer += concatStr + arr[i]
    }
    return answer
}

function repeat(str, times) {
    var answer = ''
    for(var i = 1; i <= times; i++) {
        answer += str
    }
    return answer
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
