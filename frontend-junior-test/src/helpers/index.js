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
    return alert("Token já exite !");
  }
  result.push(tokenData)
  setLocalStorage(tokenList, result);
}

function verifyToken(tokenData, dataBase) {
  return dataBase.some(e => e.Token === tokenData);
}
/* 
1.validar se exite uma lista de Token
2.se não exitir, ele cria 
[{ objetos }]
3.se existir ok
  3.1 pega o que exite e faz a validação
  3.2 salva
*/

export { saveToken };
