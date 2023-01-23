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