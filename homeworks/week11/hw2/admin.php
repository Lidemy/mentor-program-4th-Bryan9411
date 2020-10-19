<?php
   require_once('conn.php');
   $sql = "SELECT * FROM bryan9411_articles WHERE is_deleted is NULL  ORDER BY id DESC";
   $stmt = $conn->prepare($sql);
   $result = $stmt->execute();
   if (!$result) {
     die($conn->error);
   }
   $result = $stmt->get_result();
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
          <li><a href="post.php">新增文章</a></li>
          <li><a href="#">登出</a></li>
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
    <div class="container">
      <div class="admin-posts">
      <?php while ($row = $result->fetch_assoc()) {?>
        <div class="admin-post">
          <div class="admin-post__title">
              <?php echo $row['title']?>
          </div>
          <div class="admin-post__info">
            <div class="admin-post__created-at">
            <?php echo $row['created_at']?>
            </div>
            <a class="admin-post__btn" href="edit.php?id=<?php echo $row['id']?>">
            <input type="hidden" value="<?php echo $row['id']?>">
              編輯
            </a>
            <a class="admin-post__btn" href="delete.php?id=<?php echo $row['id']?>">
              刪除
            </a>
          </div>
        </div>
      <?php }?>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>