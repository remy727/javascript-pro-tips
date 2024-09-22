<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Battery Status with JavaScript</title>
</head>
<body>
  <h1>🔋 Battery Status with JavaScript</h1>
  <p id="battery-status">Fetching battery data...</p>

  <script>
    const batteryStatus = document.getElementById('battery-status');

    // Check if the Battery Status API is supported
    if ('getBattery' in navigator) {
      navigator.getBattery().then(battery => {
        const updateBatteryStatus = () => {
          const chargingStatus = battery.charging ? "Charging" : "Not Charging";
          batteryStatus.textContent = `
            Battery Level: ${(battery.level * 100).toFixed(0)}%,
            ${chargingStatus}
          `;
        };

        // Update battery status initially and on any change
        updateBatteryStatus();
        battery.addEventListener('chargingchange', updateBatteryStatus);
        battery.addEventListener('levelchange', updateBatteryStatus);
      });
    } else {
      batteryStatus.textContent = 'Battery Status API is not supported by your browser.';
    }
  </script>
</body>
</html>
