window.onload= function(){
    document.getElementById('GeneraTaula').onclick = function(){
    document.getElementById('taula').innerHTML=" ";
    let n1 = document.getElementById('NumFiles').value;
    if (n1>10 || n1<1 ){
        document.getElementById('taula').innerHTML= "Escriu un num entre 1 i 10"
        return;
    }
    let ciutat = ["Paris", "Londres", "Roma", "Berlin", "Copenhaguen", "Viena", "Lisboa", "Washington_DC", "Otawa", "L'Havana", "Santiago", "Lima", "Montevideo", "Canberra", "Wellington", "Monròvia", "Abuja", "Dakar", "Tunis", "Tokyo", "Seül", "Beijing", "Taipei"];
    let pais = ["França", "UK", "Itàlia", "Alemanya", "Dinamarca", "Àustria", "Portugal", "USA", "Canada", "Cuba", "Xile", "Perú", "Uruguay", "Austràlia", "Nova_ Zelanda", "Libèria", "Nigèria", "Senegal", "Tunísia", "Japó", "Corea_Sud", "Xina", "Taiwan"];
    let continent = ["Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Oceania", "Oceania", "Àfrica", "Àfrica", "Àfrica", "Àfrica", "Àsia", "Àsia", "Àsia"];
    document.getElementById('taula').innerHTML+=
    `<tr><td><center><b>Ciutat</b></center></td><td><center><b>País</b></center></td><td><center><b>Continent</b></center></td></tr>`
    for (x=0;x<n1;x++){
    let random = Math.floor(Math.random() * 22);
    document.getElementById('taula').innerHTML+=
    `<tr><td><center> ${ciutat[random]}</center></td><td><center> ${pais[random]}</center> </td><td><center> ${continent[random]}</center></td></tr>`
    }
    }
}