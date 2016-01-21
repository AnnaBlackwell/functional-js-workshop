// function upperCaser(input) {
//   return input.toUpperCase();
// }

// module.exports = upperCaser


 // function repeat(operation, num) {
 //      for (var i = 0; i < num; i++) {
 //      operation();
 //      };
 //    };
 //    module.exports = repeat

 // function doubleAll(numbers) {
 //      return result = numbers.map(function(value) {
 //        return value * 2
 //      });
 //    }
 //    module.exports = doubleAll

// function getShortMessages(messages) {
//     // map all messages
//     var allMessages = messages.map(function(xyz){
//       return xyz.message;
//     });
//     // filter short messages
//     var shortMessages = allMessages.filter(function(val){
//       return val.length<50;
//     });
//     return shortMessages;
//     };
//     module.exports = getShortMessages

  function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(submitted){
        return goodUsers.some(function(good){
          return (submitted.id === good.id);
        });
      });
    };
  };
    module.exports = checkUsersValid

