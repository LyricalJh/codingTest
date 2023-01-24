// 문제 41 소수 판별 
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성하시오.

{
//    const num = prompt('숫자를 입력하세요');

//     function check_prime(num){
//         for(let i =2; i< num; i++){
//             const result = num % i;
//             if(result === 0){
//                 console.log('no');
//                 return false;
//             }

//         }
//         if(num === 1){
//             console.log('no');
//             return;
//         }
//         console.log('yes');
//     }
}
// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요..
// 두수 a,b를 받아 2020년 무슨 요일인지 리턴하는 함수를 작성하시오 요일의 이름은 영어로 3단어내로 리턴하십시요 


{
    // const month =  parseInt(prompt('input month'));
    // const day =   parseInt(prompt('input day'));

    // function getDays(month, day){

    // }

    // const getmonth = prompt('input months');
    // const month = getmonth.padStart(2,'0');

    // const getday = prompt('input day')
    // const day = getday.padStart(2,'0');
    

    // function getDayName(month,day){
    //     const date = new Date(`2020 ${month} ${day}`).getUTCDay();
    //     console.log(date);
    //     if(date === 0){
    //         console.log("MON")
    //     }
    //     if(date === 1){
    //         console.log('TUE');
    //     }
    //     if(date === 2){
    //         console.log("WED");
    //     }
    //     if(date === 3){
    //         console.log("THU");
    //     }

    //     //and so on... 
    // }

    // getDayName(month,day);
    
    
    // this is answer solution
//     const month = prompt('월을 입력하세요.');
//     const date = prompt('일을 입력하세요.');

//     function solution(a,b){
//     const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

//     const x = new Date('2020-'+a+'-'+b);
//     return day[x.getDay()];
// }
//     console.log(solution(month, date));
    


    

}

//문제 43 10진수를 2진수로 변환하기

{
    //my answer
    // const num = parseInt(prompt('input number it will convert to decimal'));

    // console.log(num.toString(2));

 // answer page solution

//     let a = prompt('10진수를 입력해주세요.')
// let b = [];
// let result = '';

// while (a){
// 	b.push(a % 2);
// 	a = parseInt(a / 2, 10);
// }
// b.reverse();

// b.forEach((n) => {
//   result += n;
// })

// console.log(result);
}

//문제 44각 자리수의 합 

{

    //my soulution..
    // const nums = prompt('input numbers').split("");

    // let parseNums = []
    // let numbers = 0;
    // for(item of nums){
    //     parseNums.push(parseInt(item));
    // }
    // for(let i =0; i < parseNums.length; i++){
    //     numbers+= parseNums[i];
    // }
    // console.log(numbers);

    //answer page solution
//     let n = prompt('숫자를 입력하세요.');
//     let sum = 0;

//     while(n !== 0){
//     sum += (n % 10);
//     n = Math.floor(n/10);
//     }

// console.log(sum);

    
    
}
// getTime() 사용하여 현재 연도 2019를 출력하시오. 
//문제 45
{
    // const d = new Date();

    // let year = d.getTime();
    // console.log(year);
    // year = Math.floor(year/(3600*24*365*1000))+1970

    // console.log(year);
}

//  문 46 각자리의 합 

{
    //my
    // const nums = prompt('input numbers').split("");

    // let parseNums = []
    // let numbers = 0;
    // for(item of nums){
    //     parseNums.push(parseInt(item));
    // }
    // for(let i =0; i < parseNums.length; i++){
    //     numbers+= parseNums[i];
    // }
    // console.log(numbers);

    //answer
    // let arr = [];
    // let sum = 0;

    // for (let i=0; i<20; i++){
    // arr[i] = i+1;
    // }

    // arr.forEach((n) => {
    // while(n !== 0){
    //     sum += (n % 10);
    //     n = Math.floor(n/10);
    // }
    // })

    // console.log(sum);
    
}

//문제 47 set 자료형의 응용 중복을 제거하시오.
{
    // const person = {
    //     이호준: "01050442903",
    //     이호상: "01051442904",
    //     이준호: "01050342904",
    //     이호준: "01050442903",
    //     이준: "01050412904",
    //     이호: "01050443904",
    //     이호준: "01050442903"
    //   };
// my answer
    // const mySet = new Set();
    // mySet.add(people);
    
    // for (let item of mySet){
    //     console.log(item);
    // }
// page answer

    // let result = new Set();
    // for(let key in people){
    //     result.add(people[key]);
    // }

    // console.log(result.size);
}

//문제 48 대소문자 바꿔서 출력하기 

{
//    const words = prompt('input here').split("");
//    let arr = [];
//     let answer='';
//     for(let i =0; i < words.length; i++){
//         if(words[i] === words[i].toUpperCase()){
//             arr.push(words[i].toLowerCase());
//         }else if(words[i] === words[i].toLowerCase()){
//            arr.push( words[i].toUpperCase());
//         }
//     }

//    for(let i =0; i < arr.length; i++){
//     answer += arr[i];
//    }
//    console.log(answer);
    
}

// 문제 49 최댓값 구하기 
{
    //my answer
    // const nums = prompt().split(" ");
    // console.log(nums);
    // let numbers = []
    // nums.map(item => {
    //     numbers.push(parseInt(item));
    // })
    // console.log(numbers);
    // numbers.sort().reverse();
    // console.log(numbers[0]);

    // aswer page
    // let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
    //     return parseInt(n, 10);
    //   });
      
    //   numbers.sort((a, b) => {
    //     return b-a;
    //   });
      
    //   console.log(numbers[0]);
}

// 문제 50 버블 정렬 구하기 

{
    // function bubble(arr) {
    //     let result = arr.slice(); 

    //     for (let i = 0; i < result.length - 1; i++) {
    //       for (let j = 0; i< result.length-i; j++) {
    //         if (result[j] > result[j + 1]) {
    //             let temp = result[j];
    //             result[j] = result[j +1];
    //             result[j+1] = temp;
    //         }
    //       }
    //     }
    //     return result;

    //   }
      
    //   const items = prompt('입력해주세요.').split(' ').map((n) => {
    //     return parseInt(n, 10);
    //   });
      
    //   console.log(bubble(items));
}