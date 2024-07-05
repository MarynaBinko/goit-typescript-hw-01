


export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  
  const RoleDescription: Record<UserRole, string> = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
  };
  

  const userRole: UserRole = UserRole.admin;
  console.log(`User role "${userRole}" description:`, RoleDescription[userRole]);
  
