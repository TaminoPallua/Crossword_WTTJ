let words = ['flora', 'abbau', 'brand', 'axt']
let letters0 = ['F', 'L', 'O', 'R', 'A']
let letters1 = ['A', 'B', 'B', 'A', 'U']
let letters2 = ['B', 'R', 'A', 'N', 'D']
let letters3 = ['A', 'X', 'T']

function sumbit1() {
    let userInput = document.getElementById('submissionText').value
    if (userInput == words[0]) {
        document.getElementById('a2').innerHTML = letters0[0]
        document.getElementById('b2').innerHTML = letters0[1]
        document.getElementById('c2').innerHTML = letters0[2]
        document.getElementById('d2').innerHTML = letters0[3]
        document.getElementById('e2').innerHTML = letters0[4]
    } else if (userInput == words[1]) {
        document.getElementById('e2').innerHTML = letters1[0];
        document.getElementById('e3').innerHTML = letters1[1];
        document.getElementById('e4').innerHTML = letters1[2];
        document.getElementById('e5').innerHTML = letters1[3];
        document.getElementById('e6').innerHTML = letters1[4];
    } else if (userInput == words[2]) {
        document.getElementById('e4').innerHTML = letters2[0];
        document.getElementById('d4').innerHTML = letters2[1];
        document.getElementById('c4').innerHTML = letters2[2];
        document.getElementById('b4').innerHTML = letters2[3];
        document.getElementById('a4').innerHTML = letters2[4];
    } else if (userInput == words[3]) {
        document.getElementById('e5').innerHTML = letters3[0];
        document.getElementById('f5').innerHTML = letters3[1];
        document.getElementById('g5').innerHTML = letters3[2];
    }
    
}