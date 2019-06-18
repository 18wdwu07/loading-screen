$(document).ready(function(){
    // setTimeout(function(){
    //     $('#loadingScreen').fadeOut();
    //     $('body').removeClass('loading');
    // }, 3000);
    //
    // setTimeout(function(){
    //     $('#loadingScreen').fadeIn();
    //     $('body').addClass('loading');
    // }, 6000);
    //
    // setTimeout(function(){
    //     $('#loadingScreen').fadeOut();
    //     $('body').removeClass('loading');
    // }, 9000);


    // $.ajax({
    //     url: '',
    //     type: '',
    // }, success:function(data){
    //     // loop over the data
    //     // append the data onto the screen
    //     // send some more data to another server
    //     removeloading();
    // })
    removeLoading();
});

function removeLoading(){
    $('#loadingScreen').fadeOut();
    $('body').removeClass('loading');
}
