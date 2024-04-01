// Function to fetch and display concerts
function fetchConcerts() {
    // Make a GET request to the Ticketmaster API 
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Nc7L7IHXd2dCEeKhtpvl4G3sYqVaXx15&segmentName=Music&size=10&countryCode=CA&stateCode=ON",
        async: true,
        dataType: "json",
        success: function(json) {
            const concerts = json._embedded.events;
            const concertsContainer = $("#concerts");
            concertsContainer.empty();

            concerts.forEach(concert => {
                // Extract the URL of the first image for the concert
                const imageUrl = concert.images[0].url; 

                // Create a new <div> element to hold concert details
                const concertElement = $("<div>").addClass("concert").html(`
                    <div class="concert-image">
                        <img src="${imageUrl}" alt="${concert.name}">
                    </div>
                    <div class="concert-details">
                        <h2>${concert.name}</h2>
                        <p>Date: ${concert.dates.start.localDate}</p>
                        <p>Time: ${concert.dates.start.localTime}</p>
                        <p>Venue: ${concert._embedded.venues[0].name}</p>
                    </div>
                `);

                // append the concert element to the container
                concertsContainer.append(concertElement);
            });
        },
        error: function(xhr, status, err) {
            console.error('Error fetching concerts:', err);
        }
    });
}

fetchConcerts();
