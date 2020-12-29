<?php
$secret = "121212DDD";

echo $secret;

echo base64_encode($secret)."\n";

echo base64_decode(base64_encode($secret))."\n";

echo strrev($secret)."\n";

echo bin2hex($secret)."\n";

echo strlen($secret)."\n";

echo str_word_count($secret)."\n";

echo chop($secret)."\n";//trim - strip

echo str_replace("hello", "bye", "Hello world!");