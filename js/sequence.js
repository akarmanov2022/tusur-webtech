function sequence() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * (100 + 100 + 1) - 100);
    }
    console.log(arr);
    var composition = 1;
    for (var i = 0; i < arr.length; i++) {
        composition *= Math.abs(arr[i]);
    }
    console.log(composition);
}

sequence();