<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  
  $content = $_POST['content'];
  if (empty($_POST['content'])) {
    header("location:index.php?errCode=1");
    die();
  }

  $user = getUserFromUsername($_SESSION['username']);
  $nickname = $user['nickname'];
  $sql = sprintf(
    "INSERT INTO bryan9411_comments(content, nickname) Values('%s','%s')",
    $content, $nickname
  );
  $result = $conn->query($sql);
  header("location:index.php");
?>