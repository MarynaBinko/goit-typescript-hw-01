
    

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
   const defaultUser: User = {
    name: 'DefaultName',
    surname: 'DefaultSurname',
    email: 'default@mail.com',
    password: 'defaultPassword'
  };

  const updatedUser: User = {
    ...defaultUser,
    ...initialValues
  };

  console.log('Updated User:', updatedUser);
}


createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123'
});

createOrUpdateUser({
  name: 'John',
  surname: 'Doe',
  email: 'john.doe@mail.com',
  password: 'password456'
});





