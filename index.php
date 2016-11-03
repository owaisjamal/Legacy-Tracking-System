<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Legacy Tracking System</title>

    <!-- Bootstrap Core CSS -->
    <link href="_css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="_css/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="_css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="_css/lts-main.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="_css/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="_css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- jQuery -->
    <script src="_scripts/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="_scripts/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="_scripts/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="_scripts/startmin.js"></script>
        

    <script src="_scripts/ltsmain.js"></script>


<script>
$(document).ready(function(){
getalltasklist();
})
</script>


</head>
<body>

<div id="wrapper">

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Legacy Tracking System</a>
        </div>

    </nav>

    <!-- Page Content -->
    <div id="page-wrapper">

        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">List of All Task</h1>
                </div>
                <button  style="float:right;margin: -5px 23px 13px;" type="button" class="btn btn-success AddTask" data-toggle="modal"
                 data-target="#AddTask" >Add New Task</button>
            </div>

            <!-- ... content goes here ... -->

        </div>
         <div class="navbar-default sidebar col-sm-10" >
            <div class="sidebar-nav navbar-collapse ">

<!-- ... List of all tasks shows here ... -->
                <ul class="nav tasklist maincontent" >
                    <li class="sidebar-search">
                        <div class="input-group custom-search-form">
                            <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                        </div>
                    </li>
                    
                </ul>

            </div>
        </div>
    </div>


</div>


<!-- Add Task Modal -->
<div class="modal fade" id="AddTask" tabindex="-1" role="dialog" aria-labelledby="ModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="ModalLabel">Add New Task</h4>
      </div>
      <div class="modal-body">
        <form>
        <div class="form-group">
        <label for="parent_id">Parent:</label>
            <select class="form-control" id="allparents" name="parent_id">
            </select>
        </div>
          <div class="form-group">
            <label for="task-name" class="control-label">Task Name:</label>
            <input type="text" name="title" class="form-control" id="task-name">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary savenewtask" >Save</button>
      </div>
    </div>
  </div>
</div>
<!-- Add Task Modal -->


<!-- Edit Task Modal -->
<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
      <div class="modal-dialog">
    <div class="modal-content">
          <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h4 class="modal-title custom_align" id="Heading">Edit Task</h4>
      </div>
          <div class="modal-body">
        <form>
        <div class="form-group">
        <label for="editallparents">Parent:</label>
            <select class="form-control" id="editallparents" name="parent_id">
            </select>
        </div>
          <div class="form-group">
            <label for="edittask-name" class="control-label">Task Name:</label>
            <input type="text" name="title" class="form-control" id="edittask-name">
          </div>
        </form>
      </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary updatecurrenttask" >save</button>
          </div>
        </div>
  </div>

</div>    
<!-- Edit Task Modal -->
    

<!-- Delete Task Modal -->    
    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
      <div class="modal-dialog">
    <div class="modal-content">
          <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
        <h4 class="modal-title custom_align" id="Heading">Delete this entry</h4>
      </div>
          <div class="modal-body">
       
       <div class="alert alert-danger"><span class="glyphicon glyphicon-warning-sign"></span> Are you sure you want to delete this Record?</div>
       
      </div>
        <div class="modal-footer ">
        <button type="button" class="btn btn-success" ><span class="glyphicon glyphicon-ok-sign"></span> Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> No</button>
      </div>
        </div>
   
  </div>
      </div>


<!-- All popup alerts -->

<!-- Success alert -->

<div class="alert alert-success fade out glyphicon glyphicon-ok" >
    <div class="task" style="font-family:arial !important; padding-left: 25px;margin-top: -13px;">
    <a href="#" class="close" data-dismiss="alert"></a>
    Task updated successfully.
    </div>
</div>

<!-- Failure alert -->
<div class="alert alert-danger fade out " >
     <div style="padding-left: 25px;margin-top: -13px;">
    <a href="#" class="close" data-dismiss="alert"></a>
    </div>
</div>

</body>

</html>


