<?php
  require_once('conn.php');
  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  
  if(empty($_POST['nickname']) || empty($_POST['username']) || empty($_POST['password'])) {
    header("location:register.php?errCode=1");
    die();
  }
  $sql = sprintf(
    "INSERT INTO bryan9411_users(nickname, username, password) VALUES('%s', '%s', '%s')",
    $nickname, $username, $password
  );
  $result = $conn->query($sql);
  if (!$result) {
    // 找出錯誤代碼
    $code = $conn->errno;
    if ($code === 1062) {
      header("location:register.php?errCode=2");
      die();
    }
    die($conn->error);
  }
  header("location:index.php");
?>