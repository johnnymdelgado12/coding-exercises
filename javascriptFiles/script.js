function hello () {
    console.log("hello world!");
}

hello();

function fizzBuzz () {
    for(i = 1; i < 100; i++){
        if(i % 15 === 0 ){
            console.log("FIZZBUZZ")
        } else if (i % 3 === 0){
            console.log("fizz")
        } else if(i % 5 === 0){
            console.log("buzz")
        }
    }
}

fizzBuzz();