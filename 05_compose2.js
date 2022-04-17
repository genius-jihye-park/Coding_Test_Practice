/* 
두 개의 함수를 입력받아 두 함수가 결합된 새로운 함수를 리턴해야 합니다. 
*/

function compose2(func1, func2) {
    // TODO: 여기에 코드를 작성합니다.
    return function(number){
      return func1(func2(number))
    }
  };
  