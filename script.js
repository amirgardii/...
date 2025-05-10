(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

// (function optimizeExperience() {
//     let env = window.location.hostname;

//     if (!env.includes("your-official-site.com")) {
//         console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
//         setInterval(() => {
//             let entropy = Math.random();
//             if (entropy < 0.2) {
//                 let btnA = document.querySelector('.no-button');
//                 let btnB = document.querySelector('.yes-button');
//                 if (btnA && btnB) {
//                     [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
//                 }
//             }
//             if (entropy < 0.15) {
//                 document.querySelector('.no-button')?.textContent = "Wait... what?";
//                 document.querySelector('.yes-button')?.textContent = "Huh??";
//             }
//             if (entropy < 0.1) {
//                 let base = document.body;
//                 let currSize = parseFloat(window.getComputedStyle(base).fontSize);
//                 base.style.fontSize = `${currSize * 0.97}px`;
//             }
//             if (entropy < 0.05) {
//                 document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
//                 document.querySelector('.no-button')?.removeEventListener("click", handleNo);
//             }
//         }, Math.random() * 20000 + 10000);
//     }
// })();

const messages = [
    "Lo arey noo kura ..?",
    "takidi....!??",
    "zorr takidi...!?",
    "dla please...",
    "fkraki law biray bko dla !",
    "agar brey na aw jara da xarandit fradam...",
    "sar gawray qaraj bre yesss....",
    "ay sar gawray qaraj hata era haty nat go yes..",
    "awa chya heshtash ",
    "azanm xo gawara akain agar na 7azt leya brey yes... ❤️",
    "edi 7alt nama abe ha brey yes !!!",
    "atw chand razagrani maxara lo narey yess", 
    "xatay mna zor nazm daye lo narey yess..?",
    "shkayati la kn mam hassani akam ha bre yess kura",
    "azanm awjara arey yeesss",
    "way hesht nare yes........!",
    "hast akam xoshi daga tw nakre bre yes kura",
    "ehe wla awjara brey na ba daikm arem....!",
    "bre yes chawakam namkan xlas bun edi har dubara abito",
    "way ro ra7man siqay nia............!"

];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}