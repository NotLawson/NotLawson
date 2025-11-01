// Index animations
async function typing_animation() {
    await typesleep(1000);
    var greeting = ["Hello", "Hiya", "G'day", "Greetings", "你好", "こんにちは", "Bonjour", "Haileo", "Ciao", "Witam", "Hola", "Salutamu"][Math.random() * 12 | 0];
    await heading(greeting + ", " + ip + ". Welcome to my personal website!");
    await typesleep("I'm NotLawson, a 15-year-old student from Queensland, Australia.||");
    await typesleep(500);
    await type("About me")
    await type_speed("..... ", 100);
    await typesleep(500);
    await type("Let's see.");
    await typesleep(500);
    await type("|- I enjoy programming and learning new things.|");
    await type("- I started coding when I was around 10, and I know Python, JavaScript, and Arduino.|");
    await type("- I like messing around with electronics and home automation.|");
    await type("- I've been using Home Assistant for around 5 years now, and have quite a few funky automations.||");
    await typesleep(500);
    await type("I also enjoy gaming, especially Rocket League and Helldiver II.|");
    await type("I upload (or don't) to my ");
    await link("https://www.youtube.com/@NotLawson", "YouTube channel");
    await type(" and stream on ");
    await link("https://www.twitch.tv/notlawson8129", "Twitch");
    await type("|I sometimes do some edits and stuff around the things I'm watching, like Arcane, which I also upload there.||");
    await typesleep(500);
    await type("I play Division 1 Basketball in my age group, and have a inter-school eSport Rocket League Championship.||");
    await typesleep(500);
    await type("Uhh, but that's about it really. Hit me up at |");
    await link("mailto:lawson.conallin@gmail.com", "lawson.conallin@gmail.com");
    await type(" if you need anything, or my Discord (NotLawson).||")
    await typesleep(500);
    await type("Have fun poking around my website, I guess?||");
    await typesleep(500);
    await type("   - NotLawson");
    SKIP = true;
    await type("||(top tip: press 's' to skip the animations on any page.)|")
} 

while (ip === null) {}; // wait for IP
typing_animation();