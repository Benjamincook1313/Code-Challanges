
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
  
  // rolls balls back into the queue in reverse order
  const rollBack = (arr) => {
    while(arr.length > 0){
      queue.push(arr.pop())
    }
  }

  // checks if arrays are back in the same order
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
      rollBack(min1.splice(0, 4));
    }

    // moves m5 back to queue in reverse
    // add 12th ball to hr
    if(min5.length === 12){
      hr.push(min5.pop());
      rollBack(min5.splice(0, 11));
    }

    // moves hr back to queue in reverse order
    if(hr.length === 12){
      rollBack(hr.splice(0, 11));
      queue.push(hr.pop())
      count += .5;
    }

    run = !isEqual(origin, queue);
  }
  
  return count;
}

console.log(ballClock(45));