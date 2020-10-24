<?php
  require_once('conn.php');
  $id = $_GET['id'];
  $sql = "UPDATE bryan9411_articles SET is_deleted=1 WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i', $id);
  $result = $stmt->execute();
  header("location:admin.php");
?>