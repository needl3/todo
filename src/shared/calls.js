import urls from "./urls";

const updateCall = (item, token) => {
  if (token === undefined) return -1;
  fetch(urls.base + urls.todo, {
    method: "PATCH",
    headers: {
      authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((e) => {
      if (e.status !== 200) throw e;
      return e;
    })
    .catch((e) => e);
};
const deleteCall = (item, token) => {
  if (token === undefined) return -1;
  fetch(urls.base + urls.todo, {
    method: "DELETE",
    headers: {
      authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id: item.id}),
  })
    .then((e) => {
      if (e.status !== 200) throw e;
      return e;
    })
    .catch((e) => e);
};
const getCall = async (token) => {
  if (token === undefined) return -1;
  return await fetch(urls.base + urls.todo, {
    method: "GET",
    headers: {
      authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((e) => {
      if (e.status !== 200) throw e;
      return e;
    })
};
const addCall = (item, token) => {
  if (token === undefined) return -1;
  fetch(urls.base + urls.todo, {
    method: "POST",
    headers: {
      authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((e) => {
      if (e.status !== 200) throw e;
      return e;
    })
    .catch((e) => e);
};
const logoutCall= (token) => {
  fetch(urls.base + urls.logout, {
    method: "DELETE",
    headers: {
      authorization: `bearer ${token}`,
    }
  })
}
const userCall = async (token) => {
  return await fetch(urls.base+urls.user, {
    method: "GET",
    headers: {
      authorization: `bearer ${token}`
    }
  })
}
export { updateCall, getCall, deleteCall, addCall, logoutCall, userCall };
