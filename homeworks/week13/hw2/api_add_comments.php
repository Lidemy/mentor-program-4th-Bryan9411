<?php
  require_once('conn.php');
  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');

  if (empty($_POST['nickname']) || empty($_POST['content']) || empty($_POST['site_key'])) {
    $json = array(
      'success' => false,
      'message' => '請輸入內容'
    );
    $response = json_encode($json);
    echo $response;
    die();
  }

  $nickname = $_POST['nickname'];
  $content = $_POST['content'];
  $site_key = null;
  if(!empty($_POST['site_key'])) {
    $site_key = $_POST['site_key'];
  }
  $sql = "INSERT INTO bryan9411_discussions(nickname, content, site_key) VALUES(?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss', $nickname, $content, $site_key);
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
    'message' => '成功'
  );
  $response = json_encode($json);
  echo $response;
?>