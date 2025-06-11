// Projects animation
async function typing_animation() {
    await heading("Projects")
    await typesleep("500")
    await type("Over the course of my coding (pre?) career, I have made a couple of different projects.|")
    await type("Some of them have been for school, while others (read: most) have just been random thoughts that came to me and I thought, 'huh, that seems like a good idea'.|")
    await type("Here is a brief list of some of them, in no particular order.|")
    await sleep(1000);
    document.getElementById("projects").classList.remove("invisible");
    document.getElementById("projects").classList.add("visible");
} 
typing_animation();