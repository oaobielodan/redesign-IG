function updateContentDiv (e) {
    const target_div = e.target;
    const background = target_div.style.backgroundImage;
    const match = background.match(/^url\(["']?(.*?)["']?\)$/);
    if (match) {
      nn.get('.content > img').src = match[1];

    }
}

function setupImgListeners () {
    nn.getAll('.preview > div').forEach(div => {
      div.on('click', updateContentDiv);
    });
}
  
nn.on('load', setupImgListeners);

function displayDate() {
    let current_date = new Date();
    let month = String(current_date.getMonth() + 1).padStart(2, "0");
    let day = String(current_date.getDate()).padStart(2, "0");
    let year = String(current_date.getFullYear()).slice(-2);

    document.getElementById("month").innerHTML = month;
    document.getElementById("day").innerHTML = day;
    document.getElementById("year").innerHTML = year;
}

nn.on('load', displayDate);