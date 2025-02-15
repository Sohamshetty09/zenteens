function getDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = String(now.getFullYear()).slice(-2);

  return `${day}-${month}-${year}`;
}

function getTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

function storeMoodData() {
  const Personal1 = parseInt(document.getElementById("mood-rating-1").value);
  const Personal2 = parseInt(document.getElementById("mood-rating-2").value);
  const WellBeing = parseInt(document.getElementById("mood-rating-3").value);
  const SelfControl = parseInt(document.getElementById("mood-rating-4").value);
  const SelfPerception = parseInt(document.getElementById("mood-rating-5").value);
  const Hope = parseInt(document.getElementById("mood-rating-6").value);
  const Belonging = parseInt(document.getElementById("mood-rating-7").value);
  const Activity = parseInt(document.getElementById("mood-rating-8").value);

  const score = parseInt(Personal1) + 
                parseInt(Personal2) + 
                parseInt(WellBeing) + 
                parseInt(SelfControl) + 
                parseInt(SelfPerception) + 
                parseInt(Hope) + 
                parseInt(Belonging) + 
                parseInt(Activity);
  console.log(score);
  if (score <= 20) {
    alert(`"Prioritize Your Well-being" \nYour mental health matters. Seeking professional support can help you navigate challenges and find the right tools for a healthier mind.`);
  }
  else if(score > 20 && score <= 60){
    alert(`"Strengthen Your Mind" \nYou're on the path to well-being. Regular mindfulness exercises like deep breathing, meditation, and journaling can help you feel more balanced and in control.`);
  }
  else if(score > 60 && score <=80){
    alert(`"Keep Thriving" \nYou're doing great! Keep up your healthy habits, stay mindful, and continue practicing self-care to maintain your mental wellness.`);
  }

  const Personal = (Personal1 + Personal2)/2;
  const newMoodData = {
    Personal,
    WellBeing,
    SelfControl,
    SelfPerception,
    Hope,
    Belonging,
    Activity,
    Date: getDate(),
    Time: getTime(), // Formatted timestamp
  };
window.location.href = 'journal.html';
  // Retrieve existing mood data from localStorage
  let moodHistory = JSON.parse(localStorage.getItem("moodTracker")) || [];

  // Append new mood entry
  moodHistory.push(newMoodData);

  // Store updated mood history
  localStorage.setItem("moodTracker", JSON.stringify(moodHistory));
  
}
