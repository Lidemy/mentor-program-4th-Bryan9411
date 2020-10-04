<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');
  
  $username = null;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }

  $sql = sprintf(
    "SELECT nickname FROM bryan9411_users WHERE username='%s'",
    $username
  );
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();

  $sql = sprintf(
    "SELECT * FROM bryan9411_comments ORDER BY id DESC"
  );
  $result = $conn->query($sql);
  if(!$result) {
    die($conn->error);
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>留言板</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="fontawesome-free-5.14.0-web/css/all.css">
</head>

<body>
  <header>
    <p>
      注意!本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
    </p>
  </header>
  <main class="board">
    <?php if (!$username) {?>
    <a href="register.php" class="board__btn">註冊</a>
    <a href="login.php" class="board__btn">登入</a>
    <h1 class="board__title">Comments</h1>
    <div class="login__n">請登入帳號發布留言</div>
    <?php } else {?>
    <a href="logout.php" class="board__btn">登出</a>
    <h1 class="board__title">
      <?php echo '你好' . '<span class="login__nickname">' . $row['nickname'] . '</span>'?>
    </h1>
    <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
      <textarea name="content" rows="5"></textarea>
      <input class="board__submit-btn" type="submit">
    </form>
    <?php }?>
    <?php
      if (!empty($_GET['errCode'])) {
        $code = $_GET['errCode'];
        $message = "Error";
        if ($code === '1') {
          $message = "請輸入內容";
          echo '<span class="error">'. $message .'</span>';
        }
      }
    ?>
    <!-- <h3 class="login__n">請登入帳號</h3> -->
    <div class="board__hr"></div>
    <section class="board__data">
    <?php while ($row = $result->fetch_assoc()) {?>
      <div class="card">
        <div class="card__member-face">
          <img src="" alt="">
        </div>
        <div class="card__info">
          <div class="card__info-message">
            <div class="card__title"><?php echo $row['nickname']?></div>
            <div class="card__date"><?php echo $row['created_at']?></div>
          </div>
          <div class="card__content"><?php echo $row['content']?></div>
        </div>
        <div class="card__features">
          <div class="card__edit">
            <a href="">
              <i class="fas fa-edit"></i>
            </a>
          </div>
          <div class="card__delete">
            <a href="">
              <i class="fas fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
    <?php }?>
    </section>
  </main>
</body>

</html>