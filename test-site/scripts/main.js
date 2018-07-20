$(function()
{
    $('#accord').accordion();
    $('h5').click(function()
    {
        var i = $(this).attr('id');
        var n1 = $('#num-one').val();
        var n2 = $('#num-two').val();
        switch(i)
        {
            case 'add':$('div#a p').text((+$('#num-one').val() + +$('#num-two').val()).toFixed(2));
            case "sub":$('div#s p').text(($('#num-one').val()-$('#num-two').val()).toFixed(2));
            case "mul":$('div#m p').text(($('#num-one').val()*$('#num-two').val()).toFixed(2));
            case "div":$('div#d p').text(($('#num-one').val()/$('#num-two').val()).toFixed(2));
        }
    });
    $('input').change(function()
    {
        $('div#a p').text((+$('#num-one').val() + +$('#num-two').val()).toFixed(2));
        $('div#s p').text(($('#num-one').val()-$('#num-two').val()).toFixed(2));
        $('div#m p').text(($('#num-one').val()*$('#num-two').val()).toFixed(2));
        $('div#d p').text(($('#num-one').val()/$('#num-two').val()).toFixed(2));
    });
    $('div').click(function()
    {
        var divId=$(this).attr('id');
        if(divId == 'operation')
        {
            $('#display').load('calci/calci.html');
        }
        if(divId == 'shapes')
        {
            $('#display').load('shapes/shapes.html');
        }
    });
});