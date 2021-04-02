import {MDCSlider} from '@material/slider';

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
    document.querySelector('.loading-text').innerText = 'Loading finished!';
    document.querySelector('.image-list-wrapper').setAttribute('style', 'display: flex')
})();
