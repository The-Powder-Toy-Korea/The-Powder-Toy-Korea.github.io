const SERVERNAME = "https://starcatcher.us";

const data = fetch("/assets/json/download.json")
	.then(response => response.json())
	.then(data => {
		document.getElementById('stable_windows').setAttribute('href',
			SERVERNAME + "/TPT/mods/TPTKoreanMod/Older/TPTKoreanMod%20"
			+ data.latestStableBuild + ".zip");
		document.getElementById('stable_macos').setAttribute('href',
			SERVERNAME + "/TPT/mods/TPTKoreanMod/Older/TPTKoreanMod%20"
			+ data.latestStableBuild + ".dmg");
		document.getElementById('stable_linux').setAttribute('href',
			SERVERNAME + "/TPT/mods/TPTKoreanMod/Older/TPTKoreanMod%20"
			+ data.latestStableBuild + "%20linux64.zip");

		for (let j = 0; j < data.downloads.length; j++) {
			const tbody = document.getElementById('tbody');
			const row = tbody.insertRow();

			for (let i = 0; i < 6; i++) {	
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
						} else if (data.downloads[j].build < "87") {
							content = SERVERNAME +
								"/TPT/mods/TPTKoreanMod/Older/TPTKoreanMod%20" +
								data.downloads[j].build + "%20linux64.zip";
						} else {
							content = SERVERNAME +
								"/TPT/mods/TPTKoreanMod/Older/TPTKoreanMod%20" +
								data.downloads[j].build + "%20linux64.tar.gz";
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
