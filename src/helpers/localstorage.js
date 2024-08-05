function getStorage(key, err) {
  const storage = window.localStorage.getItem(key);

  if (!storage) {
    return err;
  }

  return JSON.parse(storage);
}

function setStorage(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

function updateStorage(key, data) {
  const storage = JSON.parse(window.localStorage.getItem(key));

  if (!storage) {
    return;
  }

  const response = storage.map((s) => {
    if (data.id == s.id) {
      return data;
    }

    return s;
  });

  return window.setStorage(key, JSON.stringify(response));
}

export default {
  getStorage,
  setStorage,
  updateStorage,
};
