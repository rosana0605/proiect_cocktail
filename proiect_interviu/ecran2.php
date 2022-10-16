<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700">
    <!-- <link rel="stylesheet" href="../proiect_interviu/Views/css/style.css"> -->

    <title>Cocktails</title>
    
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="Views/js/ecran2.js" ></script>
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">

     <link rel="stylesheet" href="../proiect_interviu/Views/css/style_home.css"> 
    
</head>
<body>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="../proiect_interviu/ecran1.php">Ecran 1</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="../proiect_interviu/ecran2.php">Ecran 2</a>
            </li>
        </ul>
    </nav>    
    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h4>Ingrediente incluse</h4>
                    <div id="ingredient-list" class="form-group">
                    </div>
                </div>
                <div class="col-sm">
                    <h4>Ingrediente excluse</h4>
                    <div id="non-ingredient-list" class="form-group">
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button id="ingredient-btn" type="button" class="btn btn-primary">Caută</button>
        </div>
                                        
                
        <div style="max-width:100%; display: flex; flex-direction: column;">
            <div id="cocktail-list" style="max-width:60%; display: block;">
                <ol id="list-group" class="list-group">
                </ol>
            </div>

            <!-- <div id="cocktail-details" style="max-width:60%; display: block;">
            </div> -->
        </div>
    </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
