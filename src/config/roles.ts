const allRoles = {
  user: ['getUsers', 'manageUsers', 'getPosts', 'managePosts', 'getComments', 'manageComments'],
  admin: ['getUsers', 'manageUsers', 'getPosts', 'managePosts', 'getComments', 'manageComments'],
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
