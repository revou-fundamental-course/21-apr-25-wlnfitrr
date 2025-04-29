<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Website Konverensi Suhu - Wulan</title>
  <style>
    body {
      background-color: pink;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    textarea, input {
      width: 100%;
      height: 80px;
      margin-bottom: 10px;
      background-color: #ffffdd;
      font-size: 18px;
    }
    button {
      margin-right: 10px;
      padding: 10px 15px;
      font-size: 16px;
    }
  </style>
</head>
<body>

  <h1>Website Konverensi Suhu - wulan</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

  <label for="celsius">Celcius (°C):</label>
  <textarea id="celsius" placeholder="Masukkan suhu dalam Celsius"></textarea>

  <button onclick="convertToFahrenheit()">Konversi</button>
  <button onclick="resetForm()">Reset</button>
  <button onclick="reverseConversion()">Reverse</button>

  <label for="fahrenheit">Fahrenheit (°F):</label>
  <textarea id="fahrenheit" placeholder="Hasil dalam Fahrenheit"></textarea>

  <label for="explanation">Cara Kalkulasi:</label>
  <textarea id="explanation" readonly></textarea>

  <script>
    function convertToFahrenheit() {
      const celsiusInput = document.getElementById("celsius").value;
      const celsius = parseFloat(celsiusInput);

      if (isNaN(celsius)) {
        alert("Masukkan angka yang valid di kolom Celsius!");
        return;
      }

      const fahrenheit = (celsius * 9 / 5) + 32;
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
      document.getElementById("explanation").value =
        `${celsius}°C dikonversi ke Fahrenheit:\n(${celsius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    }

    function reverseConversion() {
      const fahrenheitInput = document.getElementById("fahrenheit").value;
      const fahrenheit = parseFloat(fahrenheitInput);

      if (isNaN(fahrenheit)) {
        alert("Masukkan angka yang valid di kolom Fahrenheit!");
        return;
      }

      const celsius = (fahrenheit - 32) * 5 / 9;
      document.getElementById("celsius").value = celsius.toFixed(2);
      document.getElementById("explanation").value =
        `${fahrenheit}°F dikonversi ke Celsius:\n(${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
    }

    function resetForm() {
      document.getElementById("celsius").value = "";
      document.getElementById("fahrenheit").value = "";
      document.getElementById("explanation").value = "";
    }
  </script>

</body>
</html>
