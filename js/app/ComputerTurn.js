function ComputerTurn(element) {
    AbstractSideTurn.call(this);
};
ComputerTurn.prototype = new AbstractSideTurn();
ComputerTurn.prototype.constructor = ComputerTurn;

ComputerTurn.prototype.sideName = 'Computer';
ComputerTurn.prototype.side = 'c';
ComputerTurn.prototype.marker = '<i class="fa fa-times"></i>';

ComputerTurn.prototype.chooseBlock = function(pointer,turnNumber) {

    var indexResult = { win: '' , lose: '' };
    var side = this.side;
    var pointerCount = pointer.length;

    for (var i = 0; i < pointer.length; i++) {
        indexPointer = _.random(0, pointer.length);
        if(pointer[indexPointer] == 0)
        {
            return indexPointer;
        }
    }

    // if( parseInt(turnNumber) > 2 )
    // {
    //
    //     for (var i = 0; i < pointerCount ; i++) {
    //         pointer[i] = side;
    //         console.log(pointer);
    //     }
    //
    // }
    // else
    // {
    //     for (var i = 0; i < pointer.length; i++) {
    //         indexPointer = _.random(0, pointer.length);
    //         if(pointer[indexPointer] == 0)
    //         {
    //             return indexPointer;
    //         }
    //     }
    // }
};

ComputerTurn.prototype.genPointer = function(pointer,index,side) {

    if(pointer[index] == 0)
    {
        pointer[index] = side;
        return pointer;
    }

    return false;

};
