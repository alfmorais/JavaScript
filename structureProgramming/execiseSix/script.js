let hasLicense = true;
let hasEighteen = false;

if (hasEighteen && !hasLicense) {
    console.log("Você pode tirar carta.");
} else if (hasEighteen && hasLicense) {
    console.log("Você está habilitado.");
} else {
    console.log("Você não pode tirar carta.");
}