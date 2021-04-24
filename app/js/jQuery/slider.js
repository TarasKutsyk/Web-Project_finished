import {MDCSlider} from '@material/slider';

$(function () {
    $('.image-list-wrapper').hide();

    const slider = new MDCSlider(document.querySelector('.mdc-slider'));

    function increaseLoader(i) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                slider.setValue(i);
                resolve(true);
            }, 100);
        });
    }

    (async function startSliderLoading() {
        for (let i = slider.getValue(); i <= 100; i++) {
            await increaseLoader(i);
        }
        $('.loading-text').text('Loading finished!');
        $('.image-list-wrapper').show();
    })();
})
