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
            $.post("http://nui-tutorial/exit", JSON.stringify({}));
            return
        }
    };
    $("#close").click(function () {
        $.post('http://nui-tutorial/exit', JSON.stringify({}));
        return
    })

    $("#submit").click(function () {
        let inputValue = $("#input").val()
        if (inputValue.length >= 100) {
            $.post("http://nui-tutorial/error", JSON.stringify({
                error: "Input was greater than 100"
            }))
            return
        } else if (!inputValue) {
            $.post("http://nui-tutorial/error", JSON.stringify({
                error: "There was no value in the input field"
            }))
            return
        }
        $.post("http://nui-tutorial/main", JSON.stringify({
            text: inputValue,
        }));
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