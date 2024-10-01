function solution(A,X,Y,Z) {
  const gasNeeded = A.reduce((a,c) => a+c);
  const gasAvailable = X+Y+Z;
  
  if(gasNeeded > gasAvailable) return -1;

  const q = [...A];
  const pumps = [X,Y,Z];

  const secToWait = [0,0,0];
  const lastCarInStall = [0,0,0];
  
    while(q.length > 0){
      const car = q.shift()
      let minGas = Infinity;
      let stall = null;
      
      pumps.forEach((pump, i) => {
        if(car <= pump && pump <= minGas){
          minGas = pump;
          stall = i;
        }
      });
      
      if(minGas === Infinity && stall === null) return -1;
      pumps[stall] -= car;
      secToWait[stall] += car;
      lastCarInStall[stall] = car;
      
      minGas = Infinity;
      stall = null;
    }
  
  return Math.max(...secToWait.map((stall, i) => stall - lastCarInStall[i]))
}

console.log(solution([2,8,4,3,2],7,11,3)) // 8