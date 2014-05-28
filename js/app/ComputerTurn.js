function ComputerTurn(element) {
    AbstractSideTurn.call(this);
};
ComputerTurn.prototype = new AbstractSideTurn();
ComputerTurn.prototype.constructor = ComputerTurn;

ComputerTurn.prototype.sideName = 'Computer';
ComputerTurn.prototype.side = 'c';
ComputerTurn.prototype.marker = '<i class="fa fa-times"></i>';

ComputerTurn.prototype.chooseBlock = function(pointer,turnNumber) {

    var minimaxIndex = { win: null , lose: null };
    var side = this.side;
    var pointerCount = pointer.length;


    if( parseInt(turnNumber) > 2 )
    {
        for (var i = 0; i < pointerCount ; i++) {
            cPointer = pointer.slice(0);

            if(cPointer[i] == 0)
            {
                cPointer[i] = side;
                var isComputerWin = this.checkWinner(cPointer,side);
                
                if(isComputerWin == true)
                {
                    minimaxIndex.win = i;
                }
            }
        }

        side = 'h';
        for (var i = 0; i < pointerCount ; i++) {
            hPointer = pointer.slice(0);

            if(hPointer[i] == 0)
            {
                hPointer[i] = side;
                var isHumanWin = this.checkWinner(hPointer,side);
                console.log(isHumanWin + ' ' + i);
                if(isHumanWin == true)
                {
                    minimaxIndex.lose = i;
                }
            }

        }
        //console.log(minimaxIndex);

        if(minimaxIndex.win != null)
        {
            return minimaxIndex.win;
        }

        else if(minimaxIndex.lose != null)
        {
            return minimaxIndex.lose;
        }

        else if(minimaxIndex.win == null && minimaxIndex.lose == null)
        {
            //console.log('random');
            randomIndex = this.random(pointer);
            return randomIndex;
        }

    }
    else 
    {
        randomIndex = this.random(pointer);
        return randomIndex;
    }
};

ComputerTurn.prototype.random = function(pointer) {
    for (var i = 0; i < pointer.length; i++) {
        indexPointer = _.random(0, pointer.length);
        if(pointer[indexPointer] == 0)
        {
            return indexPointer;
        }
    }
};

ComputerTurn.prototype.genPointer = function(pointer,index,side) {

    if(pointer[index] == 0)
    {
        pointer[index] = side;
        return pointer;
    }

    return false;

};
