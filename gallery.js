
let CURRENT_PHOTO = 1;
let slideShowTimer = 0;

loadGallery = () => {
    let stringBuffer = '';
    for (i = 1; i <= 6; i++) {
        stringBuffer += '<div class="photo">'
        stringBuffer += '<img id="photo'+i+'" class="image" onclick="imagePreview(id)" src="screenshots/screen'+i+'.PNG" width="220" height="130" />'
        stringBuffer += '</div>'
    }
    document.getElementById("imagesContainer").innerHTML = stringBuffer;
    switchPhoto();
} 

switchPhoto = () => {
    console.log(CURRENT_PHOTO)
    if (CURRENT_PHOTO < 6) CURRENT_PHOTO++;
    else CURRENT_PHOTO = 1;
    imagePreview("photo" + CURRENT_PHOTO);
    slideShowTimer = setTimeout("switchPhoto()", 4000);
}

imagePreview = (id) => {
    let num = id.charAt(id.length - 1)
    document.getElementById("mainPhoto").src = "screenshots/screen" + num + ".PNG";
    CURRENT_PHOTO = num;
}

window.onload = loadGallery;
