let maxNum = 8;
let maxPrize = 100;
let totalPrize = 0;

let game = confirm('Do you want to play a game?');
if (!game) {
    alert('You did not become a billionaire, but can.');
}

while (game) {
    game = false;
    let haveGuessed = false;
    const min = Math.ceil(0);
    const max = Math.floor(maxNum);
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 3; i > 0 ; i--) {
        if (haveGuessed){
            break;
        }
        let currentPrize = 0;
        switch (i) {
            case 3:
                currentPrize = maxPrize;
                break;
            case 2:
                currentPrize = maxPrize/2;
                break;
            default:
                currentPrize = maxPrize/4;
                break;
        }

        const userNumber = prompt(`
Choose a roulette pocket number from 0 to ${maxNum}
Attempts left: ${i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${currentPrize}$
                `);

        if (userNumber && Number(userNumber) === num) {
            totalPrize += currentPrize;
            haveGuessed = true;
            if(confirm(`Congratulation, you won! \nYour prize is: ${totalPrize}$. Do you want to continue?`)){
                maxNum+=4;
                maxPrize*=2;
                game = true;
            } else {
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                if (confirm('Do you want to play again?')){
                    game = true;
                    maxNum = 8;
                    maxPrize = 100;
                    totalPrize = 0;
                }
            }
        }
    }

    if (!haveGuessed) {
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
        if (confirm('Do you want to play again?')){
            game = true;
            maxNum = 8;
            maxPrize = 100;
            totalPrize = 0;
        }
    }
}
