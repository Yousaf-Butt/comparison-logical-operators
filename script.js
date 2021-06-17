const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 100;

if (age >= 18 && isFemale) {
    console.log("Je mag naar binnen.");
} else {
    console.log("Jij komt er niet in.");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Geen korting voor jou helaas.");
}

if (name === "Bram" || name === "Sarah") {
    console.log("Lucky you. Vanwege je naam krijg je een gratis biertje!");
} else {
    console.log("Je krijgt helaas geen gratis biertje.");
}

if (driverStatus === "bob") {
    console.log("Jij bent de Bob dus je mag rijden.");
} else {
    console.log("Je mag vanavond niet meer achter het stuur zitten.");
}

if (totalAmount >= 100) {
    console.log("Gratis champagne!");
} else if (totalAmount >= 50) {
    console.log("Gratis nachos!");
} else if (totalAmount >= 25) {
    console.log("Gratis bitterballen!");
}

