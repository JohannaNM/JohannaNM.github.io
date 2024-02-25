async function loadUtb(){
    try {
        const response = await fetch('cv.json');
        if (!response) {
            // error message
        }
        const data = await response.json();
        const minaUtbildningar = data.utbildningar.map(utbildning =>
            `<ul>
            <li>
                <div class="datum">${utbildning.start} - ${utbildning.klar}</div>
                <div class="info">
                    <p class="underrubrik"> <strong>${utbildning.utbildning}</strong> - ${utbildning.skola}</p>
                    <p>${utbildning.om}</p>
                </div>
            </li>
        </ul>`
        ).join('');
        document.getElementById('data').innerHTML = minaUtbildningar;

    }
    catch (error) {
        // error message
    }
}
async function loadArb(){
    try {
        const response = await fetch('cv.json');
        if (!response) {
            // error message
        }
        const data = await response.json();
        const minaArbeten = data.arbeten.map(arbete =>
            `<ul>
            <li>
                <div class="datum">${arbete.från} - ${arbete.till}</div>
                <div class="info">
                    <p class="underrubrik"> <strong>${arbete.titel}</strong> - ${arbete.företag}</p>
                    <p>${arbete.arbetsbeskrivning}</p>
                </div>
            </li>
        </ul>`
        ).join('');
        document.getElementById('data2').innerHTML = minaArbeten;
    }
    catch (error) {
        // error message
    }
}
loadArb();
loadUtb();