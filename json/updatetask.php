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
		$task = $_GET['task'];

	    $result = $c->updatetask($id, $parentid, $ischecked, $status, $task);

	    if($result)
       	{
       		$updatedependencies = $c->checkdependencies($id,$parentid,$ischecked,$status);
			
			if($updatedependencies)
			{
				echo json_encode($updatedependencies);
			} 
	   	}
	}
	
 } 

	 catch(Exception $ex)      
		 {              
		 } 
    ?>