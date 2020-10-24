<?php
  require_once('conn.php');
  $title = $_POST['title'];
  $content = $_POST['content'];
  $id = $_POST['id'];

  if (empty($_POST['title']) || empty($_POST['content'])) {
    header("location:edit.php?errCode=1&id=" . $id);
    die();
  }
  $sql = "UPDATE bryan9411_articles SET title=?, content=? WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ssi', $title, $content, $id);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  header("location:index.php");
?>