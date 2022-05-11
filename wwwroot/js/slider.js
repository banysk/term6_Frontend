window.onload = function () {
    Frames = document.getElementsByClassName("Slider__image");
    Dots = document.getElementsByClassName("Slider__dots__dot");
    CurrentFrame = 0;

    for (var i = 0; i < 3; i++) {
        Dots[i].addEventListener("click", function () {
            Change(this);
        })
    }

    setInterval(function () {
        Slider(1);
    }, 5000);
}

function ChangeFrame(New) {
    Frames[CurrentFrame].classList.remove("Slider__image--active");
    Dots[CurrentFrame].classList.remove("Slider__dots__dot--active");

    Frames[New].classList.add("Slider__image--active");
    Dots[New].classList.add("Slider__dots__dot--active");

    Frames[New].classList.toggle("fade");

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