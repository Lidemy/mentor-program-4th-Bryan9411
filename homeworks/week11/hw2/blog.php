<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  $id = intval($_GET['id']);
  $username = null;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }

  // 查找上一頁 
  $sql = "SELECT * FROM bryan9411_articles WHERE is_deleted is null and id < $id ORDER BY id DESC limit 0,1";
  $stmt = $conn->prepare($sql);
  $result = $stmt->execute();
  $result = $stmt->get_result();
  $last_row = $result->fetch_assoc();

  // 查找下一頁
  $sql = "SELECT * FROM bryan9411_articles WHERE is_deleted is null and id > $id ORDER BY id DESC limit 0,1";
  $stmt = $conn->prepare($sql);
  $result = $stmt->execute();
  $result = $stmt->get_result();
  $next_row = $result->fetch_assoc();

  // 查找全部
  $sql = "SELECT * FROM bryan9411_articles WHERE is_deleted is null and id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i', $id);
  $result = $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'>Who's Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="index.php">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
        <?php if ($username) {?>
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="logout.php">登出</a></li>
        <?php } else{?>
          <li><a href="login.php">登入</a></li>
        <?php }?>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to my blog</div>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="posts">
      <article class="post">
        <div class="post__header">
          <div class="post_title"><?php echo escape($row['title'])?></div>
          <div class="post__actions">
          <?php if ($username) {?>
            <a class="post__action" href="edit.php?id=<?php echo $id?>">編輯</a>
          <?php }?>
          </div>
        </div>
        <div class="post__info"><?php echo escape($row['created_at'])?></div>
        <div class="post__content"><?php echo escape($row['content'])?></div>
        <?php if ($id !== 1) {?>
        <a class="last" href="blog.php?id=<?php echo $last_row['id']?>">上一頁</a>
        <?php }?>
        <?php if (empty($_GET['id'])) {?>
        <?php header('location:blog.php?id=1')?>
        <?php } else {?>
          <a class="next" href="blog.php?id=<?php echo $next_row['id']?>">下一頁</a>
        <?php }?>
      </article>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
  <script>
    
  </script>
</body>
</html>