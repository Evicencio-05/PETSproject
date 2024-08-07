document.addEventListener('DOMContentLoaded', function() {
    const diagnosis = document.getElementsByClassName('diagnosis');
    const patientFormButton = document.querySelectorAll('button:has(.patientFormImage)');
    const overlay = document.getElementById('popupOverlay');
    const closeButton = document.getElementById('closeButton');
    const popupText = document.getElementById('popupText');
    const popupImage = document.getElementById('popupImage');
    const overlayBlur = document.getElementById('overlayBlur');
    
    const workoutFromOverlay = document.getElementById('workoutFormOverlay');
    const workoutPopup = document.getElementById('workoutPopup');
    
    for (let i = 0; i < diagnosis.length; i++) {
        diagnosis[i].addEventListener('click', function() {
            popupImage.style.display = 'none';
            popupText.textContent = this.value;
            popupText.style.display = 'block'
            openPopup();
        });
    }

    for (let i = 0; i < patientFormButton.length; i++) {
        patientFormButton[i].addEventListener('click', function(e) {
            e.preventDefault();
            const img = this.querySelector('.patientFormImage');
            popupImage.src = img.src;
            popupImage.alt = img.alt;
            popupImage.style.display = 'block';
            popupText.style.display = 'none'
            openPopup();
        });
    }

    function openWorkoutForm() {
        workoutFromOverlay.style.display = 'block';
        workoutPopup.style.display = 'block';
    }

    function openPopup() {
        overlay.style.display = 'block';
        overlayBlur.style.display = 'block';
    }

    function closePopup() {
        overlay.style.display = 'none';
        overlayBlur.style.display = 'none';
    }

    closeButton.addEventListener('click', closePopup);
    overlayBlur.addEventListener('click', closePopup);
    workoutFromOverlay.addEventListener('click', openWorkoutForm);
});