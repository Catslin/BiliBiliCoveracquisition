// 找到card-left的元素
var cardLeft = document.querySelector('.card-left');

// 获取card-right的内容
var cardRightContent = document.querySelector('.card-right');

// 将card-right的内容赋值给card-left的内容
cardLeft.innerHTML = cardRightContent.innerHTML;