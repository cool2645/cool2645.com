<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";
$max = 10;

$time = time();
$ip = $_SERVER['REMOTE_ADDR'];
$ipx = $_SERVER['HTTP_X_FORWARDED_FOR'];

// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);

// 检测连接
if ($conn->connect_error) {
    echo json_encode(['code' => 500, 'msg' => 'Fail to connect database server']);
    die();
}

$sql = "SELECT * FROM statistic";
$statistic = [];
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $statistic[$row["name"]] = $row["count"];
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $sql = "SELECT * FROM `like` WHERE date > '" . strtotime('-1 day', $time) . "' AND ip = '$ip'";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > $max) {
        echo json_encode(['code' => 200, 'result' => false, 'msg' => 'maximum exceed']);
    } else {
        $sql = "INSERT INTO `like` (date, ip, ipx) VALUES ($time, '$ip', '$ipx')";
        mysqli_query($conn, $sql);

        $sql = "UPDATE `statistic` SET count=" . (string)((int)$statistic['like'] + 1) . " WHERE name = 'like'";
        mysqli_query($conn, $sql);

        echo json_encode(['code' => 200, 'result' => true, 'msg' => 'liked']);
    }

} else {

    echo json_encode([
        'code' => 200,
        'data' => $statistic
    ]);

    $sql = "INSERT INTO `visit` (date, ip, ipx) VALUES ($time, '$ip', '$ipx')";
    mysqli_query($conn, $sql);

    $sql = "UPDATE `statistic` SET count=" . (string)((int)$statistic['visit'] + 1) . " WHERE name = 'visit'";
    mysqli_query($conn, $sql);

}

mysqli_close($conn);