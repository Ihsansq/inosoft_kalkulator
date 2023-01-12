let display=document.getElementById("screen");
function ac()
{
    display.value = "";
}

function c()
{
    display.value = display.value.slice('0', -1);
}

function tampil(n)
{
    display.value += n;
}

function hitung()
{
    display.value = eval(display.value);
}

function minus()
{
    display.value *= -1;
}

function persen()
{
    display.value /= 100;
    display.value = eval(display.value);
}
