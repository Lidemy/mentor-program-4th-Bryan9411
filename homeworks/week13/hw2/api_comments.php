<?php
  require_once('conn.php');
  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');

  if (empty($_GET['site_key'])) {
    $json = array(
      'success' => false,
      'message' => "請輸入 site_key"
    );
    $response = json_encode($json);
    echo $response;
    die();
  }
  $site_key = null;
  if(!empty($_GET['site_key'])) {
    $site_key =$_GET['site_key'];
  }
  
  $before = null;
  if(!empty($_GET['before'])) {
    $before = intval($_GET['before']);
  }
  $sql = "SELECT id, nickname, content, created_at FROM bryan9411_discussions WHERE site_key= ? " .
  (empty($_GET['before']) ? "" : "and id < ? ") .
  "ORDER BY id DESC limit 5 ";
  
  $stmt = $conn->prepare($sql);
  if(empty($_GET['before'])) {
    $stmt->bind_param('s', $site_key);
  } else {
    $stmt->bind_param('si', $site_key, $_GET['before']);
  }
  $result = $stmt->execute();
  if(!$result) {
    $json = array(
      'success' => false,
      'message' => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }

  $result = $stmt->get_result();
  $discussions = array();
  while ($row = $result->fetch_assoc()) {
    array_push($discussions, array(
      'id' => $row['id'],
      'nickname' => $row['nickname'],
      'content' => $row['content'],
      'created_at' => $row['created_at']
    ));
  }
  $json = array(
    'success' => true,
    'discussions' => $discussions
  );
  $response = json_encode($json);
  echo $response;
?>