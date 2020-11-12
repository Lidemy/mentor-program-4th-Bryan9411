<?php
  require_once('conn.php');
  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  
  if (empty($_POST['todo'])) {
    $json = array(
      'success' => false,
      'message' => '請輸入內容'
    );
    $response = json_encode($json);
    echo $response;
    die();
  }

  $todo = $_POST['todo'];
  $sql = "INSERT INTO bryan9411_todos(todo) VALUES(?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s', $todo);
  $result = $stmt->execute();
  if (!$result) {
    $json = array(
      'success' => false,
      'message' => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }
  $json = array(
    'success' => true,
    'message' => '成功',
    'id' => $conn->insert_id
  );
  $response = json_encode($json);
  echo $response;
?>