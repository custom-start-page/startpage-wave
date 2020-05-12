function updateClock() {
    var now = new Date();
	hours = now.getHours();
	minutes = now.getMinutes();
	if (minutes < 10) {
		time = hours + ':' + "0" + minutes;
	} else {
		time = hours + ':' + minutes;
	}
	if (hours < 10) {
		time = "0" + time;
	}
    document.getElementById('time').innerHTML = time;
    setTimeout(updateClock, 1000);
}

updateClock();

function setup(data) {
    function createLinks(linkGroups) {
        const outerBox = document.querySelector('.box');

        function createLinkContainer(linkGroup) {
            const linkContainer = document.createElement('div');
            linkContainer.classList.add('box-container');

            const heading = document.createElement('div');
            heading.classList.add('heading');
            heading.innerHTML = linkGroup.name;

            linkContainer.appendChild(heading);

            for (let link of linkGroup.links) {
                const anchor = document.createElement('a');
                anchor.setAttribute('href', link.url);

                anchor.innerHTML = link.name;

                linkContainer.appendChild(anchor);
            }

            return linkContainer;
        }

        for (let linkGroup of linkGroups) {
            const linkContainer = createLinkContainer(linkGroup);

            outerBox.appendChild(linkContainer);
        }
    }

    createLinks(data.linkGroups);
}

new CustomStartStorage().get()
    .then(data => {
        setup(data);
    });
