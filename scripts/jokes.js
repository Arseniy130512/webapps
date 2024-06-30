const jokes = [
    {   
        text: 'Колобок повесился',
        author: 'GorA'
    },
    {
        text: 'Тут пока что пусто',
        author: 'Горбунов Арсений'
    },
    {
        text: '*Шутка*',
        author: 'Арсений Константинович'
    },
    {
        text: '*Едем на шестерке, оп перевернулись, и едем на девятке*',
        author: 'Арсений Константинович'
    },
    {
        text: '*Анекдот*',
        author: 'Арсений Константинович'
    }
]

function getJoke() {
    const number = Math.floor(Math.random()* jokes.length);

    document.getElementById('jokesNum').innerHTML = number + 1;
    document.getElementById('jokesText').innerHTML = jokes [number] ['text'];
}