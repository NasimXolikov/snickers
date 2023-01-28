
$(document).ready(function () {
    let snick1 = document.getElementById('snick1')
    let firstImg = document.getElementById('first-img')
    let redBtn = document.querySelector('#redBtn');
    let blueBtn = document.querySelector('#blueBtn');
    let blackBtn = document.querySelector('#blackBtn');
    let yellowBtn = document.querySelector('#yellowBtn');
    let purpleBtn = document.querySelector('#purpleBtn');

    let black = true;


    function changeSnickers() {
        let blackSnickerses = ['img/FirstSnickers1.png', 'img/FirstSnickers2.png', 'img/FirstSnickers3.png', 'img/FirstSnickers4.png', 'img/FirstSnickers5.png',];

        if (black == true) {
            snick1.innerHTML = `<img id="first-img" src="${blackSnickerses[0]}" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
    data-aos-easing="ease-in-sine" data-snick="black">`
        }

        redBtn.addEventListener('click', function () {
            snick1.innerHTML = `<img id="first-img" src="${blackSnickerses[1]}" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
        data-aos-easing="ease-in-sine" data-snick="black">`;
        });

        blueBtn.addEventListener('click', function () {
            snick1.innerHTML = `<img id="first-img" src="${blackSnickerses[2]}" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
        data-aos-easing="ease-in-sine" data-snick="black">`;
        });
        yellowBtn.addEventListener('click', function () {
            snick1.innerHTML = `<img id="first-img" src="${blackSnickerses[3]}" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
        data-aos-easing="ease-in-sine" data-snick="black">`;
        });
        blackBtn.addEventListener('click', function () {
            snick1.innerHTML = `<img id="first-img" src="${blackSnickerses[0]}" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
        data-aos-easing="ease-in-sine" data-snick="black">`;
        });
        purpleBtn.addEventListener('click', function () {
            snick1.innerHTML = `<img id="first-img" src="${blackSnickerses[4]}" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
        data-aos-easing="ease-in-sine" data-snick="black">`;
        });



        
    }

    changeSnickers();




































    ///////////////Snickers Color changing


    // redBtn.addEventListener('click', function () {
    //     if (firstImg.dataset.snick == '') {
    //         alert(firstImg.dataset.snick)
    //         snick1.innerHTML = `<img id="first-img" src="img/FirstSnickers2.png" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
    // data-aos-easing="ease-in-sine" data-snick="black">`;
    //     } 
    // });

    // blueBtn.addEventListener('click', function () {
    //     if (firstImg.dataset.snick == 'black') {

    //         snick1.innerHTML = `<img id="first-img" src="img/FirstSnickers3.png" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
    // data-aos-easing="ease-in-sine" data-snick="black">`;
    //     }
    // });

    // blackBtn.addEventListener('click', function () {
    //     if (firstImg.dataset.snick == 'black') {

    //         snick1.innerHTML = `<img id="first-img" src="img/FirstSnickers1.png" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
    // data-aos-easing="ease-in-sine" data-snick="black">`;
    //     }
    // });

    // yellowBtn.addEventListener('click', function () {
    //     if (firstImg.dataset.snick == 'black') {

    //         snick1.innerHTML = `<img id="first-img" src="img/FirstSnickers4.png" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
    // data-aos-easing="ease-in-sine" data-snick="black">`;
    //     }
    // });
    // purpleBtn.addEventListener('click', function () {
    //     if (firstImg.dataset.snick == 'black') {
    //         snick1.innerHTML = `<img id="first-img" src="img/FirstSnickers5.png" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
    // data-aos-easing="ease-in-sine" data-snick="black">`;
    //     }
    // });








    ///////////////////////////// Snickers type changing












    //     let cardOfCnickers1 = document.getElementById('card-of-cnickers1');

    //     cardOfCnickers1.addEventListener('click', function () {
    //         snick1.innerHTML = `<img id="first-img" src="img/cardBig1.png" alt="" data-aos="fade-right" data-aos-offset="300" data-aos-delay="500"
    //     data-aos-easing="ease-in-sine" data-status="1">`;
    //         console.log(snick1)

    //     })
});