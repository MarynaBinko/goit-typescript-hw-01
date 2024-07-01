// type User = {
//       name: string;
//       surname: string;
//       email: string;
//       password: string;
//     }
    
//     function createOrUpdateUser(initialValues: User) {
//       // Оновлення користувача
//     }
    
//     createOrUpdateUser({ 
//       email: 'user@mail.com', 
//       password: 'password123' 
//     });
    



type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(updateValues: Partial<User>) {

    const updatedUser: User = {
      name: updateValues.name ?? 'John', 
      surname: updateValues.surname ?? 'Doe', 
      email: updateValues.email,
      password: updateValues.password
    };
  
    console.log('Updated User:', updatedUser);
  }
  
 
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });
  