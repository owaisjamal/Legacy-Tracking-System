
var Server = 'http://localhost/lts/json'

/**
 * @desc select all tasks and other attributes on loading the page
 * @modified By Owais Jamal
 * @modified Date Friday, November 1, 2016
 */
function getalltasklist()
{
	// calling json service for all tasks
	$.post(Server + '/listalltask.php', {
	            getalllist : true
	        }, function success (data) {

	            console.log('dd');
	            $('.tasklist').html('');
				var html='<li style="background-color: gainsboro;border: 1px solid;"><span style="margin:16px;">ID</span>\
				<span style="margin-left:35px;">Task</span><span style="margin-left:495px;">Status</span>\
				<span style="margin-left:91px;">T.D</span><span style="margin-left:58px;">T.D (Done)</span>\
				<span style="margin-left:19px;">T.D (Complete)</span></li>';
	            for(var j=0;j<data.length;j++)
	            {
	            	var id = data[j].id;
	            	var title = data[j].title;
	            	var cstatus = data[j].status;
					var parent_id = data[j].parent_id;
					var totaldependency = data[j].totaldependency;
					var totaldependencydone = data[j].totaldependencydone;
					var totaldependencycomplete = data[j].totaldependencycomplete;
	          		var ischecked = false;

	          		var status = cstatus;
	            	if(status == 0)
	            	{
	            		status = "In progress";
	            		ischecked = false;
	            	}
	            	else if(status == 1)
	            	{
	            		status = "Done";
	            		ischecked = true;
	            	}
	            	else
	            	{
	            		status = "Complete";
	            		ischecked = true;
	            	}
	            	
	            	html+='<li><a href="#" class="active">\
	            	<i class="fa fa-dashboard fa-fw"></i><span style="padding-right: 35px;padding-left: 7px;">'+id+'</span>\
	            	<span>'+ title+'</a>';
	            	if(ischecked)
	            	{
	            	  html+='<input for="statustask" type="checkbox" checked="true" data-id="'+id+'" data-status="'+cstatus+'" data-parent="'+parent_id+'" id="checkboxstatus" name="statustask" value="statustask">'
	            	}
	            	else
	            	{
					  html+='<input for="statustask" type="checkbox" data-id="'+id+'" data-status="'+cstatus+'" data-parent="'+parent_id+'" id="checkboxstatus" name="statustask" value="statustask">'

	            	}	
	            	  html+='<span  class="statustask">'+status+'</span><span  class="totaldependency">'+totaldependency+'</span><span  class="totaldependencydone">'+totaldependencydone+'</span></span><span  class="totaldependencycomplete">'+totaldependencycomplete+'</span>\
	            	  <p style="float:right" data-placement="top" data-toggle="tooltip" title="" data-original-title="Edit"><button class="btn btn-primary btn-xs edittask" data-id='+id+' data-title="Edit" data-toggle="modal" data-target="#edit"><span class="glyphicon glyphicon-pencil"></span></button></p>\
	            	</li>';
                    
                 }
                 $('.tasklist').append(html);

	    });
}

/**
 * @desc click event for the status checkbox of the task to change the task status
 * @modified By Owais Jamal
 * @modified Date Friday, November 1, 2016
 */
$(document).on('click','#checkboxstatus', function () {


	var id = $(this).attr("data-id");
	var parentid  = $(this).attr("data-parent");
	var ischecked  = $(this).is(":checked");
	var status  = $(this).attr("data-status");
	

	  // calling json service to update the task status
	  $.ajax({
        url: Server + '/updatetaskstatus.php',
        type: 'GET',
        data: { id : id,
	            parentid: parentid,
	            ischecked: ischecked,
	            status: status} ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            // success code
            console.log("success");
            getalltasklist();
            $(".alert-success").fadeTo(2000, 500).slideUp(500, function(){
		    $(".alert-success").slideUp(500);
		    $('.alert-success').hide()
			});
        },
        error: function () {
            // error code
            $(".alert-success").fadeTo(2000, 500).slideUp(500, function(){
		    $(".alert-success").slideUp(500);
		    $('.alert-success').hide()
			});
              getalltasklist();
              console.log("failure");
        }
    }); 

})

/**
 * @desc click event to open the add modal to add a new task
 * @modified By Owais Jamal
 * @modified Date Friday, November 2, 2016
 */

