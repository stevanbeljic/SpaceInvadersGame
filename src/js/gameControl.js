document.addEventListener("DOMContentLoaded", () => {
    let user = document.getElementById('user');

    const rayObj = {
        
    }

    if (user) {
        user.focus();

        document.onkeydown = readKey;

        const moveLeft = () => {
            let rect = user.getBoundingClientRect();
            if(rect.left - 20 < 0) return;

            user.style.transform = `translateX(${getCurrentTranslateX() - 20}px)`;
        };

        const moveRight = () => {
            let rect = user.getBoundingClientRect();
            if(rect.right + 20 > window.innerWidth) return;
            user.style.transform = `translateX(${getCurrentTranslateX() + 20}px)`;
        };

        function getCurrentTranslateX() {
            const style = window.getComputedStyle(user);
            const matrix = new DOMMatrixReadOnly(style.transform);
            return matrix.m41;
        }

        function getCurrentTranslateY() {
            const style = window.getComputedStyle(user);
            const matrix = new DOMMatrixReadOnly(style.transform);
            return matrix.m42;
        }

        function shoot() {
            const ray = new Image(50, 50);
            ray.src = 'images/ray.png';
            ray.style.position = 'absolute';
            ray.style.left = `${user.getBoundingClientRect().left}px`;
            ray.style.top = `${user.getBoundingClientRect().top}px`;
            field.append(ray);
        }

        function readKey(e) {
            e = e || window.Event;

            if (e.keyCode == '37') {
                moveLeft();
            } else if (e.keyCode == '39') {
                moveRight();
            } else if (e.keyCode == '40') {
                shoot();
            }
        }
    } else {
        console.error("Element with ID 'user' not found.");
    }
});
