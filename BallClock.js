
function ballClock(num){
  let origin = [];
  
  for(let i=1; i<=num; i++){
    origin.push(`(${i})`);
  }

  const min1 = [];
  const min5 = [];
  const hr = [];
  let count = 0;
  let run = true;
  const queue = [...origin];
  
  const rollBack = (arr) => {
    while(arr.length > 0){
      queue.push(arr.pop())
    }
  }

  const isEqual = (arr1, arr2) => {
    for(let i=0; i<arr1.length; i++){
      if(arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  
  while(run){
    let ball = queue.shift();
    min1.push(ball);
    
    // moves balls from m1 back to queue in reverse order
    // adds 5th ball to m5
    if(min1.length === 5) {
      min5.push(min1.pop());
      // console.log("min1", min1);
      rollBack(min1.splice(0, 4));
      // console.log("queue", queue, min5);
      // run = false;
    }

    // moves m5 back to queue in reverse
    // add 12th ball to hr
    if(min5.length === 12){
      hr.push(min5.pop());
      // console.log("min5", min5);
      rollBack(min5.splice(0, 11));
      // console.log("queue", queue);
      // run = false;
    }

    // moves hr back to queue in reverse order
    if(hr.length === 12){
      // console.log(hr);
      rollBack(hr.splice(0, 11));
      queue.push(hr.pop())
      // console.log(queue);
      count += .5;
      // run = false;
    }

    run = !isEqual(origin, queue);
  }
  
  return count;
}

console.log(ballClock(45));