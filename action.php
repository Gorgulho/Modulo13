<?php
        if (count($_POST) > 0){
        $servername = "localhost";
        $username = "root";
        $password = "admin123";
        $dbname = "trabalho_psi";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        //consulta dos dados da tabela comentarios
        $sql = "INSERT INTO comentarios (Nome, coment) VALUES ('".$_POST['nome']."','".$_POST['mensagem']."')";

        if (mysqli_query($conn, $sql)) {
            echo json_encode("New record created successfully");
        } else {
            echo json_encode("Error: " . $sql . "<br>" . mysqli_error($conn));
        }
        
        //echo '<p>';
        $sql = mysqli_query($conn,"SELECT * FROM comentarios ORDER BY ID DESC LIMIT 1");
        $row = mysqli_fetch_assoc($sql);
        //echo $row['Nome'], ': ', $row['coment'];
        //echo '</p>';
        /*if(isset($_POST['mensagem'])) {
            $sql = "INSERT INTO comentarios (ID, Nome, coment)
            VALUES (2,'Joaquim','HENTAI4LiFE')";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        };*/
    }
?>