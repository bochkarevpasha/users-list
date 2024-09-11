let users = [
    { id: 1, name: "Иван", surname: "Иванов", age: 25, email: "ivan@example.com", photo: "https://via.placeholder.com/80" },
    { id: 2, name: "Петр", surname: "Петров", age: 30, email: "petr@example.com", photo: "https://via.placeholder.com/80" },
    { id: 3, name: "Сидор", surname: "Сидоров", age: 17, email: "sidor@example.com", photo: "https://via.placeholder.com/80" },
    { id: 4, name: "Мария", surname: "Иванова", age: 22, email: "maria@example.com", photo: "https://via.placeholder.com/80" },
    { id: 5, name: "Анна", surname: "Аннова", age: 28, email: "anna@example.com", photo: "https://via.placeholder.com/80" },
    { id: 6, name: "Дмитрий", surname: "Дмитриев", age: 35, email: "dmitry@example.com", photo: "https://via.placeholder.com/80" },
    { id: 7, name: "Елена", surname: "Еленова", age: 29, email: "elena@example.com", photo: "https://via.placeholder.com/80" },
    { id: 8, name: "Федор", surname: "Федоров", age: 40, email: "fedor@example.com", photo: "https://via.placeholder.com/80" },
    { id: 9, name: "Ксения", surname: "Ксениева", age: 23, email: "ksenia@example.com", photo: "https://via.placeholder.com/80" },
    { id: 10, name: "Николай", surname: "Николаев", age: 31, email: "nikolay@example.com", photo: "https://via.placeholder.com/80" },
    { id: 11, name: "Ольга", surname: "Ольгова", age: 27, email: "olga@example.com", photo: "https://via.placeholder.com/80" },
    { id: 12, name: "Павел", surname: "Павлов", age: 33, email: "pavel@example.com", photo: "https://via.placeholder.com/80" },
    { id: 13, name: "Светлана", surname: "Светлова", age: 26, email: "svetlana@example.com", photo: "https://via.placeholder.com/80" },
    { id: 14, name: "Тимофей", surname: "Тимофеев", age: 34, email: "timofey@example.com", photo: "https://via.placeholder.com/80" },
    { id: 15, name: "Ульяна", surname: "Ульянова", age: 24, email: "ulyana@example.com", photo: "https://via.placeholder.com/80" },
    { id: 16, name: "Филипп", surname: "Филиппов", age: 32, email: "filipp@example.com", photo: "https://via.placeholder.com/80" },
    { id: 17, name: "Христина", surname: "Христинина", age: 21, email: "khristina@example.com", photo: "https://via.placeholder.com/80" },
    { id: 18, name: "Юрий", surname: "Юрьев", age: 36, email: "yuri@example.com", photo: "https://via.placeholder.com/80" },
    { id: 19, name: "Яна", surname: "Янова", age: 20, email: "yana@example.com", photo: "https://via.placeholder.com/80" },
    { id: 20, name: "Алексей", surname: "Алексеев", age: 37, email: "alexey@example.com", photo: "https://via.placeholder.com/80" },
    { id: 21, name: "Борис", surname: "Борисов", age: 38, email: "boris@example.com", photo: "https://via.placeholder.com/80" },
    { id: 22, name: "Виктория", surname: "Викторова", age: 19, email: "viktoria@example.com", photo: "https://via.placeholder.com/80" },
    { id: 23, name: "Георгий", surname: "Георгиев", age: 39, email: "georgy@example.com", photo: "https://via.placeholder.com/80" },
    { id: 24, name: "Дарья", surname: "Дарьева", age: 22, email: "darya@example.com", photo: "https://via.placeholder.com/80" },
    { id: 25, name: "Евгений", surname: "Евгеньев", age: 41, email: "evgeny@example.com", photo: "https://via.placeholder.com/80" },
    { id: 26, name: "Жанна", surname: "Жаннова", age: 23, email: "zhanna@example.com", photo: "https://via.placeholder.com/80" },
    { id: 27, name: "Зинаида", surname: "Зинаидова", age: 24, email: "zinaida@example.com", photo: "https://via.placeholder.com/80" },
    { id: 28, name: "Игнат", surname: "Игнатов", age: 25, email: "ignat@example.com", photo: "https://via.placeholder.com/80" },
    { id: 29, name: "Кирилл", surname: "Кириллов", age: 26, email: "kirill@example.com", photo: "https://via.placeholder.com/80" },
    { id: 30, name: "Лариса", surname: "Ларисова", age: 27, email: "larisa@example.com", photo: "https://via.placeholder.com/80" },
    { id: 31, name: "Михаил", surname: "Михайлов", age: 28, email: "mikhail@example.com", photo: "https://via.placeholder.com/80" },
    { id: 32, name: "Наталья", surname: "Натальева", age: 29, email: "natalya@example.com", photo: "https://via.placeholder.com/80" },
    { id: 33, name: "Олег", surname: "Олегов", age: 30, email: "oleg@example.com", photo: "https://via.placeholder.com/80" },
    { id: 34, name: "Полина", surname: "Полинова", age: 31, email: "polina@example.com", photo: "https://via.placeholder.com/80" },
    { id: 35, name: "Роман", surname: "Романов", age: 32, email: "roman@example.com", photo: "https://via.placeholder.com/80" },
    { id: 36, name: "Сергей", surname: "Сергеев", age: 33, email: "sergey@example.com", photo: "https://via.placeholder.com/80" },
    { id: 37, name: "Татьяна", surname: "Татьянова", age: 34, email: "tatyana@example.com", photo: "https://via.placeholder.com/80" },
    { id: 38, name: "Ульяна", surname: "Ульянова", age: 35, email: "ulyana@example.com", photo: "https://via.placeholder.com/80" },
    { id: 39, name: "Федор", surname: "Федоров", age: 36, email: "fedor@example.com", photo: "https://via.placeholder.com/80" },
    { id: 40, name: "Христина", surname: "Христинина", age: 37, email: "khristina@example.com", photo: "https://via.placeholder.com/80" },
    { id: 41, name: "Юрий", surname: "Юрьев", age: 38, email: "yuri@example.com", photo: "https://via.placeholder.com/80" },
    { id: 42, name: "Яна", surname: "Янова", age: 39, email: "yana@example.com", photo: "https://via.placeholder.com/80" },
    { id: 43, name: "Алексей", surname: "Алексеев", age: 40, email: "alexey@example.com", photo: "https://via.placeholder.com/80" },
    { id: 44, name: "Борис", surname: "Борисов", age: 41, email: "boris@example.com", photo: "https://via.placeholder.com/80" },
    { id: 45, name: "Виктория", surname: "Викторова", age: 42, email: "viktoria@example.com", photo: "https://via.placeholder.com/80" },
    { id: 46, name: "Георгий", surname: "Георгиев", age: 43, email: "georgy@example.com", photo: "https://via.placeholder.com/80" },
    { id: 47, name: "Дарья", surname: "Дарьева", age: 44, email: "darya@example.com", photo: "https://via.placeholder.com/80" },
    { id: 48, name: "Евгений", surname: "Евгеньев", age: 45, email: "evgeny@example.com", photo: "https://via.placeholder.com/80" },
    { id: 49, name: "Жанна", surname: "Жаннова", age: 46, email: "zhanna@example.com", photo: "https://via.placeholder.com/80" },
    { id: 50, name: "Зинаида", surname: "Зинаидова", age: 47, email: "zinaida@example.com", photo: "https://via.placeholder.com/80" },
    { id: 51, name: "Игнат", surname: "Игнатов", age: 48, email: "ignat@example.com", photo: "https://via.placeholder.com/80" },
    { id: 52, name: "Кирилл", surname: "Кириллов", age: 49, email: "kirill@example.com", photo: "https://via.placeholder.com/80" },
    { id: 53, name: "Лариса", surname: "Ларисова", age: 50, email: "larisa@example.com", photo: "https://via.placeholder.com/80" }
];

