// function add (x) {
//     var actually_add = function (y) {
//       return x + y;
//     }
//     return actually_add;
//   }
//   console.log(add(3)(4))
//   function counter () {
//     var count = 0;
//     var actuallyCount = function () {
//       count++;
//       return count;
//     }
//     return actuallyCount;
//   }
//   console.log(counter()())

//   

function giveMeEms(pixels){
    var baseValue = 16;
    function doTheMath(){
        return pixels/baseValue;
    }
    return doTheMath;
  }
  var smallSize = giveMeEms(12);

console.log("small size: ", smallSize());
