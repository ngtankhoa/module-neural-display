// $(document).ready(function () {

//     // get JSON data for Menu Price
//     $.getJSON("https://5be68e5a48c1280013fc3e98.mockapi.io/api/v1/ticketPrice", function (result,statusCode) {
//         console.log(statusCode);
//         $(".number").text(result[0].en.leftTxt.toString());
//         $(".menu").text(result[0].en.rightTxt.toString());
//         $("#type").text(result[0].en.menu[0].name.toString());
//         $("#weekday").text(result[0].en.menu[0].weekday.toString());
//         $("#holiday").text(result[0].en.menu[0].holiday.toString());
//     });

//     // get data for left column
//     var socket = io();
//     socket.on('left column data', function(data){
//         $("#io_data").text(data);
//     });
// });