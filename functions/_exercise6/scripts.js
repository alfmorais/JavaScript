function verifyTypeOfData(value) {
    if (typeof value === "string") {
        console.log("STRING");
    } else if (typeof value === "number") {
        console.log("NUMBER");
    } else if (typeof value === undefined) {
        console.log("UNDEFINED");
    } else {
        console.log("BOOLEAN");
    }
}