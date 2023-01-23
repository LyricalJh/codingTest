//1 . 다음 배열에서 400,500를 삭제하는 code를 입력하세요.
//var nums = [100,200,300,400,500];
{
    //const nums = [100,200,300,400,500];
    // first solutino nums.splice(3,2);

    //second solution without using araay api
    // for(i=0; i < nums.length; i++){
    //     if(nums[i] === 400){
    //       delete nums[i]
    //     }
    //     if(nums[i] === 500){
    //         delete nums[i]
    //     }
    // }
    
}

//2. 내장 함수를 사용하여 코드를 입력하고 다음과 같이 출력되게 하세요. => [200,100,10000,300]
{
    // const arr = [200,100,300];
    // first solution:  arr.splice(1,0,10000);
    // console.log(arr);

    //secons solution 
    // const find = arr.indexOf(100);
    // arr.splice(find,0,10000);

    // console.log(arr);
}

// 3. 변수의 타입 const arr = [100,200,300]; arr의 변수는 ?
{
    const arr = [100,200,300];
    
}


//4. 다음 변수의 a를 typeof(a)fh 넣었을때 출력될 값과의 연결이 알맞지 않은 것은?
{
    //2. a =2.22  출력 : boolean
} 

//5. for문 계산 값 추론하기
{
    let a = 10;
    let b = 2;

    for(let i=0; i < 5; i+=2){
        
       a += i;
    }

}
// 문제6 false 자바스크립트 문법중에서 False로 취급하는 것들  Flase취급 하지 않는거 찾기
{
    //1. Nan
    //2. 1 
    //3 ""
    //4 0
    //5 undifined

    // answer = > 2
}

//문제 7 변수명 다음중 변수명으로 사용할 수 없는 것 2개를 고르시오.
{
    //5번 숫자로 시작하는 변수명
}

//8번 객체의 키 이름 중복 
{
    const d = {
        'height': 180,
        'weight': 90,
        'weight': 10,
        'temp' : 36,
        'eyesight':1
    }

    
}

// 9번 
    //concat 을 활용한 출력 방법
{
    const year = '2019';
    const month = '04';
    const day = '26';
    const hour = '11';
    const min = '34';
    const second = '27';

    const result = year.concat("/"+month+ "/").concat(day);

    
}

//10 별 찍기 
// const n = prompt('숫자를 입력해주세요');
// let tree = '';

// for(i=0; i< input; i++){
//     let star = 


// 11 for를 이용한 기본 활용 1부터 100까지 모두 더하는 Code를 Pass 부분에 완성하세요 for를 사용해서
{
    let s =0;

    for(let i = 0; i <= 100; i++){
        s+=i;
    }
    
    
}

// 12 게임 캐릭터 클래스 만들기  클래스 작서아여 게임 캐릭터의 능력치와 파이어볼이 출력되게 만드시오 소스코드 수정 불가
{
class Wizard{
    constructor(health,mana,armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }

    attack(){
        return console.log('파이어볼!')
    }

}

    const x = new Wizard(545,210,10);
    // console.log(x.health, x.mana, x.armor);
    // x.attack();
    
}

// 문 13 몇번째 행성인가요? 

// 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

{
    const planet = ['수성','금성','지구','화성','목성', '토성','천왕성','해왕성'];
    
    //const inputNumber = prompt('숫자를 입력하시면 태양계 숫자를 찾아드려요');
    
    //console.log(planet[inputNumber-1]);
}

//문제 14 3의 배수인가요?
// 영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.

// 입력으로 랜덤한 숫자 n이 주어집니다.

// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

{
    function check(gameNumber){
        if(gameNumber % 3 === 0){
            console.log("짝")
        }else {
            console.log(gameNumber);
        }
    }
    
}

// 15 신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

// 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 
// 해주세요.

{
    function selfIntro(name){
        console.log(`hello my name is ${name} `)
    }
}

// 16  문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.


{

//const n = prompt('입력하세요.');

// const reverseString = n.split('').reverse().join('');

// console.log(reverseString);

}

//문 17 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면
// 키가 150이 넘으면 **YES**를 틀리면 **NO**를 출력하는 프로그램을 작성하세요.

//{
   // const tallSize = prompt('키가 어떻게 되세요?');

//     if(tallSize > 150){
//         console.log('Yes');
//     }else {
//         console.log('NO');
//     }
// }

// 문제 18 : 평균 점수 
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

