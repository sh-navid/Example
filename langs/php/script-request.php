<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
  <input type="text" name="name" placeholder="NAME">
  <br/>
  <input type="text" name="last" placeholder="LAST">
  <br/>
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_REQUEST['name'];
    $last = $_REQUEST['last'];
    if (empty($name) || empty($last)) {
        echo "EMPTY INPUT";
    } else {
        echo $name . " - " . $last;
    }
}
?>