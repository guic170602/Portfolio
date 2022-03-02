const portfolio = function(sites) {
    const projetos = document.querySelector('#projetos')
    let seg = 1
    sites.forEach(site => {
        const projeto = document.createElement('a')
        projeto.href = site.link
        projeto.target = '_blank'
        projeto.classList.add('projeto')
        const img = document.createElement('img')
        img.src = site.image
        projeto.appendChild(img)
        const div = document.createElement('div')
        divTitleInfo = document.createElement('div')
        const title = document.createElement('h3')
        title.innerHTML = site.title
        divTitleInfo.appendChild(title)
        const info = document.createElement('p')
        info.innerHTML = site.info
        divTitleInfo.appendChild(info)
        div.appendChild(divTitleInfo)
        const linkGitHub = document.createElement('a')
        linkGitHub.href = site.github
        linkGitHub.target = '_blank'
        const icon = document.createElement('i')
        icon.classList.add('fab')
        icon.classList.add('fa-github')
        linkGitHub.appendChild(icon)
        div.appendChild(linkGitHub)
        projeto.appendChild(div)
        projeto.style.animation = `popUp 1s ${seg}s, fadeIn 1s ${seg}s forwards`
        seg += 0.5
        projetos.appendChild(projeto)
    });
}