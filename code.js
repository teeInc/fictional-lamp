function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbywlrbWK_29y9K1Z3pKXGqR4kFoBcMT9N-zgZJIERM6G_VDlKaL/exec"
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

document.getElementById("but").addEventListener("click", testGS)
