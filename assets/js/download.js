const table = document.getElementById('download-list');

const data = fetch("/assets/json/download.json")
	.then(response => response.json())
	.then(data => {
		for (let j = 0; j < data.downloads.length; j++) {
			const tbody = document.getElementById('tbody');
			const row = tbody.insertRow();

			for (let i = 0; i < 6; i++) {
				const SERVERNAME = "https://starcatcher.us";
				const cell = row.insertCell(i);
				let content = 0;

				switch (i) {
					case 0:
						content = data.downloads[j].build;
						break;

					case 1:
						content = data.downloads[j].basedVersion;
						break;

					case 2:
						content = data.downloads[j].version;
						break;

					case 3:
						if (data.downloads[j].build == "None") {
							content = data.downloads[j].download_win;
						} else {
							content = SERVERNAME +
								"/TPT/mods/TPTKoreanMod/Older/TPTKoreanMod%20" +
								data.downloads[j].build + ".zip";
						}
						break;

					case 4:
						if (data.downloads[j].build == "None") {
							content = data.downloads[j].download_mac;
						} else {
							content = SERVERNAME +
								"/TPT/mods/TPTKoreanMod/Older/TPTKoreanMod%20" +
								data.downloads[j].build + ".dmg";
						}
						break;

					case 5:
						if (data.downloads[j].build == "None") {
							content = data.downloads[j].download_lin;
						} else {
							content = SERVERNAME +
								"/TPT/mods/TPTKoreanMod/Older/TPTKoreanMod%20" +
								data.downloads[j].build + "%20linux64.zip";
						}
						break;
				}

				if (i <= 2) {
					cell.appendChild(document.createTextNode(content));
				} else {
					if (content == 0) continue;

					cell.insertAdjacentHTML('afterbegin',
						`<a href="` + content + `">
							<div class="material-icons md-light">download</div>
						</a>`
					);
				}
			}
		}
	})
	.catch(error => console.log(error));
