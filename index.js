let result = document.getElementById('result');
let W_result = document.getElementById('W_result');


function rock() {
    let ai = Math.random();
    console.log(ai);

    let num = ai * 100;
    console.log(num);

    if (num >= 0 && num <= 33) {
        ai = `Rock`
    }

    if (num > 33 && num <= 66) {
        ai = `Paper`
    }

    if (num > 66) {
        ai = `Scissor`
    }


    if (ai == `Rock`) {
        result.textContent = `Computer :${ai}`;
        W_result.textContent = `Game Draw🤜🤛`;
    }

    if (ai == `Paper`) {
        result.textContent = `Computer :${ai}`
        W_result.textContent = 'Computer Won🤖'
    }

    if (ai == `Scissor`) {
        result.textContent = `Computer :${ai}`
        W_result.textContent = `You Won🎉🎊✨`;


    }


}

function paper() {
    let ai = Math.random();

    let num = ai * 100;

    if (num >= 0 && num <= 33) {
        ai = `Rock`
    }
    if (num > 33 && num <= 66) {
        ai = `Paper`;
    }
    if (num > 66) {
        ai = `Scissor`
    }


    if (ai == `Rock`) {
        result.textContent = `Computer :${ai}`;
        W_result.textContent = `You Won🎉🎊✨`
    }
    if (ai == `Paper`) {
        result.textContent = `Computer :${ai}`;
        W_result.textContent = `Game Draw🤜🤛`

    }

    if (ai == `Scissor`) {
        result.textContent = `Computer :${ai}`;
        W_result.textContent = `Computer Won🤖`
    }
}


function scissor() {
    let ai = Math.random()
    let num = ai * 100;

    if (num >= 0 && num <= 33) {
        ai = `Rock`
    }
    if (num > 33 && num <= 66) {
        ai = `Paper`
    }
    if (num > 66) {
        ai = `Scissor`
    }

    if (ai == 'Rock') {
        result.textContent = `Computer :${ai}`
        W_result.textContent = `Computer Won🤖`
    }

    if (ai == `Paper`) {
        result.textContent = `Computer :${ai}`
        W_result.textContent = 'You Won🎉🎊✨'
    }

    if (ai == `Scissor`) {
        result.textContent = `Computer :${ai}`
        W_result.textContent = `Game Draw🤜🤛`
    }
}
