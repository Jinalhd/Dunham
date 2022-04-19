const url = 'https://manage.thedunhamgroup.com/aws-server/interview-questions';

$(document).ready(function() {
    $.get(url, function(data){
        $('.container').empty();
        for (let i = 0; i < data.length; i++) {
            $('.container').append('<p class="list-group-item" id="'+ data[i].id +'">'+ data[i]['name'] + ' - '+ data[i].category + '</p>');
        }
    });    
});