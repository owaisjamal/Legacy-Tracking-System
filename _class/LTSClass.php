<?php

 class ltsclass{

/**
 * @desc function to fetch all the task from database and also calculate their dependencies, dependencies(done) and dependencies(complete)
 * @modified By Owais Jamal
 * @modified Date Friday, November 1, 2016
 */
     function GetAllTask()
    {
    
    include("../_global/mysqli.php");
 	$result  = $mysqli->query('SELECT * FROM tasks');
 		$resultData[] = array();

        if(!$result)
        {
            return false;
        }

        while($row = $result->fetch_assoc())
        {
            $rows[] = $row;
        }


	$resultarray = array();
        foreach ($rows as $resultData)
        {
        	$id =  $resultData['id'];

        	$query = "select count(*) as totaldependency from tasks where parent_id=".$id;
			$result = mysqli_query($mysqli, $query);
			$row = mysqli_fetch_assoc($result);

			$query1 = "select count(*) as totaldependencydone from tasks where parent_id=".$id." and status=1";
			$result1 = mysqli_query($mysqli, $query1);
			$row1 = mysqli_fetch_assoc($result1);

        	$query2 = "select count(*) as totaldependencycomplete from tasks where parent_id=".$id." and status=2";
			$result2 = mysqli_query($mysqli, $query2);
			$row2 = mysqli_fetch_assoc($result2);

			$totaldependency = $row['totaldependency'];
			$totaldependency_done = $row1['totaldependencydone'];
			$totaldependency_complete = $row2['totaldependencycomplete'];
			$resultData['totaldependency']=$totaldependency;
			$resultData['totaldependencydone']=$totaldependency_done;
			$resultData['totaldependencycomplete']=$totaldependency_complete;
			array_push($resultarray,$resultData);
        }
    
		$result->free();
		$mysqli->close();
		return $resultarray;
		
 	}

/**
 * @desc function to fetch the single task record from the database 
 * @param id : taskid
 * @modified By Owais Jamal
 * @modified Date Friday, November 1, 2016
 */

    function GetOneTask($id)
    {
    
    include("../_global/mysqli.php");
 	$result  = $mysqli->query('SELECT * FROM tasks where id='.$id);
 		$resultData[] = array();

        if(!$result)
        {
            return false;
        }

        while($row = $result->fetch_assoc())
        {
            $rows[] = $row;
        }

		$result->free();
		$mysqli->close();
		return $rows;
 	}


/**
 * @desc function used when Adding a new task and also in Editing an existing task to first calculate the dependencies of all parent and childs if any and then update their status on the basis of the cases
 * @param id : taskid
 * @param parentid : parentid
 * @param ischecked : checkbox checked true or false
 * @param status : task status
 * @modified By Owais Jamal
 * @modified Date Friday, November 1, 2016
 */

function checkdependencies($id,$parentid,$ischecked,$status)
{

/**
 * @desc function used to get all the childs from parent id
 * @param id : taskid
 * @modified By Owais Jamal
 * @modified Date Friday, November 1, 2016
 */
	function getallchild($id)
		{
			    include("../_global/mysqli.php");

			    $rows = array();
			    $result  = $mysqli->query('select * from tasks where parent_id = '.$id);
		 		
	/*	 		$result  = $mysqli->query('SELECT T2.id, T2.title,T2.status,T2.parent_id
						FROM (
						    SELECT
						        @r AS _id,
						        (SELECT @r := id FROM tasks WHERE parent_id = _id order by id limit 1) AS id,
						        @l := @l + 1 AS lvl
						    FROM
						        (SELECT @r := '.$parentid.', @l := 3) vars,
						        tasks m
						    WHERE @r <> 0) T1
						JOIN tasks T2
						ON T1._id = T2.parent_id
						ORDER BY T1.lvl DESC');*/


		$resultData[] = array();

		        if(!$result)
		        {
		            return false;
		        }

		        while($row = $result->fetch_assoc())
		        {
		            $rows[] = $row;
		        }

			return $rows;
		}

/**
 * @desc function and the given query is used to select all the parents of the task
  * @param id : taskid
 * @modified By Owais Jamal
 * @modified Date Friday, November 2, 2016
 */

		function getallparents($id) {
			include("../_global/mysqli.php");
			// recursive query to select all dependent parents 
			$result  = $mysqli->query('SELECT T2.id, T2.title,T2.status,T2.parent_id
		FROM (
		    SELECT
		        @r AS _id,
		        (SELECT @r := parent_id FROM tasks WHERE id = _id) AS parent_id,
		        @l := @l + 1 AS lvl
		    FROM
		        (SELECT @r := '.$id.', @l := 0) vars,
		        tasks m
		    WHERE @r <> 0) T1
		JOIN tasks T2
		ON T1._id = T2.id
		ORDER BY T1.lvl DESC');
		 		$resultData[] = array();

		        if(!$result)
		        {
		            return false;
		        }

		        while($row = $result->fetch_assoc())
		        {
		            $rows[] = $row;
		        }

			return $rows;
		       
		    }

	$allchilds = getallchild($id);
	$allparents = getallparents($id);
	$childscount = count($allchilds);
	$parentcount = count($allparents);
	$isallchildsdone = 'true';

 	foreach ($allchilds as $resultData)
        {

        	$status = $resultData['status'];
	        	if($status==1)
			{
				$isallchildsdone = 'true';
			}
			elseif($status== 2)
			{
				$isallchildsdone = 'true';
			}
			else
			{
				$isallchildsdone = 'false';	
				break;
			}
			
        }

	$isallparentsdone = 'true';
$count=0;
	foreach($allparents as $resultData)
        {
        	
        	$status = $resultData['status'];
        	$arrayid = $resultData['id'];
        	if($arrayid != $id)
        	{
		        	if($status=='1' )
				{
					$isallparentsdone = 'true';
				}
				elseif($status== '2')
				{
					$isallparentsdone = 'true';
				}
				else
				{
					$isallparentsdone = 'false';
					break;	
				}
			}
			
			$count++;
        }

/**
 * @desc function used to update the task status on the basis of certain cases
 * @param allchilds : array of allchilds
 * @param allparents : array of allparents
 * @param parentcount : parent count
 * @param ischecked : status checkbox checked true or false
 * @param isallchildsdone : all childs done true or false
 * @param isallparentsdone : allparents done true or false
 * @param status : task status
 * @param id : task id 
 * @modified By Owais Jamal
 * @modified Date Friday, November 2, 2016
 */

	function updatetaskstatus($allchilds, $allparents, $parentcount,$childscount, $ischecked, $isallchildsdone, $isallparentsdone, $status, $id, $parentid)
	{

		include("../_global/mysqli.php");

		// if all childs are done and there are no parents exist
		if($ischecked == 'true' && $parentcount == 1)
		{
			
			// if all childs are done then updating the status to complete
			if($isallparentsdone == 'true')
			{
				$sql = "UPDATE tasks SET status='2' WHERE id=".$id;

				if ($mysqli->query($sql) === TRUE) {
				} else {
				}
				
					foreach ($allchilds as $childs) {
						
							$childid = $childs['id'];
							$sql = "UPDATE tasks SET status='2' WHERE id=".$childid;

							if ($mysqli->query($sql) === TRUE) {
							    //echo "Record updated successfully";
							} else {
							    //echo "Error updating record: " . $mysqli->error;
							}

						}
			}
			else
			{
				if($status == 1)
				{
					$updatestatus = 2;
				}
				else
				{
					$updatestatus = 1;
				}
				$sql = "UPDATE tasks SET status=".$updatestatus." WHERE id=".$id;

				if ($mysqli->query($sql) === TRUE) {
				    //echo "Record updated successfully";
				} else {
				    echo "Error updating record: " . $mysqli->error;
				}
			}

		}	// if all childs are done and status checked true and also contains parents 
		elseif($isallparentsdone == 'true' && $ischecked == 'true' && $parentcount >1)
		{	
			//echo "PPP";
			//echo $isallparentsdone;
			// if all parents contains status done
			if($isallchildsdone == 'true')
			{

				// if all parents are done then updating the status to complete
				foreach ($allparents as $resultData)
		        {

		        	$pid = $resultData['id'];
		        	$sql = "UPDATE tasks SET status='2' WHERE id=".$pid;

					if ($mysqli->query($sql) === TRUE) {
					} else {
						   }
			        
		        }
				// if all childs are done then updating the status to complete
		        foreach ($allchilds as $resultData)
		        {

		        	$cid = $resultData['id'];
		        	$sql = "UPDATE tasks SET status='2' WHERE id=".$cid;

					if ($mysqli->query($sql) === TRUE) {
					} else {
					}
			        
		        }
					//update current task complete
		        	$sql = "UPDATE tasks SET status='2' WHERE id=".$id;

					if ($mysqli->query($sql) === TRUE) {
					} else {
					}
			        
			}
			else if($childscount < 1 )
			{
				echo "deee";
				// if all parents are done then updating the status to complete
				foreach ($allparents as $resultData)
		        {

		        	$pid = $resultData['id'];
		        	$sql = "UPDATE tasks SET status='2' WHERE id=".$pid;

					if ($mysqli->query($sql) === TRUE) {
					} else {
						   }
			        
		        }
			}
			else
			{
				// update current task to done
				$sql = "UPDATE tasks SET status='1' WHERE id=".$id;

					if ($mysqli->query($sql) === TRUE) {
					    //echo "Record updated successfully";
					} else {
					    echo "Error updating record: " . $mysqli->error;
					}
			}
		} // if status checked false
		elseif($ischecked == 'false')
		{
			// updating the status of all parents 
			foreach($allparents as $resultData)
			{
	        	$pstatus = $resultData['status'];
				if($pstatus==2)
				{
					// if parent status is complete then update task to Done
					$sql = "UPDATE tasks SET status='1' WHERE id=".$id;

					if ($mysqli->query($sql) === TRUE) {
					} else {
					}
				}
			
			}
			// updating the status of all childs 
			foreach($allchilds as $resultData)
			{
	        	$cstatus = $resultData['status'];

				if($cstatus==2)
				{
					// if childs status is complete then update task to Done
					$sql = "UPDATE tasks SET status='1' WHERE id=".$id;

					if ($mysqli->query($sql) === TRUE) {
					} else {
					}
				}
			
			}
					// As status checked false updating task status to inprogress
					$sql = "UPDATE tasks SET status='0' WHERE id=".$id;

					if ($mysqli->query($sql) === TRUE) {
					} else {
					}
		}
		else
		{

					// update status to done
					$sql = "UPDATE tasks SET status='1' WHERE id=".$id;

					if ($mysqli->query($sql) === TRUE) {
					    //echo "Record updated successfully";
					} else {
					    echo "Error updating record: " . $mysqli->error;
					}

		}

	}

updatetaskstatus($allchilds, $allparents, $parentcount, $childscount, $ischecked, $isallchildsdone, $isallparentsdone, $status, $id, $parentid);

return "Record updated successfully";
	

}

/**
 * @desc function used to add a new task 
 * @param parentid : parent id
 * @param task : task name
 * @modified By Owais Jamal
 * @modified Date Friday, November 2, 2016
 */

function addnewtask($parentid, $task)
{
	include("../_global/mysqli.php");
	$task = addslashes($task);
	
		$sql = "INSERT INTO tasks (title, parent_id)
	VALUES ('".$task."', ".$parentid.")";

	if ($mysqli->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $mysqli->error;
	}

}


/**
 * @desc function used to update the task 
 * @param id : task id
 * @param parentid : task parent id
 * @param ischecked : is status checkbox true or false
 * @param status : task status
 * @param task : task name
 * @modified By Owais Jamal
 * @modified Date Friday, November 2, 2016
 */

function updatetask($id,$parentid,$ischecked,$status,$task)
{
		include("../_global/mysqli.php");

		$sql = "UPDATE tasks SET title='".$task."',parent_id='".$parentid."' WHERE id=".$id;

		if ($mysqli->query($sql) === TRUE) {

			return true;		    

		} else {
		}

}


}



?>
