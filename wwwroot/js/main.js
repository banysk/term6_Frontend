function show() {
    NavPage.style.display = "block";
}

function hide() {
    NavPage.style.display = "none";
}

function ChangeFrame(New) {
    Frames[CurrentFrame].classList.remove("is--show");
    Dots[CurrentFrame].classList.remove("is--active");

    Frames[New].classList.add("is--show");
    Dots[New].classList.add("is--active");

    CurrentFrame = New;
}

function Change(event) {
    var pos = 0;
    for (var i = 0; i < 3; i++) {
        if (Dots[i] === event) {
            pos = i;
            break;
        }
    }
    ChangeFrame(pos);
}

function Slider(arg) {
    if (CurrentFrame + arg === -1) {
        ChangeFrame(2)
        return;
    }
    if (CurrentFrame + arg === 3) {
        ChangeFrame(0)
        return;
    }
    ChangeFrame(CurrentFrame + arg)
}

window.onload = function() {
    NavPage = document.getElementsByClassName("NavPage")[0];

    Frames = document.getElementsByClassName("img--default");
    Dots = document.getElementsByClassName("Slider__dot");
    CurrentFrame = 0;

    for (var i = 0; i < 3; i++) {
        Dots[i].addEventListener("click", function () {
            Change(this);
        })
    }
};