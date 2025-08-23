const obj={
    a:'abid',
    b:'shofique'
}

 const rs= Object.entries(obj)
 console.log(rs);
 

 for (const [key,value] of rs) {
    console.log(value);
    
 }