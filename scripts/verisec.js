$(document).ready(function () {
    $("#PEPdate").datepicker();
    $("#signBtn").button();

    $("input[name=isPEP]:radio").change(function () {
        $("#isPEP").val($(this).val());
        if ($(this).val() == 'no') {
            $("#PEP2").addClass('hide');
            $("#PEP3").removeClass('hide');
            $("#endDate").addClass('hide');
        } else if ($(this).val() == 'nobut')
        {
            $("#PEP2").removeClass('hide');
            $("#PEP3").addClass('hide');
            $("#endDate").removeClass('hide');
        } else {

            $("#PEP3").addClass('hide');
            $("#PEP2").removeClass('hide');
            $("#endDate").addClass('hide');
        }

    });

    
    $("input[name=PEPfam]:radio").change(function () {
        if ($(this).val() == 'no') {
            $("#PEP3_2").addClass('hide');
            $("#signBtn").focus();
        } else {
            $("#PEP3_2").removeClass('hide');
         }
    });

    $("input[name=PEPrel]:radio").change(function () {
        if ($(this).hasClass('pepClick')) {
            $("#PEPassType").removeClass('hide');
        } else {
            $("#PEPassType").addClass('hide');
        }
    });
    //associering
    $("input[name=PEPassType]:radio").change(function () {
        //savetohidden
    });

    //Facta
    $("input[name=facta]:radio").change(function () {
        $("#tinDiv").toggleClass('hide');
    });

    $('#tinNummer').on('input', function (e) {
    
        if (!$.isNumeric($(this).val())) {
            this.value = this.value.substring(0, this.value.length - 1);
            console.log($(this).val());
        }
    });

});