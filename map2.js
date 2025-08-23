
let setFruits=new Map()

  setFruits.set(1,'apple')
  setFruits.set(2,'gili')
  setFruits.set(3,'bobol')
  setFruits.set(4,'voloib')

  console.log(setFruits.values(2));
  console.log(setFruits.get(1));

  
  for (const [key,value] of setFruits) {
    console.log(key);
    console.log(value);
    
  }