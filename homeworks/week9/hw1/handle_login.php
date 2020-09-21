<?php
  session_start();
  require_once('conn.php');

  $username = $_POST['username'];
  $password = $_POST['password'];
  if (empty($_POST['username']) || empty($_POST['password'])) {
    header("location:login.php?errCode=1");
    die();
  }
  $sql = sprintf(
    "SELECT * FROM bryan9411_users WHERE username='%s' and password='%s'",
    $username, $password
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  if($result->num_rows) {
    $_SESSION['username'] = $username;
    header('location: index.php');
  } else {
    header('location: login.php?errCode=2');
  }
?>