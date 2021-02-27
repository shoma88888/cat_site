// ドロワーメニュー
document.getElementById("menuButton").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
});
// 暗い部分をクリックしても元に戻す
document.getElementById("mask").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("menuButton").classList.toggle("active");
});


// ヘッダー文字アニメーション
const animationTargetElements = document.querySelectorAll(".textAnimation");
for (let i = 0; i < animationTargetElements.length; i++) {
    const targetElement = animationTargetElements[i],
          texts = targetElement.textContent,
          textsArray = [];
    
    targetElement.textContent = "";
    
    //空の配列の中にspanタグで囲った文字列を入れる(空白がある場合、空白の部分はspanタグを付けないようにする)
    for (let j = 0; j < texts.split("").length; j++) {
        const t = texts.split("")[j];
        if (t === " ") {
            textsArray.push(" ");
        } else {
            textsArray.push('<span><span style="animation-delay: ' + ((j * 0.1) + 0.3) + 's;">' + t + '</span></span>')
        } 
    }

    //spanタグで囲った文字列の数分元に戻す
    for (let k= 0; k < textsArray.length; k++) {
        targetElement.innerHTML += textsArray[k];
    }
}


// スクロールアニメーション
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight *0.6
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})

function loaded() {
    document.getElementById("loading").classList.remove("loadActive");
}

// 全ての読み込みが終わったら0.5秒後にactiveクラスを外す
// window.addEventListener("load", function() {
//     loaded
// })

// 5秒後にactiveクラスをはずす
// setTimeout(loaded, 5000)