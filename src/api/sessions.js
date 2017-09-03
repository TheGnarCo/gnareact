export default () => {
  return {
    create: ({ email, password }) => {
      return Promise.resolve({ email, password, jwt: 'jwt' });
    },
    destroy: () => Promise.resolve({}),
  };
};
