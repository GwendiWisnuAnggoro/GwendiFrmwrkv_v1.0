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