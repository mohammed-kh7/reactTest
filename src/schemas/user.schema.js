export const validateUserSchema = (user) => {
  return Boolean(user?.name && user?.email);
};
