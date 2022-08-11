<?php
$usuario=$_POST('usuario');
$correo= $_POST('correo');
echo($usuario.' ',$correo);
try{

}

?>
<?php
include '../conexion.php';
$usuario=$_POST['usuario'];
$correo=$_POST['correo'];
$contrasena=$_POST['contraseña'];
$confirmcontra=$_POST['confirmarcontraseña'];

function validarUsuario($usuario,$conexion){
    $usuario = trim($usuario);
    if($usuario==''){
        echo "El usuario no puede ser vacio";
        return false;
    }
}

$sql="SELECT 'usuario_nombre 'FROM "
$sql = 

try{
    //code
$sql="INSERT INTO 'usuario
(usuario_nombre,usuario_pas)VALUE"

}

$consulta = $conexion->prepare($sql);
$consulta->execute(array('usuario_nombre'=>$_usuario
',usuario_pas'=>$contra
',usuario_correo´'=>$correo
',usuario_fecha_alta'=>$fecha->format('Y-m-d')
',usuario_privilegio'=>0))
?>