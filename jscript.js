var dados = {
 "nome":"Igor Túllio de Santana",
 "telefone":"(61)98405-8320",
 "email":"igortullio@hotmail.com",
 "dia":06,
 "mes":02,
 "ano":1997
};

function initMap() {
 var uluru = {lat: -15.841169, lng: -48.046727};
 var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 19,
  center: uluru
 });
 var marker = new google.maps.Marker({
  position: uluru,
  map: map
 });
}
      
function calIdade(){
 hoje= new Date();
 dia_hoje=hoje.getDate();
 mes_hoje=hoje.getMonth()+1;
 ano_hoje=hoje.getFullYear();

 diferenca_dia = dia_hoje - dados.dia;
 diferenca_mes = mes_hoje - dados.mes;
 diferenca_ano = ano_hoje - dados.ano;
     
 if(diferenca_mes>0){
  if(dia_hoje<dados.dia){
   diferenca_mes--;
  }
 } else if (diferenca_mes<0){
  diferenca_ano--;
  diferenca_mes=12+diferenca_mes;
  if(dia_hoje<dados.dia){
   diferenca_mes--;
  }
 } else {
  if(dia_hoje<dados.dia){
   diferenca_mes=11;
   diferenca_ano--;
  }
 }
       
 if(diferenca_dia<0){
  diferenca_dia=30+diferenca_dia;
 }
        
 document.write("Anos: "+diferenca_ano +", Meses: "+diferenca_mes +" e Dias: "+diferenca_dia)
}
