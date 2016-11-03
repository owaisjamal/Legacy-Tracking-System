<?php try
 {
 	include("../_global/mysqli.php");
	include("../_class/LTSClass.php"); 
  header('Content-type: application/json');

    $c = new ltsclass( $mysqli, $database_mysql1 );
	
	    $result = $c->GetAllTask();

	    if($result)
       	{
			echo json_encode($result); 
	   	}
	
 } 

	 catch(Exception $ex)      
		 {              
		 } 
    ?>