$(document).on('click','.AddTask', function (e) {
e.preventDefault();
$('#allparents').html('');
		// fetching all tasks id to show the select dropdown filled
		$.post(Server + '/listalltask.php', {
	            getalllist : true
	        }, function success (data) {
	        	var select = document.getElementById("allparents");
		var options = data;
		
		    var el = document.createElement("option");
		    el.textContent = "select";
		    el.value = "select";
		    select.appendChild(el);

		for(var i = 0; i < options.length; i++) {
		    opt = options[i].id;
		    el = document.createElement("option");
		    el.textContent = opt;
		    el.value = opt;
		    select.appendChild(el);
		}

	        });
		
});

/**
 * @desc click event to save the new task 
 * @modified By Owais Jamal
 * @modified Date Friday, November 2, 2016
 */

$(document).on('click','.savenewtask', function (e) {
e.preventDefault();

var parentid = $('#allparents').val();
if(parentid == "select")
{
	parentid = 0;
}
var task = $('#task-name').val();

// checking validation if the user has entered the task name or not
if(task == '' || task == undefined)
{
	$(".alert-danger").text('Please enter the task name');
	$(".alert-danger").fadeTo(2000, 500).slideUp(500, function(){
		    $(".alert-danger").slideUp(500);
		    $('.alert-danger').hide()
		    return;
			});
	
}
else
{
var data = {};
data['task'] = task;
data['parentid'] = parentid;		

  // Calling json service to add a new task
  $.ajax({
         data: data,
         type: "POST",
         url: "json/addnewtask.php",
         success: function(data){
            // success code
            console.log("success");
            getalltasklist();
            $(".task").text('Task added successfully');
            $(".alert-success").fadeTo(2000, 500).slideUp(500, function(){
		    $(".alert-success").slideUp(500);
		    $('#task-name').val('');
		    $('#AddTask').modal('toggle');
			});
			getalltasklist();
        },
        error: function () {
            // error code
              getalltasklist();
              $(".task").text('Task added successfully');
              $('#AddTask').modal('toggle');
              $('#task-name').val('');
              $(".alert-success").fadeTo(2000, 500).slideUp(500, function(){
		      $(".alert-success").slideUp(500);
			});
        }
    });

}
	        });
		


/**
 * @desc click event to open the edit modal for editing the task 
 * @modified By Owais Jamal
 * @modified Date Friday, November 2, 2016
 */

$(document).on('click','.edittask', function (e) {
e.preventDefault();
  
  var id = $(this).attr('data-id');
  $('#editallparents').html('');
	  
	  // calling json service to get the data of the selected task and populate the fields on edit modal
	  $.ajax({  
        data:{id:id},
        async: true,
 	    cache: false,
        type: "GET",
        url: "json/getonetask.php",             
        success: function(data){                    
        	// success code
            var getid = data[0]['id'];
            var task = data[0]['title'];
            var parentid = data[0]['parent_id'];
			var status = data[0]['status'];

			$('#edit').attr('data-id',getid);
			$('#edit').attr('data-status',status);

			// calling json service to populate the fields of the parent dropdown
           	$.post(Server + '/listalltask.php', {
	        	}, function success (data) {
			        	var select = $('#editallparents')[0];
				var options = data;
				
				    var el = document.createElement("option");
				    el.textContent = "select";
				    el.value = "select";
				    select.appendChild(el);

				for(var i = 0; i < options.length; i++) {
				    opt = options[i].id;
				    el = document.createElement("option");
				    el.textContent = opt;
				    el.value = opt;
				    select.appendChild(el);

			$('#editallparents').val(parentid)
			$('#edittask-name').val(task);	
				}
						         
		        });
        }

    });


	        });

/**
 * @desc click event to update the current task after changing the fields
 * @modified By Owais Jamal
 * @modified Date Friday, November 2, 2016
 */

$(document).on('click','.updatecurrenttask', function (e) {
e.preventDefault();

	var parentid = $('#editallparents').val()
	var task = $('#edittask-name').val();
	var id = $('#edit').attr('data-id');
	var status =$('#edit').attr('data-status');
	var ischecked=false;
	if(status == '0')
	{
		ischecked=false;
	}
	else
	{
		ischecked=true;
	}
	if(parentid == "select")
	{
		parentid = '0';
	}

	// calling json service to update the task
	$.ajax({
        url: Server + '/updatetask.php',
        type: 'GET',
        data: { id : id,
	            parentid: parentid,
	            ischecked: ischecked,
	            status: status,
	        	task: task} ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            // success code
            console.log("success");
            getalltasklist();
            $(".alert-success").fadeTo(2000, 500).slideUp(500, function(){
		    $(".alert-success").slideUp(500);
			});
			$('#edit').modal('toggle');
        },
        error: function () {
            // error code
              console.log("failure");
        }
    }); 


  });