function renderUsers(userList) {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';

    userList.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'user';

        userElement.innerHTML = `
            <div class="user-photo-container">
                <img src="${user.photo}" alt="${user.id}, ${user.name}, ${user.surname}">
                <div class="upload-photo">
                    <input type="file" id="photo-${user.email}" accept="image/*" onchange="uploadPhoto('${user.email}', this.files[0])">
                    <label for="photo-${user.email}">Загрузить фото</label>
                </div>
            </div>
            <div class="user-info">
                <h2>${user.name} ${user.surname}</h2>
                <p>Возраст: ${user.age}</p>
                <p>Email: ${user.email}</p>
            </div>
            
        `;

        userListElement.appendChild(userElement);
    });
}

function filterUsers() {
    const ageFilter = document.getElementById('ageFilter').value;
    const filteredUsers = users.filter(user => user.age >= ageFilter);
    renderUsers(filteredUsers);
}

function sortUsers() {
    const sortBy = document.getElementById('sortSelect').value;
    users.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'age') {
            return a.age - b.age;
        }
    });
    renderUsers(users);
}

function uploadPhoto(email, file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const user = users.find(user => user.email === email);
        if (user) {
            user.photo = event.target.result;
            renderUsers(users);
        }
    };
    reader.readAsDataURL(file);
}

// Инициализация
renderUsers(users);