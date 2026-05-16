<?php 
    // Comentarios en PHP

//DDCP-8776-JAVA-PHP-20,549ar2hziu

    # Comentario en PHP

    /*
        Comentarios en Bloque - PHP
    */

    $color = "red";

    $nombre = "Víctor";
    $apellido = "Melini";
    $nombreCompleto = $nombre . " " . $apellido;

    $num1 = 20;
    $num2 = 30;
    $pi = 3.1416;
    $activo = true;

    $suma = $num1 + $num2
?>

<!-- Comentarios HTML -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        .text-demo {
            color: <?= $color ?>;   /* <?php echo "$color" ?> */
        }
    </style>
</head>
<body>
    <div class="row">
        <div class="col-2"> </div>
        <div class="col-2"> 
            <br />
            <h1>Bienvenido a mi página</h1>
            <hr />
            <p class="text-demo"><?php echo "Este texto se ha generado con PHP"  ?></p>
            <?php echo "<p>Mi nombre es $nombreCompleto</p>" ?> 
            <p><b>Suma:</b> <?= $suma ?></p>
            <p><b>Hostname:</b> <?php echo $_ENV['TEMP'] ?></p>     
            <p><b>Hostname:</b> <?php echo getenv('TEMP') ?></p>
        </div>
        <div class="col-1"> </div>
    </div>
</body>
</html>