$("#search").submit(function(event) {
    event.preventDefault();
    var searchTerm = $("#keyword").val();
    alert("Your action is forbidden muahahahahahaahahahaha :) ");
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + searchTerm + "&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw";
    $.ajax ({
        url: url,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: 'json',                    
        success: function(data, status, jqXHR) {
            console.log(data);
            $("#result-list").html();
            // for (var i = 0; i < data.length; i++) {
            //     $("result-list").prepend('<iframe width="420" height="345" src="'+data[3][i]+'"></iframe>');
            // }
            console.log(data.items[0].snippet.channelTitle);
            for (var i = 0; i < data.items.length; i++) {
                var title = data.items[i].snippet.channelTitle;
                var description = data.items[i].snippet.description;
                var id = data.items[i].id.videoId;
                var thumbnail = data.items[i].snippet.thumbnails.high.url;
                $('#result-list').append(`
                    <div>
                        <h3> ${title} </h3>
                        <h5> ${description} </h5>
                        <a href="https://www.youtube.com/watch?v=${id}"><img src="${thumbnail}"></a>   
                    </div>
                `)
            }
        },
        error: function(err) {
            console.log(err);
        },
    })
    .done(() => {
        console.log("success");
    })
    .fail(() => {
        console.log("error");
    })
    .always(() => {
        console.log('complete');
    });
});