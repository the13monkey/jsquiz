<?php 

$result1 = $_POST['a1'];
$result2 = $_POST['a2'];
$result3 = $_POST['a3'];
$total = $result1 + $result2 + $result3; 

if ($total > 1) {
    echo 'Pastrami';
} else {
    echo 'Corned Beef';
}

