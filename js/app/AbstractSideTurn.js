function AbstractSideTurn() {
};

//HTML Marker Sign
AbstractSideTurn.prototype.marker = '';
AbstractSideTurn.prototype.side = '';
AbstractSideTurn.prototype.sideName = '';

//Check Winner Function
AbstractSideTurn.prototype.checkWinner = function(pointer,side) {

    /* --- Row Condition --- */
    if( pointer[0] == side && pointer[1] == side && pointer[2] == side )
    {
        return this.callbackWinnerAction(side);
    }

    if( pointer[3] == side && pointer[4] == side && pointer[5] == side )
    {
        return this.callbackWinnerAction(side);
    }

    if( pointer[6] == side && pointer[7] == side && pointer[8] == side )
    {
        return this.callbackWinnerAction(side);
    }

    /* --- Column Condition --- */
    if( pointer[0] == side && pointer[3] == side && pointer[6] == side )
    {
        return this.callbackWinnerAction(side);
    }

    if( pointer[1] == side && pointer[4] == side && pointer[7] == side )
    {
        return this.callbackWinnerAction(side);
    }

    if( pointer[2] == side && pointer[5] == side && pointer[8] == side )
    {
        return this.callbackWinnerAction(side);
    }

    /* --- Cross Condition --- */
    if( pointer[0] == side && pointer[4] == side && pointer[8] == side )
    {
        return this.callbackWinnerAction(side);
    }

    if( pointer[2] == side && pointer[4] == side && pointer[6] == side )
    {
        return this.callbackWinnerAction(side);
    }

    return false;
};

//Mark Pointer To Table
AbstractSideTurn.prototype.drawMarker = function(el) {
    el.html(this.marker);
};

AbstractSideTurn.prototype.setPointer = function(pointer,index) {
    if(pointer[index] == 0)
    {
        pointer[index] = this.side;
    }
    else
    {
        alert('this block not null');
    }
}

AbstractSideTurn.prototype.callbackWinnerAction = function(side) {
    //alert( this.sideName + ' Win');
    return true;
};
