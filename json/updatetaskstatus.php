<?php try
 {
 	include("../_global/mysqli.php");
	include("../_class/LTSClass.php"); 
  	header('Content-type: application/json');

    $c = new ltsclass( $mysqli, $database_mysql1 );
	
	if(isset($_REQUEST['id']))
	{

		$id = $_GET['id'];
		$parentid = $_GET['parentid'];
		$ischecked = $_GET['ischecked'];
		$status = $_GET['status'];
	    $result = $c->checkdependencies($id,$parentid,$ischecked,$status);

	    if($result)
       	{
			echo json_encode($result); 
	   	}
	}
	
 } 

	 catch(Exception $ex)      
		 {              
		 } 
    ?>