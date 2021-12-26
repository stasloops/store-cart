import React from 'react'
import GameItem from '../../components/game-item/GameItem'

const HomePage = () => {
        const GAMES = [
        {
            image: '/img/battlefield_2042.jpg',
            title: 'Battlefield 2042',
            genres: ['Экшен', 'Шутер', 'Война'],
            video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
            price: 2433,
            id: 2,
            description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
        },
        {
            image: 'https://picfiles.alphacoders.com/445/thumb-445116.jpg',
            title: 'Cyberpunk 2077',
            genres: ['Ролевая игра', 'Экшен', 'Киберпанк'], 
            video: 'https://www.youtube.com/embed/qIcTM8WXFjk',
            price: 2770,
            id: 9,
            description: 'Cyberpunk 2077 – компьютерная игра от авторов серии The Witcher, созданная по мотивам настольной ролевой игры Cyberpunk 2020 Майка Пондсмита. Игрока отправляют в 2077 год, где созданный им персонаж должен выжить в футуристическом городе Найт-Сити, Калифорния. Задача не из простых — мегаполис раздирают на части войны банд, интриги транснациональных корпораций и бытовые конфликты из-за вопиющего социального неравенства.'
        },
        {
            image: '/img/forza_5.jpeg',
            title: 'Forza Horizon 5',
            genres: ['Гонки', 'Симулятор', 'Открытый мир'],
            price: 2343,
            video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
            id: 1,
            description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
        },
        {
            image: 'https://cdn.igromania.ru/mnt/articles/f/7/6/5/2/e/31675/preview/4ac859f316db937b_848x477.jpg',
            title: 'Resident Evil Village',
            genres: ['Экшен', 'Хоррор на выживание'], 
            video: 'https://www.youtube.com/embed/CNpIfP4vtrE',
            price: 1999,
            id: 7,
            description: 'Компьютерная игра в жанре survival horror. Часть серии Resident Evil и продолжение Resident Evil 7: Biohazard. В качестве разработчика и издателя игры выступает компания Capcom.'
        },
        {
            image: '/img/gta_v.jpeg',
            title: 'Grand Theft Auto V',
            genres: ['Открытый мир', 'Экшен'],
            video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
            price: 789,
            id: 4,
            description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
        },
        {
            image: '/img/rainbow_siege.jpeg',
            title: 'Tom Clancy\'s Rainbow Six® Siege',
            video: 'https://www.youtube.com/embed/6wlvYh0h63k',
            genres: ['Тактика', 'Шутер'],
            price: 982,
            id: 5,
            description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
        },
        {
            image: 'https://images7.alphacoders.com/115/thumbbig-1156913.webp',
            title: 'FIFA 22',
            genres: ['Спортивная игра', 'Футбол'], 
            video: 'https://www.youtube.com/embed/o1igaMv46SY',
            price: 3990,
            id: 8,
            description: 'FIFA 22 — новая часть серии футбольных симуляторов от канадской студии EA Sports. В продолжении вас ожидает обновленный сезон с реальной статистикой игроков, геймплейные нововведения и доработанные режимы с захватывающей сюжетной историей.'
        },
        {
            image: '/img/assassins_creed_valhalla.png',
            title: 'Assassin’s Creed Valhalla',
            genres: ['Паркур', 'РПГ', 'Открытый мир'],
            video: 'https://www.youtube.com/embed/ssrNcwxALS4',
            price: 2863,
            id: 6,
            description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
        },
        {
            image: '/img/life_is_strange_true_colors.jpeg',
            title: 'Life is Strange True Colors',
            genres: ['Глубокий сюжет', 'Протагонистка'],
            video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
            price: 3021,
            id: 3,
            description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
        },
    ]

    return (<>
        {
            GAMES.map(item => (
                <GameItem id={item.id} item={item} key={`${item.title}_${item.id}`}/>
            ))
        }
</>)
}
export default HomePage
