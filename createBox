function createBox(m, n) {
  const box = [];
  for(let i=0; i<n; i++) box.push([]);

  box.forEach((row, i) => {
    let y = i+1;
    let num = 1;
    
    const rowsLeft = n-i;
    const midX = m/2;

    for(let x=0; x<m; x++){
      const colLeft = m-x
      row.push(num);
      if(
        num<y && midX>=num && x<midX && 
        rowsLeft>num && num<midX
      ) num++;
      else if(num>1 && colLeft<=num) num--;
    }
  });
  
  return box
}

console.log(createBox(12,15))