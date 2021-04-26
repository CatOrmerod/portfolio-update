// projects object //
var projectsContent = [
    { 
        projectTitle: "Workday Scheduler",
        projectDescription: "App to display the workday hours where user can save their appointments",
        projectTools: "HTML, CSS, JavaScript, Bootstrap, GoogleFonts",
        projectRepo: "https://github.com/CatOrmerod/work-day-scheduler",
        projectURL: "https://catormerod.github.io/work-day-scheduler/",
    },
    { 
        projectTitle: "Weather App",
        projectDescription: "Weather app that provides the weather for any location and features a geolocation on opening the page to show the weather in the users current location.",
        projectTools: "HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome",
        projectRepo: "https://github.com/CatOrmerod/weather-dashboard",
        projectURL: "https://catormerod.github.io/weather-dashboard/",
    },
    { 
        projectTitle: "Tipsy Tricks - Group Project",
        projectDescription: "A home bar assistant to take any entered ingredient and display cocktails that use that ingredient.  Further to this it takes the users current location and provides a list of Liquor Stores in a 5km radius in case they need more ingredients.",
        projectTools: "HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome",
        projectRepo: "https://github.com/RichardtHopkins/Cocktail-suggester",
        projectURL: "https://richardthopkins.github.io/Cocktail-suggester/",
    }],


$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    let i = button.data('index') // Extract info from data-* attributes
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('#modal-project-title').text(projectsContent[i].projectTitle)
    $('#modal-project-description').html(projectsContent[i].projectDescription)

  })