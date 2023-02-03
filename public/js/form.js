$(document).ready(function () {
  $("#form").submit(function (e) {
    e.preventDefault(); 
    var form = $(this);

    console.log(form.serialize());
    
    $('button').text('Enviando...');
    $('button').prop('disabled', true);

    var formData = new FormData(this);

    $.ajax({
        url: `http://localhost/comfortflex/mail/index.php`,
        type: 'POST',
        data: formData,
        success: function (data) {
          // MOSTRAR O RETORNO
        },
        cache: false,
        contentType: false,
        processData: false
    });

  });

  var element = document.getElementById('telefone');
  var maskOptions = {
    mask: '(00) 0000[0]-0000'
  };
  
  IMask(element, maskOptions);
  
  IMask(document.getElementById('cpf'), {
    mask: '000.000.000-00'
  });
  
  IMask(document.getElementById('cnpj'), {
    mask: '00.000.000/0000-00'
  });
  
  IMask(document.getElementById('cep'), {
    mask: '00000-000'
  });
 
  IMask(document.getElementById('data'), {
    mask: '00/00/0000'
  });
});
