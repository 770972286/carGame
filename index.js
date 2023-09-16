const img = document.querySelector('img')
const speed = document.querySelector('#speed')
const car = document.querySelector('#car')
// 给车的类型加一个监听
// 监听速度
speed.value = localStorage.getItem('carSpeedValue')
speed.addEventListener('change', function () {
    localStorage.setItem('carSpeedValue', speed.value)
    // console.log(localStorage.getItem('carSpeedValue'))
}
)
// 监听车的类型
let carKind = localStorage.getItem('carKind')
// console.log(carKind);
car.value = carKind
// console.log(car.value ===  '');
if(car.value ===  ''){
    img.src = './truck.png'
}else{
    img.src = `./${carKind}.png`
}
car.addEventListener('change', function () {
    if (car.value === 'motor') {
        img.src = './motor.png'
    }
    if (car.value === 'tractor') {
        img.src = './tractor.png'
    }
    if (car.value === 'sportCar') {
        img.src = './sportCar.png'
    }
    if (car.value === 'batteryMotor') {
        img.src = './batteryMotor.png'
    }
    if (car.value === 'bike') {
        img.src = './bike.png'
    }
    if (car.value === 'truck') {
        img.src = './truck.png'
    }
    localStorage.setItem('carKind', car.value)
    // console.log(car.value);
})
let LRValue = 0
let TBValue = 0
// 添加本地储存 因为外部访问不了局部作用域 所以可以把 positionLRValue 作为本地储存
let x = localStorage.getItem('x')
// 初始化
// console.log(x);
console.log(x);
console.log(x === null ||'NaNpx');
img.style.marginLeft = x
if (x === null ||'NaNpx') {
    x = 1
}

let y = localStorage.getItem('y')
img.style.marginTop = y
if (y ===  null||'NaNpx') {
    y = 1
}

// 这里注意keypress和keydown的细微差别（前者不能返回上下左右键）
// ↑键38 ↓键40 左键37 右键39
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 39) {
        // 这里注意39必须为数据而不是字符串
        // 这里注意1+2=12  
        // 比须用parseint转换
        // 旋转图片
        img.className = ''
        img.className = 'right'
        LRValue += parseInt(speed.value)
        // 刷新页面不丢失
        // 添加本地储存 因为外部访问不了局部作用域 所以可以把 positionLRValue 作为本地储存
        let positionLRValue = LRValue + parseInt(x) + 'px'
        img.style.marginLeft = positionLRValue
        localStorage.setItem('x', positionLRValue)
        // console.log(parseInt(LRValue));
        // console.log(speed.value);
        // console.log(img.style.marginLeft);
        // let speedValue = (LRValue++) *(speed.value)
        // 这里是获取了select中的速度值
    }
    if (e.keyCode === 37) {
        // img.style.transformRotate = (180 +'deg')
        // 旋转图片
        img.className = ''
        img.className = 'left'
        LRValue -= parseInt(speed.value)
        // img.style.marginLeft = LRValue + 'px'
        let positionLRValue = LRValue + parseInt(x) + 'px'
        img.style.marginLeft = positionLRValue
        localStorage.setItem('x', positionLRValue)
    }
    if (e.keyCode === 38) {
        img.className = ''
        img.className = 'top'
        TBValue -= parseInt(speed.value)
        let positionTBValue = TBValue + parseInt(y) + 'px'
        img.style.marginTop = positionTBValue
        localStorage.setItem('y', positionTBValue)
    }
    if (e.keyCode === 40) {
        img.className = ''
        img.className = 'bottom'
        TBValue += parseInt(speed.value)
        // img.style.marginTop = TBValue + 'px'
        let positionTBValue = TBValue + parseInt(y) + 'px'
        img.style.marginTop = positionTBValue
        localStorage.setItem('y', positionTBValue)
    }

})

