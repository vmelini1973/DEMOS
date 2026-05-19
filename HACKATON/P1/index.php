<?php
$resultado = "";
$numero1 = "";
$numero2 = "";
$op = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $numero1 = $_POST["numero1"];
    $numero2 = $_POST["numero2"];
    $op = $_POST["operacion"];

    if ($_POST["operacion"] == "suma") {
        $resultado = $numero1 + $numero2;
    }

    if ($_POST["operacion"] == "resta") {
        $resultado = $numero1 - $numero2;
    }

    $resultado = "Resultado: " . $resultado;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Proyecto 1 - Calculadora PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Calculadora simple con PHP</h1>

    <form method="POST">
        <input 
            type="number" 
            name="numero1" 
            id="numero1" 
            placeholder="Primer número"
            value="<?php echo $numero1; ?>"

        >

        <input 
            type="number" 
            name="numero2" 
            id="numero2" 
            placeholder="Segundo número"
                        value="<?php echo $numero2; ?>"

        >

        <button type="submit" name="operacion" value="suma">Sumar</button>
        <button type="button" onclick="borrar()">Borrar</button>
        <button type="submit" name="operacion" value="resta">Restar</button>

    </form>

    <p id="resultado"><?php echo $resultado; ?></p>

    <script src="script.js"></script>
</body>
</html>