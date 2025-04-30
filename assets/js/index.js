// Index animations
async function typing_animation() {
    //await sleep(3000);
    await type("|CONNECTING");
    await type_speed(".......", 300);
    await type("|")
    await type("Connection Successful. ");
    await sleep(500);
    await type("Starting Transmission.")
    await sleep(100);
    await type("|FROM: Lawson|TO: "+ip)
    await type_speed("|---------------------------------------------|", 10);
    await sleep(300);
    await type("|Hi there, "+ip+".||")
    await type("My name is Lawson.||")
    await sleep(100);
    await type("I'm a highschool student living in Australia. I have an interest programming in general, home automation, electronics and gaming (ofc). ")
    await type("I have a ");
    await link("https://youtube.com/notlawson", "Youtube");
    await type(" channel, where I upload mostly gaming content, Rocket League and Helldivers 2.|| ")
    await sleep(500);
    await type("What have I done so far? ");
    await sleep(300);
    await type("Well, let's see:| ");
    await list([
        "I've won the 2024 Premiers Coding Challenge",
        "I made a pretty nifty Rainfall tracker",
        "I've had a lot of ideas",
        "I made this website, I guess."
    ]);
    await type("|But yeah. Welcome to my website.|Don't worry, the rest of the website is better than this. Look, I'll even show you a nav bar.||");
    await sleep(1000);
    document.getElementById("navbar").removeAttribute("hidden");
    await sleep(300);
    await type("Tada!|| ");
    await sleep(300);
    await type("Now, go check out my projects and abitions. The Assets page allows you to view the contents of each file used in this website, in case you want to replicate what I've done here.||")
    await type("       - Lawson");
    await type_speed("|---------------------------------------------|", 10);
    await type("Transmission ended. Connection ended.|")
    if (SKIP) {
        await type("Do you want to view this animation again?|");
        document.getElementById("restart").removeAttribute("hidden");
    }
} 

typing_animation();