$(function () {
var data = [  
   {
            titulo: 'Linguagem C',
            codigo:'0000001',
            usuario: 'brunogrupo@gmail.com',
            descricao: 'Curso dinâmico de linguagem C.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000001.html',
            categoria: 'Tecnologia',
            preco: 'R$ 99,00'
        }, {
            titulo: 'Linguagem C++',
            codigo:'0000002',
            usuario: 'bruno@gmail.com',
            descricao: 'Curso dinâmico de linguagem C++.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000002.html',
            categoria: 'Tecnologia',
            preco: 'R$ 10,00'
        }, {
            titulo: 'Linguagem PHP',
            codigo:'0000003',
            usuario: 'grupo@gmail.com',
            descricao: 'Curso dinâmico de linguagem PHP.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000003.html',
            categoria: 'Tecnologia',
            preco: 'R$ 69,00'
        }, {
            titulo: 'Linguagem HTML',
            codigo:'0000004',
            usuario: 'brunogrupo@gmail.com',
            descricao: 'Curso dinâmico de linguagem HTML.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000004.html',
            categoria: 'Tecnologia',
            preco: 'R$ 19,90'
        }, {
            titulo: 'Linguagem Java',
            codigo:'0000005',
            usuario: 'bruno@gmail.com',
            descricao: 'Curso dinâmico de linguagem Java.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000005.html',
            categoria: 'Tecnologia',
            preco: 'R$ 299,00'
        }, {
            titulo: 'Linguagem Python',
            codigo:'0000006',
            usuario: 'grupo@gmail.com',
            descricao: 'Curso dinâmico de linguagem Python.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000006.html',
            categoria: 'Tecnologia',
            preco: 'R$ 13,00'
        },{
            titulo: 'Tudo sobre C',
            codigo:'00000021',
            usuario: 'brunogrupo@gmail.com',
            descricao: 'Curso dinâmico de C.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000021.html',
            categoria: 'Tecnologia',
            preco: 'R$ 89,00'
        }, {
            titulo: 'C++ Avançado',
            codigo:'00000022',
            usuario: 'bruno@gmail.com',
            descricao: 'Curso dinâmico de C++.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000022.html',
            categoria: 'Tecnologia',
            preco: 'R$ 60,00'
        }, {
            titulo: 'PHP Descomplicado',
            codigo:'00000023',
            usuario: 'grupo@gmail.com',
            descricao: 'Curso dinâmico de PHP.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000023.html',
            categoria: 'Tecnologia',
            preco: 'R$ 49,00'
        }, {
            titulo: 'HTML mastigado',
            codigo:'00000024',
            usuario: 'brunogrupo@gmail.com',
            descricao: 'Curso dinâmico de HTML.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000024.html',
            categoria: 'Tecnologia',
            preco: 'R$ 39,90'
        }, {
            titulo: 'Java super explicado',
            codigo:'00000025',
            usuario: 'bruno@gmail.com',
            descricao: 'Curso dinâmico de Java.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000025.html',
            categoria: 'Tecnologia',
            preco: 'R$ 99,00'
        }, {
            titulo: 'Python - O futuro',
            codigo:'00000026',
            usuario: 'grupo@gmail.com',
            descricao: 'Curso dinâmico de Python.',
            imagem: 'http://lorempixel.com/200/120/food/1',
            link: 'http://www.nota10.com.br/0000026.html',
            categoria: 'Tecnologia',
            preco: 'R$ 23,00'
        }
]

output = "";
$.each(data, function(key, val){
  output += "<div class='values'>";
    output += '<h2><a href ="'+val.link+'">' + val.titulo + '</a></h2>';
    output += '<h2 class="value-preco">' + val.preco + '</h2>';
    output += '<p class="value-descricao">' + val.descricao + '</p>'
  output += "</div>";
});

$('#content').html(output);

/* SEEKER FUNCTION */
 if (!RegExp.escape) {
   RegExp.escape = function (s) {
     return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
   };
 }
 
 jQuery(function(){
  var $rows = $('.values');
  $('#seeker').keyup(function () {
    var regex =  new RegExp(RegExp.escape($.trim(this.value).replace(/\s+/g, ' ')), 'i')
    $rows.hide().filter(function () {
      var text = $(this).children(".value-descricao").text().replace(/\s+/g, ' ');
      return regex.test(text)
    }).show();
  });
});
});