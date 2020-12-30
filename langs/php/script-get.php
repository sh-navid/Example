<?php
//http://localhost:8000/
//php -S 0.0.0.0:8000 langs/php/script-get.php
?>

<html>
<body>

<a href="script-get.php?id=12&name=kevin">GET REQUEST</a>

<br/>

<?php
echo "ID:" . $_GET['id'] . ", NAME:" . $_GET['name'];
?>

</body>
</html>