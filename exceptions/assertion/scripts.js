function iterarArray(array) {
    if(array.length == 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        for(let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}