const allRoles = {
  user: ['getUsers', 'manageUsers', 'getPosts', 'managePosts', 'getComments', 'manageComments'],
  admin: ['getUsers', 'manageUsers', 'getPosts', 'managePosts', 'getComments', 'manageComments'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

export { roles, roleRights };
