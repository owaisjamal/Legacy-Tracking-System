// 2020 Connection
// Author: Raheel Khan - @dzrstudios
// Version: 1.5
// http://2020connection.net
// Copyright © 2015 | All Rights Reserved.


$(document).on('hidden.bs.modal', '.modal', function () {
    if ($('.modal:visible').length > 0) {
        $('body').addClass('modal-open');
    }
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
//$.jMaskGlobals.watchDataMask = true;


//Show alert
function alertFunc(color, msg) {
    var alert = $('<div class="alert alert-'+color+'"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+msg+'</div>').hide();
    var timeOut;
    //alert.prependTo('.notifications');
    //alert.fadeIn();
    alert.appendTo('.notifications');
    alert.slideDown();

    //Is autoclosing alert
    var delay = 10000;
    if(delay != undefined)
    {
        delay = parseInt(delay);
        clearTimeout(timeOut);
        timeOut = window.setTimeout(function() {
            alert.fadeOut(200, function(){ $(this).remove();});
        }, delay);
    }
    // remove last notification if more then six
    var countAlert = $(".notifications").children().length;
    if (countAlert > 6){
        $(".notifications .alert").first().remove();
    }
}


// error field
function errorField(selector) {
    $(selector).addClass('has-error').focus();
    $(document).on('keyup', selector, function () {
        $(selector).removeClass('has-error');
    });

}
// email validation
function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function validateCompName(inputtxt)
{
    var letters = /^[a-zA-Z0-9 ]*$/;
    return letters.test(inputtxt);
}
function validateName(inputtxt)
{
    var letters = /^[a-zA-Z ]*$/;
    return letters.test(inputtxt);
}

function validateZipcode(inputtxt)
{
    var regexp = /^\d{5}$/;
    return regexp.test(inputtxt);
}
function validatePhone(inputtxt)
{
    var regexp = /^\d{10}$/;
    return regexp.test(inputtxt);
}
function validateHours(inputtxt)
{
    var regexp = /^\d[0-9]{0,2}$/;
    return regexp.test(inputtxt);
}

function validateurl(url) {
    return /^(https?|s?ftp):|(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);

}

function validateoldurl(url) {
    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);

}

$(document).on('focusout', '.phoneUS', function(){
    var asd = $(this).cleanVal();
    if(asd != ''){
        if(asd.length != 10) {
            $(this).focus();
            alertFunc('danger', 'Please insert 10 digit phone number');
        }
    }
    else {
        console.log('ok');
    }
});


// Search filter function
function filterDropDown(filterInput, filterData) {
    var filterVal = $(filterInput).val();

    //select label which name contains value of textfield
    var labelSelect = $(filterData).find('label[name*="' + filterVal + '"]').parent('li');
    //Select checked labels
    var labelchecked = $(filterData).find('input:checked').parents('li');

    $(filterData).find('li').hide();
    $(labelSelect).show();
    //If textfield value blank, show all labels
    if ($(filterInput).val() == '') {
        $(filterData).find('li').show();
    }
    //Always Show checked labels
    $(labelchecked).show();

    //IF no match found, show span
    if ($(filterData).find('li:visible').length === 0) {
        $(filterData).find('div').show();
    }
    else {
        $(filterData).find('div').hide();
    }
}


// panel row search filter function
function filterRowStriped(filterPanel) {
    var filterInput = $(filterPanel).find('.row-striped-filter');

    $(document).on('keyup', filterInput, function () {
        var $input = $(filterInput);
        var filterVal = $input.val().toLowerCase();
        var $row = $(filterPanel).find('.row-striped .col-sm-6');
        var $filteredDiv = $row.filter(function(){
            var value = $(this).find('span').text().toLowerCase();
            return value.indexOf(filterVal) === 0;
        });

        $(filterPanel).find('.no-result').remove();
        $row.hide();
        $filteredDiv.show();
        //If text field value blank, show all labels
        if ($(filterInput).val() == '') {
            $row.show();
        }

        //IF no match found, show span
        if ($filteredDiv.length == 0) {
            $(filterPanel).find('.row-striped').append('<div class="col-sm-12 text-center no-result">No result found</div>');
        }
    });

}


// disable selected option
function DisableOptions(selector) {
    $(selector).find("option").attr("disabled", false); //enable everything
    //collect the values from selected;
    var  arr = $.map($(selector).find("option:selected"), function(n) {return n.value;});

    $(selector).find("option").filter(function() {
        return $.inArray($(this).val(),arr)>-1;
    }).attr("disabled","disabled");

    $(selector).find("option:selected").attr("disabled", false);
    $(selector).find("option[value='null']").attr("disabled", true); // always disable null value
}


// Update lightbox
function updateLightbox(lgtBoxID) {
    $(lgtBoxID).find('.slecUlgtboxSngl').click(function () {
        $(lgtBoxID).find('.slecUlgtboxSngl').hide();
        $(lgtBoxID).find('.slecUlgtboxMulti').show();
    });
    $(lgtBoxID).find('.allUlgtbox label').click(function () {
        var getText = $(this).text();
        $(lgtBoxID).find('.slecUlgtboxMulti').hide();
        $(lgtBoxID).find('.slecUlgtboxSngl').show();
        $(lgtBoxID).find('.slecUlgtboxSngl option').text(getText);

        $(lgtBoxID).find('.btn-slecUlgtbox').attr('disabled',false);
    });
    $(lgtBoxID).find('.btn-slecUlgtbox').click(function () {
        $(lgtBoxID).find('.slecUlgtbox').hide();
        $(lgtBoxID).find('.updateUlgtboxDetails').show();
    });
    $(lgtBoxID).find('.btn-backUlgtbox').click(function () {
        $(lgtBoxID).find('.updateUlgtboxDetails').hide();
        $(lgtBoxID).find('.slecUlgtbox').show();
    });
    // Filter result
    $(lgtBoxID).find('.filterAllUlgtbox').on("input", function () {
        var filterInput = $(lgtBoxID).find('.filterAllUlgtbox');
        var filterData = $(lgtBoxID).find('.allUlgtbox');
        filterDropDown(filterInput, filterData);
    });
}


// Wait function
function waitFunc(status){
    if(status == 'enable'){
        $('body').css('cursor','wait');
        $('body > *').css('pointer-events','none');
        $('#waitFunction').fadeIn(200);     // show please wait
    } else {
        $('body').css('cursor','initial');
        $('body > *').css('pointer-events','auto');
        $('#waitFunction').fadeOut(200);    // hide please wait
    }
}


// confirm delete function
function dltFunc(text,func) {
    $('body > #confirm-box').remove();

    $('body').append('<div class="modal fade" id="confirm-box" >' +
        '<div class="modal-dialog modal-sm">' +
        '<div class="modal-content">' +
        '<div class="modal-body">'+text +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default btn-confirm" data-confirm="no">Cancel</button>' +
        '<button type="button" class="btn btn-danger btn-confirm" data-confirm="yes">Delete</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');

    $('#confirm-box').modal({backdrop:'static',keyboard: false,show: true}); // open lightbox

    $('#confirm-box .btn-confirm').click(function (e) {
        e.stopImmediatePropagation();
        var getConf = $(this).attr('data-confirm');
        if(getConf == 'yes') {
            func();
        }
        $('#confirm-box').modal('hide');
    });
}

// confirm Yes function
function confFunc(text,func) {
    $('body > #confirm-box').remove();

    $('body').append('<div class="modal fade" id="confirm-box" >' +
        '<div class="modal-dialog modal-sm">' +
        '<div class="modal-content">' +
        '<div class="modal-body">'+text +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default btn-confirm" data-confirm="no">No</button>' +
        '<button type="button" class="btn btn-success btn-confirm" data-confirm="yes">Yes</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');

    $('#confirm-box').modal({backdrop:'static',keyboard: false,show: true}); // open lightbox

    $('#confirm-box .btn-confirm').click(function (e) {
        e.stopImmediatePropagation();
        var getConf = $(this).attr('data-confirm');
        if(getConf == 'yes') {
            func();
        }
        $('#confirm-box').modal('hide');
    });
}
// confirm No function
function confFuncNo(text,funcYes,funcNo) {
    $('body > #confirm-box').remove();

    $('body').append('<div class="modal fade" id="confirm-box" >' +
        '<div class="modal-dialog modal-sm">' +
        '<div class="modal-content">' +
        '<div class="modal-body">'+text +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default btn-confirm" data-confirm="no">No</button>' +
        '<button type="button" class="btn btn-success btn-confirm" data-confirm="yes">Yes</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');

    $('#confirm-box').modal({backdrop:'static',keyboard: false,show: true}); // open lightbox

    $('#confirm-box .btn-confirm').click(function (e) {
        e.stopImmediatePropagation();
        var getConf = $(this).attr('data-confirm');
        if(getConf == 'yes') {
            funcYes();
        } else {
            funcNo();
        }
        $('#confirm-box').modal('hide');
    });
}

/*
* Summary: Popup conformation alert dialog box with exclamation mark, css include in app.css
* Parameters: "text" contains alert text, "funcYes" contains yes callback function, "funcNo" contains no callback function
* Return: conformation alert dialog
*/
function confFuncMatWarning(text,funcYes,funcNo) {
    $('body > #confirm-box-material').remove();

    $('body').append('<div class="modal fade" id="confirm-box-material" >' +
        '<div class="modal-dialog modal-sm">' +
        '<div class="modal-content form-horizontal">' +
        '<div class="modal-body"><div class="row">' +
        '<div class="col-sm-3"><i class="fa fa-exclamation-triangle confirm-box-icon"></i></div>' +
        '<div class="col-sm-9">'+text+'</div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<div class="row">' +
        '<div class="col-sm-4 col-sm-offset-4"><button type="button" class="btn btn-default btn-block btn-confirm" data-confirm="no">No</button></div>' +
        '<div class="col-sm-4"><button type="button" class="btn btn-success btn-block btn-confirm" data-confirm="yes">Yes</button></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');

    $('#confirm-box-material').modal({backdrop:'static',keyboard: false,show: true}); // open lightbox

    $('#confirm-box-material .btn-confirm').click(function (e) {
        e.stopImmediatePropagation();
        var getConf = $(this).attr('data-confirm');
        if(getConf == 'yes') {
            funcYes();
        } else {
            funcNo();
        }
        $('#confirm-box-material').modal('hide');
    });
}

function confFuncCustWarning(text,yesbtntext,nobtntext,funcYes,funcNo) {
    $('body > #confirm-box-material').remove();

    $('body').append('<div class="modal fade" id="confirm-box-material" >' +
        '<div class="modal-dialog modal-sm">' +
        '<div class="modal-content form-horizontal">' +
        '<div class="modal-body"><div class="row">' +
        '<div class="col-sm-3"><i class="fa fa-exclamation-triangle confirm-box-icon"></i></div>' +
        '<div class="col-sm-9">'+text+'</div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<div class="row">' +
        '<div class="col-sm-12 "><button type="button" class="btn btn-danger btn-block btn-confirm" data-confirm="no">'+nobtntext+'</button>'+
        '<button type="button" class="btn btn-success btn-block btn-confirm" data-confirm="yes">'+yesbtntext+'</button></div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');

    $('#confirm-box-material').modal({backdrop:'static',keyboard: false,show: true}); // open lightbox

    $('#confirm-box-material .btn-confirm').click(function (e) {
        e.stopImmediatePropagation();
        var getConf = $(this).attr('data-confirm');
        if(getConf == 'yes') {
            funcYes();
        } else {
            funcNo();
        }
        $('#confirm-box-material').modal('hide');
    });
}


// search select field
/* TEMPLATE **
<div class="scrhSelect">
    <div class="scrhVal form-control" data-value="test">test</div>
    <div class="scrhDropdown">
        <input class="srchFilter form-control" placeholder="filter">
        <ul class="scrhOpt">
            <li value="test">test</li>
        </ul>
    </div>
</div>
*/
function scrhSelect() {
    $(document).on('click','.scrhSelect .scrhVal', function () {
        $(this).next('.scrhDropdown').toggle();
        $(this).next('.scrhDropdown').find('.srchFilter').val('');
        $(this).next('.scrhDropdown').find('li').show();
    });
    $(document).on('click','.scrhSelect .scrhOpt li', function() {
        var getVal = $(this).attr('value');

        $(this).parents('.scrhSelect').find('.scrhVal').attr('data-value',getVal).html(getVal);
        $(this).parents('.scrhDropdown').hide();
    });
    $(document).on('keyup', '.scrhSelect .srchFilter', function () {
        var fltrVal = $(this).val();

        $(this).next('.scrhOpt').find('li').hide();
        $(this).next('.scrhOpt').find('li:contains('+fltrVal+')').show();
        //If text field value blank, show all labels
        if ($(this).val() == '') {
            $(this).next('.scrhOpt').find('li').show();
        }
    });
}
scrhSelect();


// Input Multiple Tags
function tagsInput() {
    $(document).on('click','.tagsInput', function () {
        $(this).find('input').focus();
    });
    $(document).on('keyup','.tagsInputFld', function (e) {
        var getValue = $(this).val();

        if(e.which == 13) {
            $('<span class="badge">'+getValue+'</span>').insertBefore(this);
            $(this).val('');
        }
    });
    $(document).on('click','.tagsInput .badge', function () {
        $(this).remove();
    });
}
tagsInput();


// Image Preview
function imgPrev(selector, prevImg) {
    if (selector.files && selector.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(prevImg).attr('src', e.target.result);
        };

        reader.readAsDataURL(selector.files[0]);
    }
}


// phone keypad
function phoneKeypad(){
    $(document).on('click','.phnKeypadSelc', function () {
        $(this).next('.phnKeypad').toggle();
    });
    $(document).on('click','.phnKeypad li', function () {
        var getDigit = $(this).attr('data-digit');
        $(this).parents('.phnKeypadContnr').find('.phnKeypadSelc').html(getDigit).attr('data-digit',getDigit);
        $(this).parents('.phnKeypad').hide();
    });

    // ios style
    $(document).on('click','.phnKeypadIosSelc', function () {
        $(this).next('.phnKeypadIos').toggle();
    });
    $(document).on('click','.phnKeypadIos li', function () {
        var getDigit = $(this).attr('data-digit');
        var getText = '';
        if (getDigit == 'digit_input' || getDigit == 'Voice_recording' || getDigit == 'Voice_recognition') {
            getText = $(this).text()
        }else if(getDigit ==  'Close'){
            getText = $(this).text();
            getDigit ="dialpad"
        }
        else {
            getText = 'Dialpad Key ' + $(this).text();
        }


        $(this).parents('.phnKeypadIosContnr').find('.phnKeypadIosSelc').attr('data-digit',getDigit);
        $(this).parents('.phnKeypadIosContnr').find('.phnKeypadIosSelc').parent().find('span').html(getText);
        $(this).parents('.phnKeypadIos').hide();
    });
}
phoneKeypad();


// currency format
function currFormat(num){
    var str = num.toString().replace(/\D/g, ""), parts = false, output = [], i = 1, formatted = null;
    if(str.indexOf(".") > 0) {
        parts = str.split(".");
        str = parts[0];
    }
    str = str.split("").reverse();
    for(var j = 0, len = str.length; j < len; j++) {
        if(str[j] != ",") {
            output.push(str[j]);
            if(i%3 == 0 && j < (len - 1)) {
                output.push(",");
            }
            i++;
        }
    }
    formatted = output.reverse().join("");
    return("$" + formatted + ((parts) ? "." + parts[1].substr(0, 2) : "")); // returning value

    /*
     var formattedVal = currFormat($("#currency").html());
     $("#currency").html(formattedVal);
     ------------------------
     var newVal = $("#currency").html();
     var cleanV = newVal.toString().replace(/\$|,/g, "");   // get value without $ and ,
     $(".newDiv").html(cleanV);
     */
}

// get color
function hexc(colorval) {
    var color = '';
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
    return color;
}

// print formatted date
function formattedDate() {
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    var newDate = d.getFullYear() + '-' +
        ((''+month).length<2 ? '0' : '') + month + '-' +
        ((''+day).length<2 ? '0' : '') + day + ' ' +
        ((''+hour).length<2 ? '0' :'') + hour + ':' +
        ((''+minute).length<2 ? '0' :'') + minute;

    return newDate;
}

function timeSince(date) {
    /* // Function to run time since function
    * var oldDate;
     function newSaveIndicator() {
     $('.formSaveIndicator .ivrSaveDate').html(timeSince(oldDate)+" ago"); // selector
     var newDate = new Date();
     oldDate = newDate;
     }
     */
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

$(document).on('click', '.material-dropdown .dropdownBtn', function (e) {
    e.stopImmediatePropagation();
    $('.dropdownList').hide();
    $(this).parents('.material-dropdown').find('.dropdownList').fadeIn(300);
});
function materialDropdownClick(li) {
    var getVal = $(li).attr('data-value');
    var getText = $(li).text();
    $(li).parents('.material-dropdown').find('.dropdownBtn').attr('data-selected',getVal).text(getText);
    $('.dropdownList').hide();
}