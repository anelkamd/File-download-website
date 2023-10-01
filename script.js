// codin by Anelka_dev 
const urlInput = document.querySelector("input");
const downloaderBtn = document.querySelector("button");

downloaderBtn.addEventListener("click", async () => {
    try {
        const response = await response fetch(urlInput.value);
        const file = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = new Date().getTime();
        link.click();
    } catch(error){
        alert("Telechargement Annuler")
    }
});