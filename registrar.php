<?php

require "coneccion.php";

 $usuario = $_POST['usuario'];

 //$sql = "Insert into usuairo = $usuario";

//include("coneccion.php");
$contrar =$_POST['contrar'];
$contratarconfir=$_POST['contrarConfirm'];
$emailr =$_POST['emailr'];
$nombre =$_POST['nombre'];
$telefono =$_POST['telefono'];
$id = 1;
$consulta = "INSERT INTO `usuarios`(`id_usuario`, `nombre_y_apellido`, `nombre_usuario`, `celular`, `email`, `contraseña`) VALUES ('1','$nombre','$usuario','$telefono','$emailr','$contrar')";
$resultado = $mbd->prepare($consulta);
$resultado->execute();

   /* /* if (!isset($_POST['registrarse']))
        // header('Location: register.html'); 
        usuario
        contrar
        contrarConfirm
        emailr
        nombre
        telefono
    $id = "";
    $nombre = trim($_POST['usuario']); //Nombre de Usuario    
    $email = $_POST['emailr']; //Email    
    $password = crypt($_POST['contrar'],$key); //Password   
    $passwordConfirm = crypt($_POST['contrarConfirm'],$key); //Confirmación de Password  
    $telefono = $_POST['telefono'];
    
    

    if ($password != $passwordConfirm) {        
        $titulo = "Ups!";        
        $mensaje = "La Contraseña no coincide. Intenta nuevamente.";
        $enlace = '<a href="register.html" class="btn btn-success btn-block">Iniciar Sesión</a>';          
        $icon = '<i class="material-icons">&#xE5CD;</i>'; //Error
        $fondo = "#e85e6c;"; //Error   
        include "confirmar.php";
        exit;              
    } 
    
    $usuario = $mbd->query("Select * From usuarios Where nombre = '{$nombre}'")->fetch(PDO::FETCH_ASSOC);

    if (is_array($usuario)) {
        $titulo = "Ups!";        
        $mensaje = "Algo no ha salido bien. El usuario ya existe.";
        $enlace = '<a href="register.html" class="btn btn-success btn-block">Iniciar Sesión</a>';                
        $icon = '<i class="material-icons">&#xE5CD;</i>'; //Error
        $fondo = "#e85e6c;"; //Error  
        include "confirmar.php";
        exit;        
    }

    $stmt = $mbd->prepare("Insert Into usuarios 
        Values (:id, :nombre, :email, :password, :fecha_registro, :activo)");

    $stmt->bindParam(':id',$id);
    $stmt->bindParam(':nombre',$nombre);
    $stmt->bindParam(':email',$email);
    $stmt->bindParam(':password',$password);
    $stmt->bindParam(':fecha_registro',$fecha_registro);
    $stmt->bindParam(':activo',$activo);
    $stmt->execute();
    $count = $stmt->rowCount();        

    if ($count == 1) {
        $titulo = "Bienvenido " . $nombre;        
        $mensaje = "Tu usuario se ha creado correctamente!.";        
        $enlace = '<a href="register.html" class="btn btn-success btn-block">OK</a>';        
        $icon = '<i class="material-icons">&#xE876;</i>'; //Success                
        $fondo = "#82ce34;"; //Success  
    } else {
        $titulo = "Ups!";        
        $mensaje = "Algo no ha salido bien. Intenta nuevamente.";
        $enlace = '<a href="login.html" class="btn btn-success btn-block">Iniciar Sesión</a>';                
        $icon = '<i class="material-icons">&#xE5CD;</i>'; //Error
        $fondo = "#e85e6c;"; //Error  
    }

    include "confirmar.php";

/* */