// function merge (objA, objB) {
//       return Object.assign(objA, objB);
//     }
    


function merge<T>(objA: T, objB: T): T {
    return Object.assign(objA, objB);
  }
  
 
  const obj1 = { name: 'John' };
  const obj2 = { age: 30 };
  
  const mergedObj = merge(obj1, obj2);
  console.log(mergedObj); 
  
  