{
    // const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
    // let sum = 0;
    
    // for (let i=0; i<3; i++){
    //   sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
    // }
    
    // console.log(Math.floor(sum/3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.
}

//  19번 제곱을 구하자
//공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
{
    //my solution
    // const getNumber = prompt('input the number it will return pow result').split(' ');
    // const numarr = getNumber.map(item => parseInt(item)); 
    // const number1 = numarr[0];
    // const number2 = numarr[1];
    // // const wow =getNumber.join().replace(',', '');
    // // console.log(wow);

    // function getPow(number1, number2){
    //     return number1 ** number2;
    // }

    // console.log(getPow(number1,number2));

    // //answer
    // const n = prompt('수를 입력하세요.').split(' ');

    // console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
}

// 20. 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.


{
    // my answer
    // const n = prompt('수를 입력하세요.').split(' ');
    // const n0 = parseInt(n[0],10);
    // const n1 = parseInt(n[1],10);

    // const divide = n0 / n1;
    // const left = n0 % n1;

    
    //  console.log(divide,left);
    
    // page answer
//     const n = prompt('수를 입력하세요.').split(' ');

// const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
// const left = parseInt(n[0], 10) % parseInt(n[1], 10);

// console.log(result);
    
    
}

//문제 21 어떻게 set을 하는지..?

{
    const mySet = new Set();
    const x = new Set('javascript');
    
}

// 문제 22 배수인지 확인하기 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른것은?
{
    //2) i % 6 == 0
}

// 문제 23 console.log(10/3) 은 결과값은 3이다  정답 x => 3.32332323

// 문제 24 대문자로 바꿔주세요
//{
//     const name = prompt('input name');
    
//     console.log(name.toUpperCase()); 
// }

// 문제 25 원의 넓이를 구하기 
{
    function getCircleWidth(radius){
        return radius * radius * 3.14
    }

    const circle = getCircleWidth(20);
    console.log(circle);

}

// 문제 26 행성 문제 2 

// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.
//행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

{
    // const planetName = prompt('행성의 이름을 입력해주세요')

    // switch(planetName) {
    //     case '수성':
    //         console.log('Mercury')
    //         break;
    //     case '금성':
    //         console.log('Venus')
    //         break;
    //     case '지구':
    //         console.log('Earth');
    //         break;
    //     case '화성':
    //         console.log('Mars');
    //         break;
    //     case '목성': 
    //         console.log('Jupiter');
    //         break;
    //     case '토성' : 
    //         console.log('Saturn');
    //         break;
    //     case '천왕성': 
    //         console.log('Uranus');
    //     case '해왕성이':
    //         console.log('Neptune입니다');
    //         break;
    //     default : 
    //         console.log(`sorrsy there is no word about ${planetName} please input correct word`);

    }

//}

// 문제 27 객체 만들기 

// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.
{

    // const keys = prompt('이름 입력').split(' ');
    // const values = prompt('점수 입력').split(' ');
    // const obj = {};

    // for(let i = 0; i < keys.length; i++){
    //     obj[keys[i]] = parseInt(values[i],10);
    // }
    // console.log(obj);

// const keys = prompt('이름을 입력하세요').split(' ');
// const values = prompt('점수를 입력하세요').split(' ');
// const obj = {};

// for (let i=0; i<keys.length; i++) {
//   obj[keys[i]] = parseInt(values[i], 10);
// }

// console.log(obj);


   
}

// 문제 28 2-Gram 이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
//예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// {
//     const inputvalue = prompt('input words').split("");
    
//     for(let i=0; i < inputvalue.length; i++){
//         console.log(inputvalue[i], inputvalue[i+1]);
//     }
// }

// 문제 29 대문자만 지나가세요~

// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

{
    // const text = prompt('input');
    // console.log(text === text.toUpperCase() ? "yes" : "no");
}

// 문제 30 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요
{
    // const texts = prompt('input');
    // const find = prompt('input');
    // console.log(texts.indexOf(find));
    
}

// 문제 31 자료형의 복잡도 bigO(1)이 아닌것은? 3. arr.slice(), arr.includes(5)

//문제 32 취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 

// 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

{
    // const input = prompt().split(' ');

    // console.log(input.length);

    
}
//문제 33 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
 
