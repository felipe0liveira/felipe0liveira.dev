(() => {
    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.toLowerCase();

    if (userLang != 'pt-br') {
        $.getJSON("src/i18n/en-us.i18n.json", function (i18n) {

            // About me Section
            $('.aboutme .title').html(i18n.aboutme.title);

            $('.aboutme .content').html('');
            i18n.aboutme.content.paragraphs.forEach(paragraph => {
                let contentHTML = $('.aboutme .content').html();
                $('.aboutme .content').html(`${contentHTML}<p>${paragraph}</p>`);
            });

            // Curiosities Section
            $('.curiosities .title').html(i18n.curiosities.title);

            $('.curiosities .content').html('');
            i18n.curiosities.content.paragraphs.forEach(paragraph => {
                let contentHTML = $('.curiosities .content').html();
                $('.curiosities .content').html(`${contentHTML}<p>${paragraph}</p>`);
            });

            // Posts Section
            $('.posts .title').html(i18n.posts.title);
        });
    }
})();