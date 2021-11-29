// INICIALIZA A BIBLIOTECA DE ANIMAÇÃO
  AOS.init();


// PREENCHE O SELECT COM O API DO IBGE
  (function(){
    var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    var select = document.getElementById('estado');
   

    /* consulta a API com o método fetch e 
    com um laço de repetição incrementa as tags option */
    fetch(url).then(response => response.json()).then(json => {
    var options  = '<option>Selecione</option>';

      //DESAFIO: inserir abaixo desta linha um código para ordenar em ordem alfabética um objeto json

      // laço de repetição
      for (let index = 0; index < json.length; index++){
        options += '<option>'+ json[index].nome+'</option>';
        
      }
      select.innerHTML = options;
    }).catch(erro => console.log (erro));

  
  })();
