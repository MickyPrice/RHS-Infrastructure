<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Digital Infrastructure - Technical Site Map</title>
    <link rel="stylesheet" href="css.css">
  </head>
  <body class="openview">

    <a class="homebutton" href="index.html">🡸 Back</a>
    <div class="body" style="overflow-x:hidden">

      <div class="container text-center">
        <br><br><br><br><br><br><br><br>
        <?php
        if ($handle = opendir('more')) {

            while (false !== ($entry = readdir($handle))) {

                if ($entry != "." && $entry != "..") {

                    echo "<a class='sitemap-link' href='more/$entry'>$entry</a><wbr />";
                }
            }

            closedir($handle);
        }
        ?>
      </div>

    </div>
  </body>

  <script src="jquery.js" charset="utf-8"></script>
  <script src="js.js" charset="utf-8"></script>
</html>
