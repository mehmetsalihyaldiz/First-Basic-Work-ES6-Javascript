let user = document.getElementById('user')
fetch('http://localhost:3000/api/v1/users/get', {
    method: 'get',
    headers: new Headers({
        'Authorization': 'TokenTest',
    })
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => error.response.data)
    .finally(() => console.log('Cleared!'))