
function saveToken(tokenData) {
  let lista = localStorage.getItem('tokenList')
  if (lista === null) {
    localStorage.setItem('tokenList', JSON.stringify([tokenData]));
    return true;
  }
  let listaObjeto = JSON.parse(lista)
  if (listaObjeto.token)
  return false;
}

/* 
1.validar se exite uma lista de Token
2.se existir ok
  2.1 pega o que exite e faz a validação
  2.2 salva
3.se não exitir, ele cria 
[{ objetos }]
*/