// Index animations
async function typing_animation() {
    await heading("Home");
    await typesleep(500);
    await type("Welcome, "+ ip + ", to my personal website!|");
    await type("I'm NotLawson, a 15-year-old student from Queensland, Australia.||");
    await typesleep(500);
    await type("About me")
    await type_speed(".....|", 100);
    await typesleep(500);
    await type("Let's see. I enjoy coding, gaming, and learning new things.|");
    await type("I started coding when I was around 10, and I know Python, JavaScript, and Arduino.|");
    await type("I like messing around with electronics and home automation.|");
    await type("I've been using Home Assistant for around 5 years now, and have quite a few funky automations.||");
    await typesleep(500);
    await type("I also enjoy gaming, especially Rocket League and Helldiver II.|");
    await type("I upload semi-regularly to my ");
    await link("https://www.youtube.com/@NotLawson", "YouTube channel");
    await type(" and stream on ");
    await link("https://www.twitch.tv/notlawson8129", "Twitch");
    await type("|I also do some edits and stuff around the things I'm watching, like Arcane, which I also upload there.||");
    await typesleep(500);
    await type("I play Division 1 Basketball in my age group, and have a inter-school eSport Rocket League Championship.||");
    await typesleep(500);
    await type("Uhh, but that's about it really.|");
    await typesleep(500);
    await type("Check out my projects page to see some of the things I've made, and the assets page for some of the code that brings this page to life.||");
    await typesleep(500);
    await type("   - NotLawson");
} 

typing_animation();