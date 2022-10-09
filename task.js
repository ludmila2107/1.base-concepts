function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  // код для задачи №1 писать здесь
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) { 
    arr = [];
    console.log(arr);

  } else if (discriminant === 0) { 
    x1 = -b / (2 * a);
    console.log(x1);
    arr.push(x1);
    
  } else if (discriminant > 0) { 
    x1 = [(-b + Math.sqrt(discriminant) )/(2*a)];
    x2 = [(-b - Math.sqrt(discriminant) )/(2*a)];
    console.log(x1, x2);
    arr.push(x1);
    arr.push(x2);
  }
  
  return arr; // array
}
solveEquation(1, 5, 1)