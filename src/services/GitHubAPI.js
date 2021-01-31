import axios from 'axios';

export async function getUsers(since) {
  try {
    const { status, data } = await axios({
      method: 'GET',
      url: `http://localhost:4040/users?since=${since}`,
    });

    return { status, data };
  } catch (err) {
    return { status: 400, data: err };
  }
}

export async function getUser(user) {
  try {
    const { status, data } = await axios({
      method: 'GET',
      url: `http://localhost:4040/users/${user}/details`,
    });

    return { status, data };
  } catch (err) {
    return { status: 400, data: err };
  }
}

export async function getRepoUser(user, pageRepo) {
  try {
    const { status, data } = await axios({
      method: 'GET',
      url: `http://localhost:4040/users/${user}/repos?page=${pageRepo}`,
    });

    return { status, data };
  } catch (err) {
    return { status: 400, data: err };
  }
}

export async function cadastraClienteFacebook(obj) {
  try {
    const { status, data } = await axios({
      method: 'POST',
      url: `http://localhost:4040/cadastrar/facebook`,
      data: obj,
    });

    return { status, data };
  } catch (err) {
    return { status: 400, data: err };
  }
}
