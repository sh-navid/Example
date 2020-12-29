<?php

$x=12;
$y=140;

function fn_print(){
    global $x;
    $y=14;

    $x++;
    $y++;

    echo "IN FUNCTION ".$x." ".$y."\n";
}

fn_print();

echo "OUT OF FUNCTION ".$x." ".$y;