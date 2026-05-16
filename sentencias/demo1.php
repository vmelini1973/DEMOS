<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <title>Ejemplo 1</title>
</head>
<body>
    <br/>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Ejemplo 1- formulario y sentencias de control</h1>
                </hr>
                <form action="" method="get">
                    <div class="row">
                        <div class="col">
                           <div class="form-group">
                            <label>Día de la semana</label>
                            <select class="form-select" name="d1">
                                <option>Lunes</option></option>
                                <option Selected>Martes</option>
                            </select>
                            <br/>

                            <select class="form-select" name="d2">
                                <option>Demo2</option>
                            </select>
                                <input type="text" class="form-control" name="d3" value="Espectacular"/>
                            </div>
                        </div>
                    </div>
                <div class="row">
                    <div class="col">
                    <button type="submit" class="btn btn-danger">Enviar</button>
                    <input type="submit" class="btn btn-success" value="Enviar 2" />
                    <button type="reset"  class="btn btn-secondary">Limpiar</button>
                    <input type="reset" class="btn btn-success" value="Enviar 2" />                
                    </div>
                </div>

                </form>
                </br>
            </div>
        </div>

    </div>
</body>
</html>