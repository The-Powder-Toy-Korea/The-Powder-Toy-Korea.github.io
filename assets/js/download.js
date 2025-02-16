const table = document.getElementById('download-list');

const data = fetch("assets/json/download.json")
	.then(response => response.json())
	.then(data => {
		for (let j = 0; j < data.downloads.length; j++) {
			const tbody = document.getElementById('tbody')
			const row = tbody.insertRow();

			for (let i = 0; i < 6; i++) {
				const cell = row.insertCell(i);
				let content = 0;

				switch (i) {
					case 0: content = data.downloads[j].build;        break;
					case 1: content = data.downloads[j].basedVersion; break;
					case 2: content = data.downloads[j].version;      break;
					case 3: content = data.downloads[j].download_win; break;
					case 4: content = data.downloads[j].download_mac; break;
					case 5: content = data.downloads[j].download_lin; break;
				}

				if (i <= 2) {
					cell.appendChild(document.createTextNode(content));
				} else {
					if (content == 0) continue;

					if (data.downloads[j].unpackaged) {
						cell.insertAdjacentHTML('afterbegin',
							`<div class="tooltip">
								<a href="` + content + `">
									<div class="material-icons md-light">download</div>
									<div class="tooltip-text">패키징되지 않은 버전이 다운로드됩니다.</div>
								</a>
							</div>`
						);
					} else {
						cell.insertAdjacentHTML('afterbegin',
							`<a href="` + content + `">
								<div class="material-icons md-light">download</div>
							</a>`
						);
					}
				}
			}
		}
	})
	.catch(error => console.log(error));
