
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length == 0) return [];
   
    let result = [];   
      
    for (i = 0; i < matrix.length; i++ ) {
        if ((2+i)%2) {
          matrix[i].sort(function(a, b) {
              return b - a;
            });
        }   
    }
       
    result = [].concat(...matrix);    

  return result;
}
