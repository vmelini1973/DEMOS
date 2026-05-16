<?php
 $dias = array("lunes", "martes","miercoles","jueves","viernes","sabado","domingo");
 $diaNum = (int)($_GET['dia'] ?? 0);
 $dia = ucfirst(strtolower(match($diaNum) 
    {
     1 => $dias[($diaNum-1)],
     2 => $dias[($diaNum-1)],
     3 => $dias[($diaNum-1)],
     4 => $dias[($diaNum-1)],
     5 => $dias[($diaNum-1)],
     6 => $dias[($diaNum-1)],
     7 => $dias[($diaNum-1)],
     default => "Sin Datos"   
 }));
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <title>Ejemplo 1b</title>
</head>
<body>
    <br/>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Ejemplo 1- formulario y sentencias de control</h1>
                </hr>
                <div class="row">
                    <div class="col">
                        <p><b>Día Seleccionado: </b> <?= $dia ?> </p>
                    </div>
                </div>
                <form action="" method="get">
                    <div class="row">
                        <div class="col">
                           <div class="form-group">
                            <label>Día de la semana</label>

                            <select class="form-select" name="dia">
                                <?php
                                for($i = 0; $i < count($dias); $i++) 
                                {
                                    $selected = ($diaNum === $i + 1) ? 'selected' : '';
                                    echo '<option value="'.($i+1).'" '.$selected.'>'
                                        .ucfirst(strtolower($dias[$i])).'</option>';
                                }
                                ?>
                        
                            </select>
                            <br/>

                            <select class="form-select" name="d2">
                                <option>Hora</option>
                            </select>
                                <input type="text" class="form-control" name="d3" placeholder="Introduce la provincia"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-end">
                            <button type="reset"  class="btn btn-danger">Reset</button> 
                            <button  type="submit" class="btn btn-success">Send</button>
                        </div>
                    </div>
                </form>
                </br>
            </div>
        </div>

    </div>
</body>
</html>