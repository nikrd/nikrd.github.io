$(document).ready(function() {

    $("#captca_1").click(function() {
        $("#captca_1").toggleClass('captcha_s');
    });
    $("#captca_2").click(function() {
        $("#captca_2").toggleClass('captcha_s');
    });
    $("#captca_3").click(function() {
        $("#captca_3").toggleClass('captcha_s');
    });
    $("#captca_4").click(function() {
        $("#captca_4").toggleClass('captcha_s');
    });

    $("#captcha_btn").click(function() {
        try {
            if (($("#captca_1").hasClass("captcha_s")) && !($("#captca_2").hasClass("captcha_s")) && ($("#captca_3").hasClass("captcha_s")) && !($("#captca_4").hasClass("captcha_s"))) {
                alert("Все OK!");
            } else {
                throw "А это не правильно!";
            }
        } catch (er) {
            alert(er);
        }
    });

    var mail = document.querySelector("#email");
    var name = document.querySelector("#name");
    var about = document.querySelector("#add");
    var btn1 = document.querySelector("#reg");
    var btn2 = document.querySelector("#clear");
    btn1.onclick = function() {
        var r_mail = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
        var r_name = /[a-z]/i;
        if (
            r_mail.test(mail.value) &&
            r_name.test(name.value)
        ) {
            alert("Форма успешно отправлена.");
        } else {
            alert("Введенные данные некорректны!");
        }
    };
    btn2.onclick = function() {
        mail.value = "";
        name.value = "";
        pas.value = "";
        pas_v.value = "";
        spec.value = "";
        about.value = "";
        gender[0].checked = false;
        gender[1].checked = false;
        for (var i = 0; i < skills.length; i++) {
            skills[i].checked = false;
        }

        $("#img_for_xz").toggle(
            function() { $(this).attr("src", "img/img3.jpg") },
            function() { $(this).attr("src", "img/img3.jpg"); })
        $("#but1").click(function() { $("#img_for_xz").hide(); });
        $("#but2").click(function() { $("#img_for_xz").show(); });
        $("#but3").click(function() {
            $("#img_for_xz").animate({
                width: "5%",
                opacity: 0.1
            }, 1500);
        });

    };


});

function time() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    if (m < 10) {
        m = '0' + m;
    }
    document.getElementById('hh').innerHTML = h;
    document.getElementById('mm').innerHTML = m;
    setTimeout("time()", 1000);
}
time();

i = 0;
ris = ['img1.jpg', 'img2.jpg', 'img3.jpg']

function slideShow() {
    if (i >= 3) i = 0;
    document.getElementById('is_not_a_slider').src = 'img/' + ris[i];
    i++;
    setTimeout("slideShow()", 1000);
}
slideShow();