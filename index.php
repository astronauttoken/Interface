<!DOCTYPE html>
<html lang="en" dir="ltr">
  <?php include_once('inc/head.php'); ?>
  <body>
    <?php include_once('inc/header.php'); ?>

    <span id="strip"></span>

    <div class="background-container fixed dark">
      <div class="stars"></div>
      <div class="twinkling"></div>
    </div>

    <div id="canvas_wrapper">
      <div class="background-container dark">
        <div class="stars"></div>
      </div>
      <canvas id="can"></canvas>
      <span id="blue_orb"></span>
      <?php
        include_once('inc/banner.php');
        include_once('inc/todo.php');
        include_once('inc/features.php');
      ?>
    </div>

    <?php
      include_once('inc/how_it_works.php');
      include_once('inc/footer.php');
      include_once('inc/scripts.php');
    ?>
    <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c9f732943403f4458bdfb8ee0/93335afc61074726b9c9d6dc5.js");</script>
  </body>
</html>
