$('document').ready(function(){

    function showResult(keyword){
        var myUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + keyword;
        $.ajax({
            url: myUrl,
            data: 'queryData',
            dataType: 'jsonp',
            contentType: 'application/json; charset = utf-8',
            type: 'GET',
            async: false,
            cache: false,
            success: function(result){
                linkgenerator(result);
                console.log(result);
                console.log(keyword);
            }
        })
        .done(function(){
            console.log("success");
        })
        .fail(function(){
            console.log("error");
        })
        .always(function(){
            console.log("complete");
        });
    }

    function linkgenerator(result){
        for (var i = 0; i < result[1].length; i++) {
            
            $('#content').append(
                "<div class= 'content-box'><a href=" + result[3][i] + "><h2>" + result[1][i] + "</h2></a><p class='url'>" + result[3][i] + "</p><p>" + result[2][i] + "</p></div>"
                );
        }
    }

    $('#searchArticle').click(function(event){
        var keyword = $('#text-field').val();
        showResult(keyword);
    event.preventDefault();
    });

    $('#randomArticle').click(function(){
        window.open("https://en.wikipedia.org/wiki/special:random");
    });

    $('#text-field').keyup(function(event){
        var keyPressed = $(this).val();
        $('#content').empty();
        showResult(keyPressed);
    event.preventDefault();
    });
});
