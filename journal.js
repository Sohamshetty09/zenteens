document.addEventListener("DOMContentLoaded", function () {
  // Get the mood data from localStorage
  const moodData = localStorage.getItem("moodTracker");

  try {
    if (moodData) {
      // Parse the JSON data
      const moodArray = JSON.parse(moodData);

      // Function to create a chart
      function createChart(chartId, label, chartData) {
        var ctx = document.getElementById(chartId).getContext("2d");

        new Chart(ctx, {
          type: "line", // Line graph
          data: {
            labels: chartData.map((mood) => `${mood.Date} ${mood.Time}`), // Labels based on Date and Time
            datasets: [
              {
                label: label,
                data: chartData.map((mood) => mood[label]), // Extract data based on label
                borderColor: "rgba(75, 192, 192, 1)", // Line color
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Background color for the area under the line
                fill: true,
                tension: 0.1, // Line smoothness
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                callbacks: {
                  title: function (tooltipItem) {
                    return tooltipItem[0].label; // Display Date and Time as tooltip title
                  },
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: false,
                  text: "Date & Time",
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                title: {
                  display: true,
                  text: `${label} Mood`,
                },
                min: 0,
                max: 14,
              },
            },
          },
        });
      }

      // Create the charts
      createChart("PersonalMoodChart", "Personal", moodArray);
      createChart("WellBeingMoodChart", "WellBeing", moodArray);
      createChart("SelfControlChart", "SelfControl", moodArray);
      createChart("SelfPerceptionChart", "SelfPerception", moodArray);
      createChart("HopeChart", "Hope", moodArray);
      createChart("BelongingChart", "Belonging", moodArray);
      createChart("ActivityChart", "Activity", moodArray);
    } else {
      alert("Could not load any mood data.");
    }
  } catch (e) {
    alert("Error parsing mood data.");
    console.error("Error parsing data from localStorage:", e);
  }
});
