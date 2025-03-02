// Animations

async function animations() {
    // First Paragraph
    const firstParagraph = document.getElementsByClassName('para1');
    await new Promise(r => setTimeout(r, 2000)); // 2s wait
    Array.from(firstParagraph).forEach((element) => {
        element.classList.add('vis');
    });

    // Second Paragraph
    const secondParagraph = document.getElementsByClassName('para2');
    await new Promise(r => setTimeout(r, 4000)); // 2s wait
    Array.from(secondParagraph).forEach((element) => {
        element.classList.add('vis');
    });


    // Third Paragraph
    const thirdParagraph = document.getElementsByClassName('para3');
    await new Promise(r => setTimeout(r, 6000)); // 2s wait
    Array.from(thirdParagraph).forEach((element) => {
        element.classList.add('vis');
    });


    // Fourth Paragraph
    const fourthParagraph = document.getElementsByClassName('para4');
    await new Promise(r => setTimeout(r, 8000)); // 2s wait
    Array.from(fourthParagraph).forEach((element) => {
        element.classList.add('vis');
    });
}

animations();