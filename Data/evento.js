let d = 1;

while (d <= 31) {
    dia.innerHTML += '<option>' + d + '</option>'

    d++;
}

let m = 1;

while (m <= 12) {
    mes.innerHTML += '<option>' + m + '</option>'

    m++;
}

let a = 2023;

while (a >= 1950) {
    ano.innerHTML += '<option>' + a + '</option>'

    a--;
}