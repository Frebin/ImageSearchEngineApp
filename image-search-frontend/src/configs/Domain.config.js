export const getDomain = () => {
  // const userDetails = JSON.parse(localStorage.getItem('user') as string)
  return {
    common_url: process.env.REACT_APP_BASE_URL,
  };
};
