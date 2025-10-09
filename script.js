// Default power (Watts) for common appliances
const appliancePower = {
  fan: 80,
  light: 10,
  tubeLight: 40,
  tv: 120,
  fridge: 150,
  ac: 1500,
  washingMachine: 500,
  computer: 200,
  waterHeater: 2000,
  iron: 1000
};

// Auto-fill power when appliance selected
function setDefaultPower() {
  const appliance = document.getElementById('appliance').value;
  const powerField = document.getElementById('power');

  if (appliance && appliancePower[appliance]) {
    powerField.value = appliancePower[appliance];
  } else {
    powerField.value = "";
  }
}

// Main calculator function
function calculateSavings() {
  const appliance = document.getElementById('appliance').value;
  const power = parseFloat(document.getElementById('power').value);
  const hours = parseFloat(document.getElementById('hours').value);
  const cost = parseFloat(document.getElementById('cost').value);

  if (!appliance || isNaN(power) || isNaN(hours) || isNaN(cost)) {
    alert("Please fill all fields correctly!");
    return;
  }

  // Calculations
  const energySaved = (power / 1000) * hours; // kWh/day
  const moneySavedDay = energySaved * cost;
  const moneySavedMonth = moneySavedDay * 30;
  const moneySavedYear = moneySavedDay * 365;

  // Display results
  document.getElementById('energySaved').innerText = energySaved.toFixed(2) + " kWh";
  document.getElementById('moneyDay').innerText = "₹" + moneySavedDay.toFixed(2);
  document.getElementById('moneyMonth').innerText = "₹" + moneySavedMonth.toFixed(2);
  document.getElementById('moneyYear').innerText = "₹" + moneySavedYear.toFixed(2);

  // Motivational message
  const messages = [
    `By turning off your ${capitalize(appliance)} for ${hours} hours daily, you save ₹${moneySavedMonth.toFixed(0)} every month!`,
    `Turning off your ${capitalize(appliance)} helps reduce your carbon footprint.`,
    `${hours} hours off each day = ₹${moneySavedYear.toFixed(0)} yearly savings!`
  ];

  document.getElementById('motivation').innerText = messages[Math.floor(Math.random() * messages.length)];
}

// Helper function to capitalize appliance names
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
