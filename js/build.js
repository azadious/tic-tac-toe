jQuery(document).ready(function($){

    var el = $('#board');
    var board = new BoardFactory( el );

    $(el.find('td')).click(function(){

        board.markPointer( $(this) );

    });

    $('.reset').click(function(){
        board.resetGame();
    });

});
