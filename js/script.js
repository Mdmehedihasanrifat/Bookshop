$(document).ready(function () {









    $('.accordian-writes').click(function (event) {



        console.log(event.target.id.split('-'));

            if(event.target.id.split('-')[0]==='btn'){

                $("#book-1").attr('src','img/writers/'+event.target.id.split('-')[1]+'-book1.jpg');


                $("#book-2").attr('src','img/writers/'+event.target.id.split('-')[1]+'-book2.jpg')
            }
    })





})

































