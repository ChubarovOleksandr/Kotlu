async function submitForm(event) {
    event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
    try {
        // Формируем запрос
        const formData = new FormData(event.target);
        const response = await fetch(event.target.action, {
            method: 'POST',
            body: formData
        });
        // проверяем, что ответ есть
        if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
        // проверяем, что ответ действительно JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw ('Помилка');
        }
        // обрабатываем запрос
        const json = await response.json();
        if (json.result === "success") {
            // в случае успеха
            alert('Повідомлення успішно відправлено!');
        } else {
            // в случае ошибки
            alert('Повідомлення не було надіслано. Помилка при надсиланні листа');
            throw json.info;
        }
    } catch (error) { // обработка ошибки
        console.error(error);
    }
}
