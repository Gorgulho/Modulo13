<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Animate</title>
    <script src="jquery/jquery_3.1.1.min.js"></script>
    <script src="jquery/jquery-ui.js"></script>
    <link rel="stylesheet" type="text/css" href="jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="funcao.js"></script>
</head>

<body>
    <div id="inicio">
        <form method="POST">
           <span id="tooltip"> <input type="text" name="nome" id="namewarp" placeholder="Nome" autocomplete="off" title="Neste procedimento introduza apenas o seu nome"></span>
            <button id="next">seguinte</button>
        </form>
    </div>
    <div id="geral">
    <button class="botao_estilo" id="ola">Mostra</button>
    <br>
    <button class="botao_estilo" id="ola1">Mostra mais</button>
    <br>
    <button class="botao_estilo" id="ola2">Um pouco mais</button>
    <br>
    <button class="botao_estilo" id="ola3">Mais um bocadinho</button>
    <br>
    <button class="botao_estilo" id="adeus">Adeus</button>
    <div id="caixa">
        <div id="coments">
            <form action="" id="form-msg" method="post" enctype="multipart/form-data">
                <textarea name="mensagem" id="comentbox" placeholder="Comentario aqui"style="margin: 0px; width: 204px; height: 57px;"></textarea>
                <button type="button" class="botao_estilo" id="send">Enviar</button>
            </form>
            <?php
                $servername = "localhost";
                $username = "root";
                $password = "admin123";
                $dbname = "trabalho_psi";

            // Create connection
                $conn = mysqli_connect($servername, $username, $password, $dbname);
            //consulta dos dados da tabela comentarios
                $sql = mysqli_query($conn,"SELECT * FROM comentarios");
            //mostrar a informação
                while ($row = mysqli_fetch_assoc($sql)){
                    echo "<p>",utf8_encode($row['Nome']),":",utf8_encode($row['coment']),"</p>";
                }
                
		    ?>	
            
        </div>
    </div>
        <button class="botao_estilo" id="reload">reload</button>
    </div>
</body>
</html>