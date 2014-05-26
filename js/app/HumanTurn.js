function HumanTurn(element) {
    AbstractSideTurn.call(this);
};
HumanTurn.prototype = new AbstractSideTurn();
HumanTurn.prototype.constructor = HumanTurn;

HumanTurn.prototype.sideName = 'Human';
HumanTurn.prototype.side = 'h';
HumanTurn.prototype.marker = '<i class="fa fa-circle-o"></i>';
