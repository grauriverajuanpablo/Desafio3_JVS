var colors = {
    'a': 'pink',
    's': 'orange',
    'd': 'skyblue',
    'q': 'purple',
    'w': 'gray',
    'e': 'brown'
};
document.getElementById('blue').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.getElementById('red').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.getElementById('green').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.getElementById('yellow').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.addEventListener('keydown', function(event) {
    var color = colors[event.key];
    if (color) {
        if (event.key === 'a' || event.key === 's' || event.key === 'd') {
            document.getElementById('key').style.backgroundColor = color;
        } else {
            var newDiv = document.createElement('div');
            newDiv.style.width = '200px';
            newDiv.style.height = '200px';
            newDiv.style.backgroundColor = color;
            document.body.appendChild(newDiv);
        }
    }
});