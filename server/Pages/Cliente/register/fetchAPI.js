const createUserFromAPI = async (user) => {
  const dataFetchAPI = await fetch('http://localhost:3100/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const getDataFromFetchAPI = await dataFetchAPI.json();
  const userCreated = await getDataFromFetchAPI;
  return userCreated;
}

const apiFetchUser = async () => {
  const apiResult = await fetch('http://localhost:3100/api/v1/users');

  const getDataFromFetchAPI = await apiResult.json();
  return getDataFromFetchAPI;
}

export{
  apiFetchUser,
  createUserFromAPI
}