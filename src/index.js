document.addEventListener('DOMContentLoaded', function() {
    // Pop up processing
    const diagnosis = document.getElementsByClassName('diagnosis');
    const overlay = document.querySelector('.overlay-container');
    const closeButton = document.getElementById('closeButton');
    const popup = document.querySelector ('.popup-box')
    const popupText = document.getElementById('popupText');
    const popupImage = document.getElementById('popupImage');

    function openPopup() {
        if (overlay) overlay.style.display = 'block';
    }

    function closePopup() {
        if (overlay) overlay.style.display = 'none';
    }

    function preventBubbling(event) {
        event.stopPropagation();
    }

    // Event listeners for diagnosis buttons
    for (let i = 0; i < diagnosis.length; i++) {
        diagnosis[i].addEventListener('click', function() {
            if (popupImage) popupImage.style.display = 'none';
            if (popupText) {
                popupText.textContent = this.value;
                popupText.style.display = 'block';
            }
            openPopup();
        });
    }

    if (window.location.pathname === '/src/sheet.html') {
        const createNewWorkout = document.getElementById('createNewWorkout');
        if (createNewWorkout) {
            createNewWorkout.addEventListener('click', openPopup);
        }
    }
    
    if (popup) {
        popup.addEventListener('click', preventBubbling);
    }

    if (overlay) {
        overlay.addEventListener('click', closePopup);
    }

    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }

    // End pop up processing



    // Form submission and creation
    const workoutForm = document.querySelector(".workout-form-contents");
    const workoutTable = document.querySelector(".workoutTable tbody");

    // Prevent the form from submitting normally
    if (workoutForm) {
        workoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get values
            const name = document.getElementById('name').value;
            const sets = document.getElementById('sets').value;
            const reps = document.getElementById('reps').value;
            const notes = document.getElementById('notes').value;
            
            // Create new placeholder row
            const newRow = document.createElement('tr');
            
            // Create and populate cells
            newRow.innerHTML = `
                <td class="workout-checkbox"><input type="checkbox"></td>
                <td class="workout-name">${name}</td>
                <td class="sets-and-reps">Sets: ${sets}<br>Reps: ${reps}</td>
                <td><div class="workout-notes">${notes}</div></td>
            `;
            
            if (workoutTable) {
                workoutTable.appendChild(newRow);
            } else {
                console.error('Workout table not found');
            }
            
            // Clear form
            workoutForm.reset();
            
            if (typeof closePopup === 'function') {
                closePopup();
            }
            
            console.log('New row successfully added!');
        });
    } else {
        console.error('Workout form not found')
    }
    //End from submission and creation
});