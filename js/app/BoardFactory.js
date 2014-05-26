function BoardFactory(element) {

    this.target = element;
    this.humanTurn = new HumanTurn();
    this.computerTurn = new ComputerTurn();
    //this.side = 'h';
};

//Factory Create Class And Contain To This properties
BoardFactory.prototype.humanTurn;
BoardFactory.prototype.computerTurn;

//HTML Container
BoardFactory.prototype.target = '';

//System Status
BoardFactory.prototype.isProcess = 0;

//Turn Count
BoardFactory.prototype.turnNumber = 0;

//Pointer Object
BoardFactory.prototype.pointer = [0,0,0,0,0,0,0,0,0];

//Mark Pointer
BoardFactory.prototype.markPointer = function( el ) {

    var indexPointer = el.index('td');

    if(this.pointer[indexPointer] == 0 && this.isProcess == 0)
    {
        //Now Processing
        this.isProcess = 1;

        /* -------------------- */
        /* ---- Human Turn ---- */
        /* -------------------- */

        //Set Pointer To Array
        this.pointer[indexPointer] = this.humanTurn.side;

        //Draw Marker
        this.humanTurn.drawMarker(el);

        //Check Winner
        result = this.humanTurn.checkWinner(this.pointer,this.humanTurn.side);

        if(result)
        {
            this.resetGame();
            return;
        }

        //Count Turn Human Turn
        this.turnNumber = this.turnNumber + 1;

        /* ----------------------- */
        /* ---- Computer Turn ---- */
        /* ----------------------- */

        //Computer Choose Block
        computerMarkerIndex = this.computerTurn.chooseBlock(this.pointer,this.turnNumber);
        //console.log(computerMarkerIndex);

        if(Number.isInteger(computerMarkerIndex))
        {
            //Set Pointer To Array
            this.pointer[computerMarkerIndex] = this.computerTurn.side;
            this.computerTurn.drawMarker( $('td').eq(computerMarkerIndex) );

            //Check Winner
            result = this.computerTurn.checkWinner(this.pointer,this.computerTurn.side);

            if(result)
            {
                this.resetGame();
                return;
            }

            //Count Turn Computer Turn
            this.turnNumber = this.turnNumber + 1;

            //Finish Process
            this.isProcess = 0;
        }

    }
    else
    {
        alert('Bot say: don\'t cheat :p');
        console.log(this.pointer);
    }

};

BoardFactory.prototype.resetGame = function() {
    this.pointer = [0,0,0,0,0,0,0,0,0];
    this.isProcess = 0;
    this.turnNumber = 0;
    $('td').html('');
};
