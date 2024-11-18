// 获取雪花容器和倒计时元素
const snowflakesContainer = document.getElementById('snowflakes');
const countdownElement = document.getElementById('countdown');

// 生成随机雪花
function createSnowflake(x, y) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = ['❅', '❆', '❄'][Math.floor(Math.random() * 3)];
    
    // 设置雪花的起始位置为鼠标点击位置
    snowflake.style.left = `${x}px`;
    snowflake.style.top = `${y}px`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    snowflake.style.fontSize = `${Math.random() * 0.5 + 1}em`;

    // 将雪花添加到容器中
    snowflakesContainer.appendChild(snowflake);

    // 雪花结束动画后自动移除
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// 持续生成飘雪效果
setInterval(() => createSnowflake(Math.random() * window.innerWidth, -10), 200);

// 监听鼠标点击事件生成雪花
document.addEventListener('click', (event) => {
    createSnowflake(event.clientX, event.clientY);
});

// 倒计时返回首页
let countdown = 5;
const countdownInterval = setInterval(() => {
    countdown -= 1;
    countdownElement.textContent = `${countdown}秒后将返回首页...`;

    if (countdown <= 0) {
        clearInterval(countdownInterval);
        window.location.href = '/';  // 返回首页
    }
}, 1000);
