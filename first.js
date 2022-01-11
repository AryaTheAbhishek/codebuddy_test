const getUser = async (users) => {
  const new_users = [];

  users.forEach((element, index) => {
    const newUser = element;
    newUser.id = index;
    new_users.push(newUser);
  });
  return new_users;
};
