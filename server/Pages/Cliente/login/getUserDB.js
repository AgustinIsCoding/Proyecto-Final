const apiFetchUser = async () => {
  const apiResult = await fetch('http://localhost:3100/api/v1/users');

  const getDataFromFetchAPI = await apiResult.json();
  return getDataFromFetchAPI;
}

//TODO: Update
const datosValidos = async (passwordDB, passwordInput) => {
  const hash = await compare(passwordInput, passwordDB);
  return datosValidos;
}

//TODO: add
const apiFetchOneUser = async (id) => {
  const apiResult = await fetch(`http://localhost:3100/api/v1/users/${id}`);

  const getDataFromFetchAPI = await apiResult.json();

  return getDataFromFetchAPI;
}

export {
  apiFetchUser,
  datosValidos,
  apiFetchOneUser
}