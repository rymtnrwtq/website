const compliments = [
    "Ты сияешь, как звезда.",
    "ТЫ ШЛЮШКА❤️",
    "У тебя невероятно красивые глаза.",
    "Ты очень умная и талантливая.",
    "У тебя прекрасное чувство юмора.",
    "Ты всегда поднимаешь мне настроение.",
    "Твоя улыбка озаряет все вокруг.",
    "Ты очень добрая и отзывчивая.",
    "У тебя удивительная харизма.",
    "Ты настоящая красавица.",
    "Ты невероятно стильная.",
    "Ты всегда выглядишь потрясающе.",
    "Ты очень сильная и смелая.",
    "Твой смех заразителен.",
    "Ты всегда знаешь, что сказать.",
    "Ты настоящая вдохновительница.",
    "Ты очень заботливая.",
    "Твой голос звучит как музыка.",
    "Ты всегда поддерживаешь меня.",
    "Твоя доброта не знает границ.",
    "Ты очень талантлива.",
    "Ты всегда полна энергии.",
    "Ты всегда выглядишь на все сто.",
    "Ты очень мудрая.",
    "Твои советы всегда полезны.",
    "Ты умеешь видеть в людях хорошее.",
    "Ты - настоящая загадка.",
    "Ты всегда остаешься собой.",
    "Ты делаешь этот мир лучше.",
    "Ты просто очаровательна.",
    "Твоя красота вне времени.",
    "Ты всегда стремишься к лучшему.",
    "Ты очень искренняя.",
    "Ты умеешь слушать.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая находка.",
    "Ты очень ответственная.",
    "Ты всегда уверена в себе.",
    "Ты очень терпеливая.",
    "Ты умеешь радоваться мелочам.",
    "Ты всегда в центре внимания.",
    "Ты очень элегантная.",
    "Ты всегда выглядишь стильно.",
    "Ты очень творческая личность.",
    "Ты умеешь удивлять.",
    "Ты очень решительная.",
    "Ты настоящая леди.",
    "Ты всегда на высоте.",
    "Ты очень обаятельная.",
    "Ты всегда готова помочь.",
    "Ты просто идеальна.",
    "Ты всегда искренняя.",
    "Ты настоящая модница.",
    "Ты очень внимательная.",
    "Ты всегда найдешь выход из любой ситуации.",
    "Ты настоящая подруга.",
    "Ты умеешь вдохновлять.",
    "Ты очень искренняя и честная.",
    "Ты всегда открыта для новых идей.",
    "Ты настоящая энтузиастка.",
    "Ты всегда полна жизни.",
    "Ты очень умная и сообразительная.",
    "Ты всегда готова к приключениям.",
    "Ты настоящая оптимистка.",
    "Ты очень заботливая и внимательная.",
    "Ты всегда видишь хорошее в людях.",
    "Ты настоящая красавица.",
    "Ты всегда полна энергии и энтузиазма.",
    "Ты очень искренняя и честная.",
    "Ты настоящая вдохновительница.",
    "Ты всегда стремишься к лучшему.",
    "Ты очень умная и талантливая.",
    "Ты всегда знаешь, что сказать.",
    "Ты настоящая находка.",
    "Ты очень сильная и смелая.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая леди.",
    "Ты всегда остаешься собой.",
    "Ты настоящая загадка.",
    "Ты всегда в центре внимания.",
    "Ты настоящая модница.",
    "Ты всегда готова помочь.",
    "Ты очень мудрая и сообразительная.",
    "Ты всегда на высоте.",
    "Ты настоящая подруга.",
    "Ты всегда видишь хорошее в людях.",
    "Ты очень внимательная и заботливая.",
    "Ты настоящая оптимистка.",
    "Ты всегда полна жизни и энергии.",
    "Ты настоящая энтузиастка.",
    "Ты всегда открыта для новых идей.",
    "Ты настоящая красавица.",
    "Ты всегда полна энергии и энтузиазма.",
    "Ты очень искренняя и честная.",
    "Ты всегда готова к приключениям.",
    "Ты настоящая находка.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая вдохновительница.",
    "Ты прекрасная хозяйка.",
    "Ты всегда поддерживаешь порядок.",
    "Ты очень обаятельная и милая.",
    "Ты всегда готова к новым вызовам.",
    "Ты настоящая артистка.",
    "Ты умеешь удивлять и радовать.",
    "Ты всегда стараешься быть лучше.",
    "Ты всегда готова помочь своим близким.",
    "Ты настоящая фея.",
    "Ты обладаешь прекрасным вкусом.",
    "Ты всегда находишь выход из сложных ситуаций.",
    "Ты умеешь радовать мелочами.",
    "Ты очень внимательная к деталям.",
    "Ты всегда находишь позитив в любой ситуации.",
    "Ты настоящая умница.",
    "Ты всегда знаешь, как поднять настроение.",
    "Ты очень уверенная в себе.",
    "Ты настоящая красавица, и внутри, и снаружи.",
    "Ты всегда стремишься к новым знаниям.",
    "Ты очень креативная.",
    "Ты настоящая звезда.",
    "Ты всегда готова прийти на помощь.",
    "Ты обладаешь невероятным шармом.",
    "Ты всегда на высоте.",
    "Ты очень трудолюбивая.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая красавица.",
    "Ты всегда знаешь, что сказать.",
    "Ты настоящая вдохновительница.",
    "Ты очень умная и талантливая.",
    "Ты всегда поддерживаешь своих близких.",
    "Ты настоящая находка.",
    "Ты очень сильная и смелая.",
    "Ты всегда уверена в себе.",
    "Ты очень ответственная.",
    "Ты всегда находишь выход из любой ситуации.",
    "Ты настоящая оптимистка.",
    "Ты всегда полна энергии и энтузиазма.",
    "Ты очень внимательная и заботливая.",
    "Ты всегда готова к новым вызовам.",
    "Ты настоящая умница.",
    "Ты всегда видишь хорошее в людях.",
    "Ты настоящая леди.",
    "Ты всегда на высоте.",
    "Ты очень искренняя и честная.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая энтузиастка.",
    "Ты всегда готова к новым приключениям.",
    "Ты настоящая фея.",
    "Ты всегда полна жизни и энергии.",
    "Ты очень креативная и талантливая.",
    "Ты всегда знаешь, как поднять настроение.",
    "Ты настоящая красавица.",
    "Ты всегда стремишься к лучшему.",
    "Ты очень мудрая и сообразительная.",
    "Ты всегда готова помочь своим близким.",
    "Ты настоящая находка.",
    "Ты всегда уверена в себе.",
    "Ты очень трудолюбивая и целеустремленная.",
    "Ты всегда на высоте.",
    "Ты настоящая красавица, и внутри, и снаружи.",
    "Ты всегда видишь хорошее в людях.",
    "Ты очень внимательная и заботливая.",
    "Ты всегда готова к новым вызовам.",
    "Ты настоящая умница.",
    "Ты всегда полна энергии и энтузиазма.",
    "Ты настоящая звезда.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая вдохновительница.",
    "Ты очень умная и талантливая.",
    "Ты всегда готова к новым приключениям.",
    "Ты настоящая находка.",
    "Ты всегда знаешь, что сказать.",
    "Ты настоящая фея.",
    "Ты всегда полна жизни и энергии.",
    "Ты очень внимательная и заботливая.",
    "Ты всегда стремишься к лучшему.",
    "Ты настоящая леди.",
    "Ты всегда уверена в себе.",
    "Ты очень мудрая и сообразительная.",
    "Ты всегда на высоте.",
    "Ты настоящая красавица.",
    "Ты всегда знаешь, как поднять настроение.",
    "Ты настоящая красавица, и внутри, и снаружи.",
    "Ты всегда поддерживаешь своих близких.",
    "Ты настоящая умница.",
    "Ты всегда полна энергии и энтузиазма.",
    "Ты настоящая энтузиастка.",
    "Ты всегда готова помочь своим близким.",
    "Ты настоящая красавица.",
    "Ты всегда готова к новым вызовам.",
    "Ты очень внимательная и заботливая.",
    "Ты всегда видишь хорошее в людях.",
    "Ты настоящая фея.",
    "Ты всегда уверена в себе.",
    "Ты очень трудолюбивая и целеустремленная.",
    "Ты всегда на высоте.",
    "Ты настоящая красавица.",
    "Ты всегда готова к новым приключениям.",
    "Ты настоящая находка.",
    "Ты всегда знаешь, что сказать.",
    "Ты настоящая вдохновительница.",
    "Ты всегда полна жизни и энергии.",
    "Ты очень мудрая и сообразительная.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая леди.",
    "Ты всегда стремишься к лучшему.",
    "Ты очень внимательная и заботливая.",
    "Ты всегда готова к новым вызовам.",
    "Ты настоящая красавица, и внутри, и снаружи.",
    "Ты всегда уверена в себе.",
    "Ты очень талантливая и креативная.",
    "Ты всегда на высоте.",
    "Ты настоящая красавица.",
    "Ты всегда знаешь, как поднять настроение.",
    "Ты настоящая находка.",
    "Ты всегда полна энергии и энтузиазма.",
    "Ты очень умная и сообразительная.",
    "Ты всегда готова помочь своим близким.",
    "Ты настоящая энтузиастка.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая умница.",
    "Ты всегда стремишься к лучшему.",
    "Ты очень внимательная и заботливая.",
    "Ты всегда видишь хорошее в людях.",
    "Ты настоящая фея.",
    "Ты всегда уверена в себе.",
    "Ты очень трудолюбивая и целеустремленная.",
    "Ты всегда на высоте.",
    "Ты настоящая красавица.",
    "Ты всегда готова к новым вызовам.",
    "Ты настоящая вдохновительница.",
    "Ты всегда полна жизни и энергии.",
    "Ты очень умная и талантливая.",
    "Ты всегда знаешь, что сказать.",
    "Ты настоящая находка.",
    "Ты всегда готова помочь своим близким.",
    "Ты настоящая энтузиастка.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая леди.",
    "Ты всегда стремишься к лучшему.",
    "Ты очень внимательная и заботливая.",
    "Ты всегда уверена в себе.",
    "Ты настоящая красавица, и внутри, и снаружи.",
    "Ты всегда на высоте.",
    "Ты настоящая звезда.",
    "Ты всегда знаешь, как поднять настроение.",
    "Ты настоящая красавица.",
    "Ты всегда поддерживаешь своих близких.",
    "Ты очень мудрая и сообразительная.",
    "Ты всегда готова к новым приключениям.",
    "Ты настоящая фея.",
    "Ты всегда полна энергии и энтузиазма.",
    "Ты настоящая умница.",
    "Ты всегда видишь хорошее в людях.",
    "Ты всегда готова к новым вызовам.",
    "Ты настоящая красавица.",
    "Ты всегда уверена в себе.",
    "Ты очень внимательная и заботливая.",
    "Ты всегда поддерживаешь своих друзей.",
    "Ты настоящая энтузиастка.",
    "Ты всегда полна жизни и энергии.",
    "Ты всегда стремишься к лучшему.",
    "ТЫ ШЛЮШКА❤️",
    "Ты настоящая вдохновительница."
];


document.getElementById('complimentBtn').addEventListener('click', () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    const complimentText = document.getElementById('complimentText');
    complimentText.textContent = randomCompliment;
});
