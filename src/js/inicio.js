const inicio = function() {
    const main = document.querySelector('main')

    const sectionSobre = document.createElement('section')
    sectionSobre.classList.add('containerAbout')
    const hello = document.createElement('h3')
    hello.innerHTML = 'Hello Word!!'
    sectionSobre.appendChild(hello)
    const nome = document.createElement('h2')
    nome.innerHTML = 'Ola, eu me chamo Guilherme Colhado de Souza'
    sectionSobre.appendChild(nome)
    const sobreMim = document.createElement('p')
    sobreMim.classList.add('textAbout')
    sobreMim.innerHTML = 'Eu sempre fui muito apegado ao mundo da tecnologia, usava muito como uma fuga do mundo real, ao fazer 18 anos tive que escolher uma faculdade. <br> Escolhi Ciencias da computação sem saber muita coisa. Após descobrir mais sobre esse mundo, resolvi trocar de curso, hoje faço Analise e desenvolvimento de sistemas, estou estudando atualmente para ser um Full-Stack, mas por enquanto estou focando somente em Front-End pela Kenzie Academy Brasil. Sei bastante de html, css e javascript, ainda não sei nenhum framework, estou estudando atualmente o React'
    sectionSobre.appendChild(sobreMim)
    const cidade = document.createElement('p')
    cidade.classList.add('city')
    cidade.innerHTML = 'Moro em São Paulo - SP'
    sectionSobre.appendChild(cidade)
    const abilidades = document.createElement('div')
    const html = document.createElement('article')
    html.classList.add('html')
    const iconHtml = document.createElement('i')
    iconHtml.classList.add('fa-brands')
    iconHtml.classList.add('fa-html5')
    html.appendChild(iconHtml)
    html.innerHTML += 'HTML'
    abilidades.appendChild(html)
    const css = document.createElement('article')
    css.classList.add('css')
    css.innerHTML = 'CSS'
    abilidades.appendChild(css)
    const js = document.createElement('article')
    js.classList.add('js')
    js.innerHTML = 'JavaScript'
    abilidades.appendChild(js)
    const git = document.createElement('article')
    git.classList.add('git')
    git.innerHTML = 'Git'
    abilidades.appendChild(git)
    sectionSobre.appendChild(abilidades)

    const aprendendendo = document.createElement('div')
    const React = document.createElement('article')
    main.appendChild(sectionSobre)
}