function abrirProjeto() {
    const projetos = document.querySelectorAll('#Projetos > div');
    const infosProjeto = document.querySelector('#InfosProjeto');
    const nomeProjetoClicado = document.querySelector('#nome-projeto');
    const fotoProjetoClicado = document.querySelector('#foto-projeto');
    const descProjetoClicado = document.querySelector('#desc-projeto');
    const btnRepoProjeto = document.querySelector('#repo-projeto');
    const btnSiteProjeto = document.querySelector('#site-projeto');
    const fecharInfos = document.querySelector('#fechar-btn');

    projetos.forEach(projeto => {
        projeto.addEventListener('click', function (e) {
            const projetoClicado = e.target.closest('div');
            const nomeProjeto = projetoClicado.querySelector('h4').textContent;
            const imgProjeto = projetoClicado.querySelector('img').src;
            const descProjeto = projetoClicado.querySelector('h5').textContent;
            infosProjeto.classList.add('aberto');

            switch (nomeProjeto) {
                case "Currículo":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/elas-na-tech-curriculo';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/elas-na-tech-curriculo/';
                    break;
                case "Cardápio":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/elas-na-tech-cardapio';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/elas-na-tech-cardapio/';
                    break;
                case "ODS da ONU":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/elas-na-tech-desafio-03';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/elas-na-tech-desafio-03/';
                    break;
                case "LP Mais-Tech":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/landing-page-mais-tech';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/landing-page-mais-tech/';
                    break;
                case "LP Academia":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/descodificadas-landing-page';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/descodificadas-landing-page/';
                    break;
                case "Clínica médica":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/dio-projeto-clinica-medica';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/dio-projeto-clinica-medica/';
                    break;
                case "Formulário":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/formulario-registro';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/html-e-css-formulario/';
                    break;
                case "Registro":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/freeCodeCamp-survey-form';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/freeCodeCamp-survey-form/';
                    break;
                case "Ada Lovelace":
                    btnRepoProjeto.href = 'https://nimsaysm.github.io/freeCodeCamp-survey-form/';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/freeCodeCamp-tribute-page/';
                    break;
                case "Starbucks":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/projeto-starbucks';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/projeto-starbucks/';
                    break;
                case "Petshop":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/outsystems-petshopapp';
                    btnSiteProjeto.href = 'https://personal-hytif762.outsystemscloud.com/PreviewInDevices/?IsMobilePreview=True&DeviceName=Smartphone&URL=/PetShopMobile/Homepage?_ts=638240817086216694';
                    break;
                case "Só Receitas":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/outsystems-site-receitas';
                    btnSiteProjeto.href = 'https://personal-hytif762.outsystemscloud.com/SoReceitasWebSite/';
                    break;
                case "TCC AWS":
                    btnRepoProjeto.href = 'https://github.com/nimsaysm/tcc-website-aws-edn';
                    btnSiteProjeto.href = 'https://nimsaysm.github.io/tcc-website-aws-edn/';
                    break;
            }

            infosDoProjeto(nomeProjeto, imgProjeto, descProjeto);
            fecharInfosProjeto();
        });
    });

    function infosDoProjeto(nomeProjeto, imgProjeto, descProjeto) {
        nomeProjetoClicado.innerHTML = nomeProjeto;
        fotoProjetoClicado.src = imgProjeto;
        descProjetoClicado.innerHTML = descProjeto;
    }

    function fecharInfosProjeto(){
        fecharInfos.addEventListener('click', function() {
            infosProjeto.classList.remove('aberto');

        })
    }
}

export { abrirProjeto }