{
    // const numbers = prompt('input').split(' ');
    
    // let nums = []

    // for( item of numbers){
    //     nums.push(parseInt(item))
    // }
    // console.log(nums.reverse().join(' '))

    // solution
    // const data = prompt('숫자를 입력하세요.').split(' ').reverse();
    // const result = '';

    // for (let i=0; i<data.length; i++){
    // result += data[i];
    // }

    // console.log(result);
    
}

// 문제 34 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자. 다시 풀기
// (키는 공백으로 구분하여 입력됩니다.)

{
    // const nums = prompt('input numbers').split(' ');

    // let numsarr = "";

    // for(item of nums){
    //     numsarr.push(parseInt(item));
    // }

    

}

//# 문제35 : Factory 함수 사용하기

// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.

{
    // function one(n){
    //     function two(){
    //         return n ** n
    //     }
    //     return two;
    // }
    
    // const a = one(2);
    // const b = one(3);
    // const c = one(4);
    
    // console.log(a(10));
    // console.log(b(10));
    // console.log(c(10));

    // function one(n) {
    //     function two(value) {
    //         console.log(value);
    //       const sq = Math.pow(value, n);
    //       return sq;
    //     }
    //     return two;
    //   }
      
    //   const a = one(2);
    //   const b = one(3);
    //   const c = one(4);
      
    //   console.log(a(10));
    //   console.log(b(10));
    //   console.log(c(10));

}

// # 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

//{
    // const num = Number(prompt('input'));
    
    // for(let i = num; i <= num; i++){
    //     for(let j = 1; j<= 9; j++ ){
    //         console.log(i * j);
    //     }
    // }


    //solution
//     const num = prompt('1 ~ 9까지의 숫자 중 하나를 입력하세요.')
// let result = '';

// for (let i=1; i<=9; i++){
//   result += i*num + ' ';
// }

// console.log(result);
// }

//# 문제37 : 반장 선거

// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은
//  **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

{
//    const input = prompt('input name').split(' ');
//    const targetname = prompt('find name');

//     let num = 0;
//     let nameofking = ""

//     const findName = input.map(name =>{
//         if( name === targetname){
//             nameofking = name;
//             num ++;
//         }        
//     });

//     console.log(`${nameofking} 이 총 ${num} 표를 받었습니다.`);


    
}


{
    // const nums = prompt().split(' ')
    
    // let numbers = 0;
    // let num = []
    // for(item of nums){
    //     num.push(parseInt(item))
    // }
    // const sorted = num.sort();
    // const deleteDulicated = sorted.filter((item,inx) => {
    //     return sorted.indexOf(item) === inx;
    // } );
    
    // const reverseValue = deleteDulicated.reverse();
    
    // const first = reverseValue[0];
    // const second = reverseValue[1];
    // const third = reverseValue[2];

    // num.map(item => {
    //     if(item === first){
    //         numbers++
    //     }else if(item === second){
    //         numbers++
    //     }else if(item === third){
    //         numbers++
    //     }
    // })

    // console.log(numbers);

}


//문제 39 오타 수정하기 

{

    // 내가 푼 방법 firlst 와 splice 사용함 
    // const inputValue = prompt('input value here').split("");

    // inputValue.filter((item,index) => {
    //     if(item === 'q'){
    //         inputValue.splice(index, 1,'e');
    //     }
    // });
    // console.log(inputValue.join(""));
    
    // 정답지 1. 함수 사용 2. 정규식 사용 

    // 함수 사용 
    // const word1 = prompt('입력');

    // function replaceAll(str, search, add){
    //     return str.split(search).join(add);
    // }

    // console.log(replaceAll(word1, 'q','e'));

    // 정규식 사용
    // const word = prompt('input');
    // word.replace(/q/gi, 'e')

    // 위 방법이 더 좋은 이유 big0를 생각한다면 여기서 함수 사용은 const big0 이고 밑에 정규식 사용은 아예 데이터를 도는것 조차 하지 않는다.. 필터를 사용해서 big O(n) 방식은 훗날 데이터가 많아지면 
    // 어플리케이션이 느려지는 효과를 나타낸다. 

}

// 문제 40 놀이동산에 가자 

{
    
    // let total = 0;
    // let count = 0;
    // const limit = prompt('제한 무게를 입력하세요.');
    // const n = prompt('인원수를 입력하세요.');
    
    // for (let i=1; i<=n; i++){
    //   total += parseInt(prompt('무게를 입력해주세요.'), 10);
    //   if (total <= limit){
    //         count = i;
    //   }
    // }
    
    // console.log(count);

    


}