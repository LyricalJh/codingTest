//문자열 압축하기 
{
    // const str = prompt('input str').split("");

    // const set = new Set(str);
    // const newArr = [...set];

    // let arr = [];
    // const newArr0 = str.filter((item) => item === newArr[0]);
    // console.log(newArr0.length);

    // const newArr1 = str.filter((item) => item === newArr[1]);
    // console.log(newArr1.length);

    // const newArr2 = str.filter((item) => item === newArr[2]);
    // console.log(newArr2.length);

    // const newArr3 = str.filter((item) => item === newArr[3]);
    // console.log(newArr3.length);

    // console.log(newArr[0]+newArr0.length+newArr[1]+newArr1.length+newArr[2]+newArr2.length+newArr[3]+newArr3.length);

    //page answer

    // const user_s = new String(prompt('input str'));
    // let result_s ='';
    // let store_s = user_s[0];
    // let count = 0;

    // for(let i of user_s){
    //     if(i === store_s){
    //         count +=1;

    //     }else {
    //         result_s += store_s + String(count);
    //         store_s = i;
    //         count=1;
    //     }
    // }
    // result_s += store_s + String(count);
    // console.log(result_s);

    
}
// 문제 63 친해지고 싶어 
// 문장 줄인말 구현하기
{

    //my answer
    // const strArr = prompt('input word').split(" ");

    // let arr = [];

    // for(let i=0; i<strArr.length; i++){
    //     arr.push(strArr[i].charAt(0));
    // }

    // console.log(arr.join(""));

    //page answer

    // const user_input = prompt('input').split(" ");

    // let result = '';

    // for(let s of user_input){
    //     result += s.slice(0,1);
    // }

    // console.log(result);

}

//문제 64 이상한 엘리베이터

{

    //my answer
//     const num = parseInt(prompt('input number'),10);
    
//     const cargo7 = 7;
//     const cargo3 = 3;

//     function elevator(num){
//        const tmp = num % cargo7
//        const left1 = tmp / cargo3;
//        const left = tmp % cargo3;
//        if(left !== 0){
//         return -1;
//        }
//         return tmp + left1;
//     }

//    console.log(elevator(num));
// page answer

    let N = parseInt(prompt('input number'),10);
    let result = 0;

    while(true){
        if(N % 7 === 0){
            result+= parseInt(N/7,10);
            console.log(result);
            break;
        }
        N -=3;
        result += 1;
        if(N < 0){
            console.log(-1);
            break;
        }
    }
}

