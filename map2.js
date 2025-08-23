
let setFruits=new Map()

  setFruits.set(1,'apple')
  setFruits.set(2,'gili')
  setFruits.set(3,'bobol')
  setFruits.set(4,'voloib')

  console.log(setFruits);
  console.log(setFruits.get(1));

  
  for (const [key,value] of setFruits) {
    console.log(key);
    console.log(value);
    
  }


  let fruitsObj= Object.fromEntries(setFruits)
  console.log(fruitsObj,'obj');

  

  let books={
    bengali:'Amar book',
    english:'English for today',
    math:"General Math"
  }


  console.log(Object.entries(books));
  
  let booksMap=new Map(Object.entries(books))
  console.log(booksMap,'bkm');
  
