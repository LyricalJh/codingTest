// merge sort 구현하기

{
    // function mergeSort(arr){
    //     if(arr.length <= 1){
    //         return arr;
    //     }

    //     const mid = Math.floor(arr.length /2);
    //     const left = arr.slice(0, mid);
    //     const right = arr.slice(mid);

    //     return merge(mergeSort(left), mergeSort(right));
        
    // }

    // function merge(left, right){
    //     let result = [];

    //     while(left.length && right.length){
    //         if(left[0] < right[0]){
    //             result.push(left.shift());
    //         }else {
    //             result.push(right.shift());
    //         }
    //     }

    //     while(left.length){
    //         result.push(left.shift());
    //     }
    //     while(right.length){
    //         result.push(right.shift());
    //     }

    //     return result;
    // }

    // merge sort 알고리즘 진행 방식 
    // 1. 배열을 반으로 나눈다 왼왼쪽과 오른쪽으로 만듬.
    // 2. left 배열과 right 배열로 나눈다. 
    // 3. 왼쪽 배열과 오른쪽 배열과 비교한다.
    // 4. 작은 배열을 왼쪽으로 큰 배열은 오른쪽으로 
}

// 병합 정렬을 구현해보자 

{
    // function mergeSort(arr){
    //     if(arr <= 1){
    //         return arr;
    //     }

    //     const mid = Math.floor(arr.lenght / 2);
    //     const left = arr.slice(0, mid);
    //     const right = arr.slice(mid);

    //     return merge(
    //         mergeSort(left),
    //         mergeSort(right)
    //     );
        
    // }

    // function merge(left,right){
    //     let result = [];

    //     while(left.lenght && right.lenght){
    //         if(left[0] > right[0]){
    //             result.push(left.shift());
    //         }else {
    //             result.push(right.shift());
    //         }
    //     }

    //         while(left.lenght < 0){
    //             result.push(left.shift())
    //         }

    //         while(right.lenght < 0){
    //             result.push(right.shift())
    //         }

    //         return result;




    // }

    // const getArray = prompt('input array').split(' ').map(item => parseInt(item));

    // console.log(getArray);
    
}


// quick sort 에 대해 배워보자 ..
{
    // function quickSort(arr){
    //     if (arr.length <= 1){
    //       return arr;
    //     }
      
    //     const pivot = arr[0];
    //     const left = [];
    //     const right = [];
      
    //     for (let i=1; i<arr.length; i++){
    //       if(arr[i] < pivot){
    //         left.push(arr[i]);
    //       } else {
    //         right.push(arr[i]);
    //       }
    //     }
    //     return quickSort(...left.concat(right))
    //   }
      
    //   const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
      
    //   console.log(quickSort(array));
}
// 54 연속되는 수 
{
    // const numarr = prompt('input num').split("").map(item => parseInt(item));

    // function sol(arr){
    //     arr.sort((a,b)=> a-b);
        
    //     for(let i =0; i < arr.length-1; i++){
    //         if(arr[i]+1 !== arr[i +1]){
    //             return 'no'
    //             }
    //         }
    //         return 'yes';
    //     }

    //     console.log(sol(numarr))
  }
// 하노이 탑 원반 옮기기 
  {
    // const route = [];

    // function hanoi(num, start, end, temp){
    //   //원판이 한 개일 때에는 바로 옮기면 됩니다.
    //   if (num === 1) {
    //     route.push([start, end]);
    //     return NaN;
    //   }
    
    //   //원반이 n-1개를 경유기둥으로 옮기고
    //   hanoi(/*내용을 채워주세요.*/);
    //   //가장 큰 원반은 목표기둥으로
    //   route.push(/*내용을 채워주세요.*/);
    //   //경유기둥과 시작기둥을 바꿉니다.
    //   hanoi(/*내용을 채워주세요.*/);
    // }
    
    // hanoi(3, 'A', 'B', 'C');
    // console.log(route);
    // console.log(route.length);
  }
// 문제 56객체의 함수 응용
  {
    // nationWidth = {
    //      'korea': 220877,
    //      'Rusia': 17098242,
    //      'China': 9596961,
    //      'France': 543965,
    //      'Japan': 377915,
    //      'England' : 242900,
    //     }
    // const w = nationWidth['korea'];
    
    // delete nationWidth['korea'];

    // const entry = Object.entries(nationWidth);
    // const values = Object.values(nationWidth);
    // let gap = Math.max.apply(null, values);
    // let item = [];

    // for(let i in entry){
    //     if(gap > Math.abs(entry[i][1] -w)){
    //         gap = Math.abs(entry[i][1] -w);
    //         console.log(gap);
    //         console.log(entry[i]);
    //         item = entry[i]
    //     }
    // }

    // console.log(item[0], item[1]-w);
    // console.log(item);

  }
  // 문제 57 : 1의 수 
  {
    // const numarr = prompt('input number').split("").map(item => parseInt(item));
    // console.log(numarr);
    
    // let count = 0;
    // for(let i=0; i< numarr.length; i++){
    //   if(numarr[i] === 1){
    //     count++;
    //   }
    // }
    // console.log(count);
    
  }

  // 문제 58 콤마 찍기 숫자를 입력받고 천단위로 콤바 찍어주는 프로그램 개발을 부탁함 

{
  //내장 함수 사용
  // const num = prompt("input number");
  // const result = Number(num).toLocaleString('ko-KR');
  // console.log(result);
  // 재귀함수 
  // function comma(s) {
  //   if(s.length <= 3){
  //     return s;
  //   }else {
  //     return comma(s.slice(0, s.length -3)) + "," + s.slice(s.length -3 );
  //   }
  // }

  // console.log(comma(num));
  
}

// 문제 59: 빈칸 채우기 
{
  // My answer
  // const str = prompt('input text');
  // const strlen = str.length;
  // const total = 50;

  // const space = total - strlen;
  // const mid = Math.floor(space/2);

  // let result ='';
  // for(let i=0; i < mid; i++){
  //   result+= "="
  // }

  // result += str;

  // for(let i=0; i< mid; i++){
  //   result+= "="
  // }

  // console.log(result);

  //page answer
  // const str = prompt('input str');

  // const n = 25 + parseInt(str.length /2 , 10);

  // const a = str.padStart(n, '=');
  // console.log(a.padEnd(50,'='));
  

}

//문제 60 번호 매기기 새 학기가 되어 이름을 가나다 순서대로  배정하고 번호를 매기려고 한다 데이터에 입력된 이름을 아래와 같이 출력해라 

{
  //my answer
  //  students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연'];

  // const wow = students.sort();  
  // let count =0;
  // for(const element of wow){
  //   count++;
  //   console.log(`번호${count} , 이름: ${element}`);
  // }

  // page answer
  // students.sort();
  // for(let key in students){
  //   console.log(`번호: ${parseInt(key,10) + 1}, 이름 : ${students[key]}`);
  // }
}
