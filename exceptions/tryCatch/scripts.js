try {
    let c = a + b;
} catch(error) {
    console.log("Algo deu errado: " + error);
} finally {
    console.log("Executou")
}