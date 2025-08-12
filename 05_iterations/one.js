//for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}
for (let i = 0; i < 10; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 0; j <= i; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
//Break and Continue
for (let i = 0; i < 20; i++) {
    if (i === 5) {
        console.log("Breaking at 5");
        break; // Exits the loop when i is 5
    }
    console.log(i);
}
for (let i = 0; i < 20; i++) {
    if (i === 5) {
        console.log("Skipping 5");
        continue; // Skips the current iteration when i is 5
    }
    console.log(i);
}