// type AllType = {
//       name: string;
//       position: number;
//       color: string;
//       weight: number
//     }
    
//     function compare (top, bottom): AllType {
//       return {
//         name: top.name,
//         color: top.color,
//         position: bottom.position,
//         weight: bottom.weight,
//       }
//     }
    



// type AllType = {
//     name: string;
//     position: number;
//     color: string;
//     weight: number;
//   };
  
  
//   function compare<T extends AllType, U extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick<U, keyof AllType>): AllType {
//     return {
//       name: top.name,
//       color: top.color,
//       position: bottom.position,
//       weight: bottom.weight,
//     };
//   }
  
 
//   const topObj = {
//     name: 'Top Object',
//     position: 1,
//     color: 'red',
//     weight: 10,
//   };
  
//   const bottomObj = {
//     name: 'Bottom Object',
//     position: 2,
//     color: 'blue',
//     weight: 15,
//   };
  
//   const result = compare(topObj, bottomObj);
//   console.log(result); 
  