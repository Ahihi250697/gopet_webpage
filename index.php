<!doctype html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no, address=no, email=no">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=10.0, user-scalable=yes">
    <meta property="og:type" content="website">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <meta property="og:site_name" content="">
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="icon" href="./images/commons/favicon.png">
    <link href="./assets/css/reset.css" rel="stylesheet">
    <link href="./assets/css/bootstrap_custom.css" rel="stylesheet">
    <link href="./css/common.css" rel="stylesheet">
    <!-- build:addcss -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Truculenta:wght@300;400;500;700;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/home.css">
    <link rel="stylesheet" href="./css/news.css">
    <link rel="stylesheet" href="./css/download.css">
    <link rel="stylesheet" href="./css/feature.css">
    <link rel="stylesheet" href="./css/footer.css">
    <title>GOPET | Trang chủ</title>

</head>

<body>
    <div class="app">

        <?php
            @include './_partical/_header.php';
        ?>
        <!-- include: header -->
        <main class="main-area">
            <?php
                @include './_partical/_home.php';
                if (isset($_GET['content_id'])) {
                    $content=$_GET['content_id']; 

                    if ($content == 'download'){
                        @include './_partical/_download.php';
                        // echo "<script>console.log('Debug Objects:' );</script>";
                    }elseif ($content == 'feature'){
                        @include './_partical/_feature.php';
                        // echo "<script>console.log('Debug Objects:' );</script>";
                    }else{
                        @include './_partical/_news.php';
                    }
                }
                else{
                    @include './_partical/_news.php';
                }

            ?>
            <!-- include: home -->
        </main>
        <!-- end: main -->
        <?php
            if (isset($_GET['content_id'])) {
                $content=$_GET['content_id']; 
                if ($content !== 'download'){
                    @include './_partical/_footer.php';
                }
            }
            else{
                @include './_partical/_footer.php';
            }
        ?>
        
        <!-- include: footer -->

    </div>
    <!-- end: app -->
    <script src="./assets/js/jquery-3.5.1.min.js"></script>
    <script src="./js/_news.js"></script>
    <script src="./js/_feature.js"></script>
    <script src="./js/home.js"></script>

</body>

</html>