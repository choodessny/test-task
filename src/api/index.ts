export const getUser = async () => {
  const request = await fetch("https://graphqlzero.almansi.me.");
  return await request.json();
};
