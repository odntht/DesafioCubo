const api_key = "e015e672ba95cd9cc7141fd9c7995fd2";
const base_url = "https://api.themoviedb.org/3/";
const img_url = "https://image.tmdb.org/t/p/original/";

var popular = $.getJSON(
  base_url +
  "discover/movie?api_key="
  + api_key,
  function(data, status){
    // console.log(data.results[0]);
    if (status == "success"){
      $(".resultados").show();

      $.each(data.results, function(i, field){
        $("#result" + i).attr("name", field.id);
        $("#poster" + i).attr("src", img_url + field.poster_path);
        $("#score" + i).text(Math.round(field.vote_average * 10)+ "%");
        $("#name" + i).text(field.original_title);
        $("#date" + i).text(field.release_date);
        $("#sinopse" + i).text(field.overview);
      })
    } else {
      alert("Por favor, recarregue a página");
    }
  }
);



$(".detalhe").click(function(){
  $(".resultados").hide();
  var movie = $(this).attr("name");
  $.getJSON(
    base_url +
    "movie/" + movie + "?api_key="
    + api_key,
    function(data, status){
      console.log(data);
      $("#det-title").text(data.original_title);
      $("#det-release").text(data.release_date);
      $("#det-sinopse").text(data.overview);
      $("#det-status").text(data.status);
      $("#det-idioma").text(data.spoken_languages[0].name);
      $("#det-duracao").text(data.runtime + " minutos");
      $("#det-budget").text("$ " + data.budget.toFixed(2));
      $("#det-revenue").text("$ " + data.revenue.toFixed(2));
      var profit = (data.revenue - data.budget);
      $("#det-profit").text("$ " + profit.toFixed(2));
      $("#det-score").text(Math.round(data.vote_average * 10)+"%");





    })
  $(".escolhido").show();


})
