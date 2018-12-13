function Card(point,suit){
    this.point=point;
    this.suit=suit;
}

var myCard=new Card(5,'daimonds')
Card.prototype.getImageUrl=function(){
    return 'UIProjects/blackjackimgs/JPEG 4/QC.jpg'
}


