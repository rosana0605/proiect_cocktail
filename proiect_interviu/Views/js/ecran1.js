function load_cocktails()
{
	$.ajax({
        type: "GET",
        url: "https://www.thecocktaildb.com/api.php",
        dataType : "json",
        success: function(  )
        {

        }

	});
}
function get_cocktails()
{
	$.ajax({
        type: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?",
        dataType : "json",
        data : {s : $('#search-input').val()
        },
        success: function( data )
        {
                console.log(data);
                 var content = $('#cocktail-list');
                 content.empty();
                 drinks = data.drinks;
                if(drinks != null){
                  let lgi = '<ol class="list-group">';
                 for( i=0;  i < drinks.length; ++i )
                 {
                  console.log(drinks[i]);
                  let name = drinks[i].strDrink;
                  let id = drinks[i].idDrink;
                  let alcoholic = drinks[i].strAlcoholic;
                  if(($('#alcoholic').is(":checked") && alcoholic=="Alcoholic") || ($('#nonalcoholic').is(":checked") && alcoholic=="Non alcoholic")){
                    lgi += '<li id="'+id+'" class="list-group-item" onclick="display_details('+id+')"><span class="badge bg-primary">'+i+'</span> ' + name + '</li>';
                  }
                  if ((!($('#alcoholic').is(":checked")) && !($('#nonalcoholic').is(":checked"))) ) {
                    lgi += '<li id="'+id+'" class="list-group-item" onclick="display_details('+id+')"><span class="badge bg-primary">'+i+'</span> ' + name + '</li>';
                  } 
                 }
                 lgi+='</ol>';
                 content.append(lgi);
                 if(drinks.length == 1){
                  display_details(drinks[0].idDrink);
                 }
                }
                else{
                    $('#cocktail-details').empty();
                    dns_text = '<div class="text"><p> Nu s-au găsit cocktailuri. Vă rugăm să încercați altă denumire.</p></div>';
                    content.append(dns_text);
                }
        }
	});
}

function display_details(id){
  
	$.ajax({
    type: "GET",
    url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?",
    dataType : "json",
    data : {i : id
    },
    success: function( data )
    {
              var content = $('#cocktail-details');
              content.empty();
              drink = data.drinks[0];
              var ingredients = drink["strIngredient"+1]+' ( '+drink["strMeasure"+1]+' ), ';
              for( i=2;  i <= 15; i++ ){
                if(drink["strIngredient"+i] != null ){
                  ingredients += drink["strIngredient"+i]+' ( '+drink["strMeasure"+i]+' ), ';
                }
            }
           dns_text = '<div class="details"><div class="card"><figure><img src='+drink.strDrinkThumb+' width="136" height="200"></figure><h4>'+drink.strInstructions+'</h4><p>'+ingredients+'</p></div></div>';
           content.append(dns_text);
            

    }

  });
}

$(document).ready(function(){
    load_cocktails();
    $('#search-btn').click(function() {
        get_cocktails();
    });
});