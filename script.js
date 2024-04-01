// Venues and their corresponding html file path
var venues = [
    {name: "", htmlFilePath: "venue_not_found.html"},
    {name: "Scotiabank Arena", htmlFilePath: "Scotiabank.html"},
    {name: "Paramount Fine Foods Centre", htmlFilePath: "ParamountFineFoods.html"},
    {name: "FirstOntario Centre", htmlFilePath: "FirstOntarioCentre.html"},
    {name: "FirstOntario Concert Hall", htmlFilePath: "FirstOntarioConcertHall.html"},
    {name: "Budweiser Gardens", htmlFilePath: "BudweiserGardens.html" },
    {name: "The Studio Hamilton", htmlFilePath: "TheStudioHamilton.html"},
    {name: "BMO Field", htmlFilePath: "BmoField.html"},
    {name: "London Music Hall", htmlFilePath: "LondonMusicHall.html"},
    {name: "The Axis Club", htmlFilePath: "AxisClub.html"},
    {name: "Massey Hall", htmlFilePath: "MasseyHall.html"},
    {name: "Rogers Centre", htmlFilePath: "Rogers.html"},
    {name: "Budweiser Stage", htmlFilePath: "BudweiserStage.html"},
    {name: "Danforth Music Hall", htmlFilePath: "DanforthMusichall.html"},
    {name: "Roy Thomson Hall", htmlFilePath: "RoyThomsonHall.html"},
    {name: "Meridian Hall", htmlFilePath: "MeridianHall.html"},
    {name: "The Opera House", htmlFilePath: "TheOperaHouse.html"},
    {name: "History Toronto", htmlFilePath: "history.html"}
];

// Function to search for a venue
function searchVenue() {
    var searchValue = document.getElementById("searchInput").value.toLowerCase();
    var venueFound = false; // Flag to track if the venue is found

    // Loop through the list of venues
    for (var i = 0; i < venues.length; i++) {
        var venue = venues[i];
        if (venue.name.toLowerCase().includes(searchValue)) {

            // Redirect to the corresponding HTML file for the venue
            window.location.href = venue.htmlFilePath;
            venueFound = true; // If venue is found set flag to true
            return; 
        }
    }

    // If no match is found, redirect to a page indicating the venue doesn't exist
    if (!venueFound) {
        window.location.href = "venue_not_found.html";
    }
}

//List of venues for autocomplete
$(function() {
    var venues = [
        "Scotiabank Arena",
        "Rogers Centre",
        "FirstOntario Centre",
        "FirstOntario Concert Hall",
        "The Studio Hamilton",
        "Budweiser Gardens",
        "London Music Hall",
        "Paramount Fine Foods Centre",
        "Budweiser Stage",
        "Danforth Music Hall",
        "Massey Hall",
        "Meridian Hall",
        "The Axis Club",
        "Roy Thomson Hall",
        "BMO Field", 
        "The Opera House",
        "History Toronto"
    ];

    $("#searchInput").autocomplete({
        source: venues
    });
});


//Fade in animation for icon on home oage
$(document).ready(function() {
    var iconSection = $('#iconSection');
    var iconSectionVisible = false;

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { 
            if (!iconSectionVisible) {
                iconSection.fadeIn();
                iconSectionVisible = true;
            }
        } else {
            if (iconSectionVisible) {
                iconSection.fadeOut();
                iconSectionVisible = false;
            }
        }
    });
});




