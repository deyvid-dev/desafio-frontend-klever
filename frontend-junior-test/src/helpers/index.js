function getLocalStorage(key) {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function saveToken(tokenData) {
  const tokenList = 'tokenList';
  let result = [];
  if (getLocalStorage(tokenList)) {
    result = getLocalStorage(tokenList);
  }
  if (verifyToken(tokenData.Token, result)) {
    return alert("Token já existe !");
  }
  result.push(tokenData)
  setLocalStorage(tokenList, result);
}

function removeToken(tokenData) {
  const tokenList = 'tokenList';
  let result = [];
  if (getLocalStorage(tokenList)) {
    result = getLocalStorage(tokenList);
  }
  if (verifyToken(tokenData, result)) {
    if (window.confirm("Gostaria de remover o Token?") === true) {
      const removeIndex = result.findIndex( item => item.Token === tokenData );
      result.splice( removeIndex, 1 );
      localStorage.setItem('tokenList', JSON.stringify(result));
    } else {
      console.log("não deu bom");
    }
  };
}
function verifyToken(tokenData, dataBase) {
  return dataBase.some(e => e.Token === tokenData);
}

export { saveToken, removeToken };
