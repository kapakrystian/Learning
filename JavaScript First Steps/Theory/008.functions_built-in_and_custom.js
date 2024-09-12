function greetings(city = "Warsaw", country = "Poland") {

  return `Greetings from ${city} in ${country} :)`;
}

console.log(greetings("Warsaw", "Poland"));


function add(num1, num2) { 
    const sum = num1 + num2;
    return sum;
    console.log('After return code.'); //kod po instrukcji return nie zostaje wykonany
}

console.log(add(3, 3))
