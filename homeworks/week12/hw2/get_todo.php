<?php
  require_once('conn.php');
  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  
  if (empty($_GET['id'])) {
    $json = array(
      'success' => false,
      'message' => '請輸入id'
    );
    $response = json_encode($json);
    echo $response;
    die();
  }

  $id = intval($_GET['id']);
  $sql = "SELECT id, bryan9411_todos FROM todos WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i', $id);
  $result = $stmt->execute();
  if (!$result) {
    $json =array(
      'success' => false,
      'message' => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  $json = array(
    'success' => true,
    'data' => array(
      'id' => $row['id'],
      'todo' => $row['todo']
    )
  );
  $response = json_encode($json);
  echo $response;

?>