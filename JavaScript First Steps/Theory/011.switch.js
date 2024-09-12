const trafficLight = "yellow";

switch (trafficLight) {
  case "green":
    console.log("GO");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "red":
    console.log("STOP");
    break;
  default:
    console.log("Traffic light is broken");
}


const animal = 'cow';

switch (animal) { 
    case 'cow':
        console.log('This is cow');
    case 'cat':
    case 'dog':
    case 'pig':
        console.log('This animal is NOT extinct');
        break;
    case 'Diplodok':
    case 'Pterodaktyl':
        console.log('This animal is extinct');
    default:
        console.log('Are U sure is it animal?');
}

// Bez instrukcji break, kod będzie wykonywał się dalej mimo spełnienia
// warunku, aż do napotkania pierwszego breaka.
