
function saveToken(tokenData) {
  localStorage.setItem('tokenList', JSON.stringify([tokenData]));
  let lista = localStorage.getItem('tokenList')
  if (lista === null) {
    localStorage.setItem('tokenList', JSON.stringify([tokenData]));
    return true;
  }
  let listaObjeto = lista;
  let objeto = JSON.parse(listaObjeto)
  console.log(objeto[0]);
  if (objeto[0].Token === tokenData.Token) {
    alert('Token já existe !')
  }
  return localStorage.setItem('tokenList', JSON.stringify([tokenData]));
}

/* 
1.validar se exite uma lista de Token
2.se existir ok
  2.1 pega o que exite e faz a validação
  2.2 salva
3.se não exitir, ele cria 
[{ objetos }]
*/

export { saveToken };
