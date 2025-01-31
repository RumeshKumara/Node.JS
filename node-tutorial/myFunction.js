const math = (num1, num2, num3, num4) => {
    let a = num1+num2*2;
    if(num3){
        a += num3-5;
    }
     if(num4){
        a += num4*3;
    }
    return a;
};
console.log(math(1,2,3,4));

export default math;