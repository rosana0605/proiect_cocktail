var all_drinks= [];
function get_ingredients()
{
	$.ajax({
        type: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
        dataType : "json",
        data : {
        },
        success: function( data )
        {
                 var content1 = $('#ingredient-list');
                 content1.empty();
                 var content2 = $('#non-ingredient-list');
                 content2.empty();
                 drinks = data.drinks;
                 for( i=0;  i < drinks.length; ++i ){
                  let ingredient = drinks[i].strIngredient1;
                  let id_check = i+100;
                  let lgi1 = '<div class="form-check"><input type="checkbox" class="form-check-input" onclick="disable_check('+i+','+id_check+')" id="'+i+'" value="'+ingredient+'"><label class="form-check-label" for="'+i+'"> ' + ingredient + '</label></div>';
                  let lgi2 = '<div class="form-check"><input type="checkbox" class="form-check-input" onclick="disable_check('+id_check+','+i+')" id="'+id_check+'" value="'+ingredient+'" ><label class="form-check-label" for="'+i+i+'"> ' + ingredient + '</label></div>';
                  content1.append(lgi1);
                  content2.append(lgi2);
                 }

        }

	});
}

function disable_check(id,id_dis){
    if ($('#'+id).is(':checked') ) {
        $('#'+id_dis).attr('disabled','disabled');
    } else {
        $('#'+id_dis).removeAttr('disabled');
    }
}

function get_cocktails()
{
    var arr_incluse=[];
    var arr_excluse=[];
    $('#ingredient-list :checked').each(function() {
        arr_incluse.push($(this).val() );
    
    });
    $('#non-ingredient-list :checked').each(function() {
        arr_excluse.push($(this).val() );
    
    });
    $('#list-group').empty();
    all_drinks=[];
    for(i=0;i<arr_incluse.length;i++){
         load_cocktails(arr_incluse[i],arr_incluse, arr_excluse);
    }
}

function load_cocktails(ingredient, arr_incluse, arr_excluse){
    $.ajax({
        type: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?",
        dataType : "json",
        data : {i : ingredient
       },
        success: function( data )
        { 
              drinks = data.drinks;
              for( i=0;  i < drinks.length; i++ ){
                let name = drinks[i].strDrink;
                var drink = drinks[i].idDrink;
                check_cocktail(name,drink,arr_incluse,arr_excluse);
              }
        }

    });
}

function check_cocktail(name, drink,arr_incluse,arr_excluse){
    $.ajax({
        type: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?",
        dataType : "json",
        data : {i : drink
        },
        success: function( data )
        {
            var cocktail = data.drinks[0];
            var ingredients = [];
            for( i=1;  i <= 15; i++ ){
                if(cocktail["strIngredient"+i] != null ){
                    ingredients.push(cocktail["strIngredient"+i]); 
                }
            }
            var containsAll = arr_incluse.every(i => ingredients.includes(i));
            let isFounded = ingredients.some( ai => arr_excluse.includes(ai) );
            if(containsAll && !isFounded && !all_drinks.includes(name)){
                lgi = '<li  class="list-group-item" >' + name + '</li>';
                $('#list-group').append(lgi);
                all_drinks.push(name);
            }
        }
    });
}

$(document).ready(function(){
    get_ingredients();
    $('#ingredient-btn').click(function() {
        get_cocktails();
    });
});