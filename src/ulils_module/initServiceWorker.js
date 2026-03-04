export function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker зарегистрирован: ', registration);
            })
            .catch(error => {
                console.log('Ошибка регистрации ServiceWorker: ', error);
            });

    }
}
