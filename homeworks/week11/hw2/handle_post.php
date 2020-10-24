<?php
  require_once('conn.php');
  require_once('utils.php');
  $title = escape($_POST['title']);
  $content = escape($_POST['content']);
  if (empty($_POST['title']) || empty($_POST['content'])) {
    header("location:post.php?errCode=1");
    die();
  }
  $sql = "INSERT INTO bryan9411_articles(title, content) VALUES(?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $title, $content);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  header("location:index.php");
?>