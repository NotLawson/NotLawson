// Index animations
async function typing_animation() {
    await typesleep(1000);
    var greeting = ["Hello", "Hiya", "G'day", "Greetings", "你好", "こんにちは", "Bonjour", "Haileo", "Ciao", "Witam", "Hola", "Salutamu"][Math.random() * 12 | 0];
    await heading(greeting + ", " + ip + ". Welcome to my personal website!");
    await typesleep("I'm NotLawson, a 15-year-old student from Queensland, Australia.||");
    await typesleep(500);
    await type("About me")
    await type_speed("..... ", 300);
    await typesleep(500);
    await type("Let's see.|");
    await typesleep(500);
    await type(" - I love computers (obviously) and electronics|");
    await typesleep(500);
    await type(" - I enjoy gaming, specifically Rocket League and Helldivers II.|");
    await typesleep(500);
    await type(" - I enjoy making edits and AMVs, specifically for Arcane (deal with it) on my ");
    await link("https://www.youtube.com/@NotLawson", "YouTube channel.");
    await typesleep(500);
    await type("||Thats about it. Have fun poking around my website, I guess.||");
    await typesleep(500);
    await type(" - NotLawson");
    SKIP = true;
    await type("||(top tip: press 's' to skip the animations on any page.)|")
} 

while (ip === null) {}; // wait for IP
typing_animation();