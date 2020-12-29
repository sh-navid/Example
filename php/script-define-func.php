<?php

$x = 12;
$y = 140;
$z = 600;



function fn_print()
{
    static $q = 90;//static in memory
    global $x;
    $y = 14;

    $x++;
    $y++;
    $GLOBALS["z"]++;
    $q++;

    echo "IN FUNCTION " . $x . " " . $y . " " . $GLOBALS["z"] . " " . $q . "\n";
}

fn_print();
fn_print();
fn_print();

echo "OUT OF FUNCTION " . $x . " " . $y . " " . $z . "\n";
