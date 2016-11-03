<?php try
 {
  header('Content-type: application/json');
    include("../_global/mysql1.php");
	include("../_class/LTSClass.php"); 
    $c = new reportdata( $mysql1, $database_mysql1 );
	if (isset($_GET['docketid']))
	{
		$docketid = $_GET['docketid'];
		$docketname= $_GET['docketname'];
		$districtid= $_GET['districtid'];
		$schoolid= $_GET['schoolid'];

                
	    $result = $c->checkdocket($docketid,$docketname, $districtid, $schoolid);
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