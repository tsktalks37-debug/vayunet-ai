// ================================
// VayuNet AI Dashboard
// ================================

function refreshDashboard() {

    const timeElement = document.getElementById("updateTime");

    if (timeElement) {
        timeElement.textContent = "Just now";
    }

    console.log("Dashboard refreshed");

}


// ================================
// AI Recommendation
// ================================

function showRecommendation() {

    const modal =
        document.getElementById("recommendationModal");

    if (modal) {
        modal.classList.add("show");
    }

}


function closeRecommendation() {

    const modal =
        document.getElementById("recommendationModal");

    if (modal) {
        modal.classList.remove("show");
    }

}


// ================================
// Citizen Report
// ================================

function getLocation() {

    const locationInput =
        document.getElementById("location");

    if (!navigator.geolocation) {

        alert(
            "Location services are not supported by your browser."
        );

        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            locationInput.value =
                `GPS: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;

        },

        function() {

            alert(
                "Unable to access your location."
            );

        }

    );

}


// ================================
// Photo Upload
// ================================

const photoInput =
    document.getElementById("photo");

if (photoInput) {

    photoInput.addEventListener(
        "change",
        function() {

            const file =
                this.files[0];

            const fileName =
                document.getElementById("fileName");

            if (file) {

                fileName.textContent =
                    `Selected: ${file.name}`;

            }

        }
    );

}


// ================================
// Submit Report
// ================================

function submitReport() {

    const location =
        document.getElementById("location").value;

    const pollutionType =
        document.getElementById("pollutionType").value;

    const description =
        document.getElementById("description").value;

    if (!location || !pollutionType) {

        alert(
            "Please enter a location and select a pollution type."
        );

        return;
    }


    console.log({

        location: location,

        pollutionType: pollutionType,

        description: description

    });


    const modal =
        document.getElementById("reportModal");

    if (modal) {

        modal.classList.add("show");

    }

}


// ================================
// Close Report Modal
// ================================

function closeReportModal() {

    const modal =
        document.getElementById("reportModal");

    if (modal) {

        modal.classList.remove("show");

    }

}