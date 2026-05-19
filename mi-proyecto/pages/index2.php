<?php 

$tituloPagina= 'home';

$paginaActiva= 'home';

?>

<!DOCTYPE html>
<html lang="es">
<?php
require_once __DIR__.'/layouts/head.php';
?>


<?php
    require_once __DIR__.'/layouts/navbar.php';
?>    
<body>
    <div id "wrapper">
<?php
    require_once __DIR__.'/layouts/sidebar.php';
?>
    </div>


    <p>Cuerpo</p>

<?php
    require_once __DIR__.'/layouts/footer.php';
?>


<?php
    require_once __DIR__.'/layouts/scripts.php';
?>

</body>



</html>