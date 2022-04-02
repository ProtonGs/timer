<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','datas');

// get the post records
$name = $_POST['name'];
$Comment = $_POST['Comment'];

// database insert SQL code
$sql = "INSERT INTO `contact` (`id`, `name`, `Comment`) VALUES ('0', '$name', '$Comment')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
	echo $name;
	echo $Comment;
}

?>