$(function () {
    function display(bool) {
        if (bool) {
            $("#skills-container").show();
        } else {
            $("#skills-container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function (event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })

    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post("http://B1-SKILLS-UI/exit", JSON.stringify({}));
            return
        }
    };
    $("#close").click(function () {
        $.post('http://B1-SKILLS-UI/exit', JSON.stringify({}));
        return;
    })
})


// $(function () {
//     function display(bool) {
//         if (bool) {
//             $("#skills-container").show();
//         } else {
//             $("#skills-container").hide();
//         }
//     }

//     display(false)

//     window.addEventListener("message", function (event) {
//         var item = event.data;
//         if (item.type === "ui") {
//             if (item.status == true) {
//                 display(true)
//             } else {
//                 display(false)
//             }
//         }
//     })

//     document.onkeyup = function (data) {
//         if (data.which == 27) {
//             $.post("http://skills/exit", JSON.stringify({}));
//             return
//         }
//     };
//     $("#close").click(function () {
//         $.post("http://skills/exit", JSON.stringify({}));
//         return
//     })

//     $("#submit")
// })