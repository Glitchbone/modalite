/*(function() {

    var $modal = $('.modal');
    var $modalBody = $modal.find('.modal__body');

    $('.open-modal').on('click', function(e) {

        e.preventDefault();

        var target = $(this).attr('href');
        var $modalContent = $(target).html();

        $modalBody.html($modalContent);

        //$modal.fadeIn('fast');

        fadeIn($modal[0]);

    });

    $('.close-modal').on('click', function(e) {

        e.preventDefault();

        $modal.fadeOut('fast', function() {
            $modalBody.empty();
        });

    });

    function fadeIn(el) {

        el.style.opacity = 0;
        el.style.display = 'block';

        var last = +new Date();
        var tick = function() {

            el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
            last = +new Date();

            if (+el.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }

        };

        tick();
    }

}());
*/
