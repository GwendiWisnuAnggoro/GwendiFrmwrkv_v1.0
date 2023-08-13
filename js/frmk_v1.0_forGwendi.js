function ClassListTambah(sasaran, classList){
	return sasaran.classList.add(classList);
}
function ClassListHapus(sasaran, classList){
	return sasaran.classList.remove(classList);
}
function Toggle(sasaran, classT){
	return sasaran.classList.toggle(classT);
}

function LStorageTambahItem(key, isi){
	return localStorage.setItem(key, isi);
}

function AmbilItemDariLStorage(key){
	return localStorage.getItem(key);
}

function innerHTMLSamaDengan(tujuan, isi){
	return tujuan.innerHTML = isi;
}
function innerHTMLTambahSamaDengan(tujuan, isi){
	return tujuan.innerHTML += isi;
}
function innerHTMLKurangSamaDengan(tujuan, isi){
	return tujuan.innerHTML -= isi;
}



function innerTextSamaDengan(tujuan, isi){
	return tujuan.innerText = isi;
}
function innerTextTambahSamaDengan(tujuan, isi){
	return tujuan.innerText += isi;
}
function innerTextKurangSamaDengan(tujuan, isi){
	return tujuan.innerText -= isi;
}
function Log(isi){
	return console.log(isi);
}
function notif(isi){
	return alert(isi);
}
function panggilElementDariID(id){
		return document.getElementById(id);
}

function panggilElementDariKelas(kelas){
		return document.getElementsByClassName(kelas);
}
function panggilElementDariTag(tag){
		return document.getElementsByTagName(tag);
}
function panggilDenganQuery(name){
	return document.querySelector(name)
}
function panggilSemuaQuery(name){
	return document.querySelectorAll(name)
}
function tambahEvent(nama, acara, fungsi){
	return nama.addEventListener(acara, fungsi);
}


class AmbilId {
	constructor(link){
		this.result = this.Ambil(link)
	}

	Ambil(link){
		const regex = /\/d\/([a-zA-Z0-9-_]+)/;
		const match = link.match(regex);
		if (match && match[1]) {
			return match[1];
		} else {
			return null;
		}
	}
}


class AmbilData {
    constructor(sheetId, nameRows){
        this.result;

        setInterval(()=>{
            this.GetData(sheetId.toString(), nameRows.toString())

        },500)

    }

    GetData(id, nama){
        const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json&tq=SELECT ${nama}`
        fetch(url)
        .then(res => res.text())
        .then(result => {
            const json = JSON.parse(result.substr(47).slice(0, -2));
            const rows = json.table.rows;
            const data = [];

            rows.forEach((e, i) => {
                const dataObject = {
                    value: e.c[0].v,
                    rows: (i+1),
                }
                data.push(dataObject)
            });

            this.result = data;
        })
        .catch(err =>{
            console.error(err)
        })
    }
}
