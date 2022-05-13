/*
- nao esquecer de colocar um if/else para exibir imagens ou videos

link w/ key: 
https://api.nasa.gov/planetary/apod?api_key=twas7PMQufH9W9FyyNvT7bpGCEQ29cx4gt2XNoTZ

*/

$("#button-send").click(function(e){
    e.preventDefault()
    const date = $("#input-date").val();
    const key = "twas7PMQufH9W9FyyNvT7bpGCEQ29cx4gt2XNoTZ";
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`,
        type: "GET",
        success: function(result){
            console.log(result);
            $(".title").text(result.title);
            $(".media").attr("src", result.url);  
            $(".text").text(result.explanation);
        }
    });
});

$("#today-sky").click(function(e){
    e.preventDefault()
    const key = "twas7PMQufH9W9FyyNvT7bpGCEQ29cx4gt2XNoTZ";
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}`,
        type: "GET",
        success: function(result){
            console.log(result);  
            $(".title").text(result.title);
            $(".media").attr("src", result.url);        
            $(".text").text(result.explanation);
        },
    });
});