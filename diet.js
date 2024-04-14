document.addEventListener('DOMContentLoaded', function() {
    const menstruationBtn = document.getElementById('menstruation-btn');
    const follicularBtn = document.getElementById('follicular-btn');
    const ovulationBtn = document.getElementById('ovulation-btn');
    const lutealBtn = document.getElementById('luteal-btn');
    const dietInfo = document.getElementById('diet-info');
  
    // Set initial diet recommendation
    dietInfo.textContent = "Select a phase to see diet recommendations.";
  
    // Event listeners for phase buttons
    menstruationBtn.addEventListener('click', function() {
      updateDietInfo("Menstruation Phase(days - 1-5)", "- During menstruation, it's important to focus on replenishing iron stores lost through bleeding. Include iron-rich foods such as leafy greens (spinach, kale), red meat, poultry, fish, beans, lentils, tofu, and fortified cereals.<br> - Incorporate foods rich in vitamin C, such as citrus fruits, strawberries, bell peppers, and tomatoes, which can enhance iron absorption. <br> - Stay hydrated by drinking plenty of water and consuming hydrating foods like fruits and vegetables.");
      toggleActiveButton(menstruationBtn);
    });
  
    follicularBtn.addEventListener('click', function() {
      updateDietInfo("Follicular Phase(Days 6-14))", "- The follicular phase is a time of hormone production and egg maturation. Focus on consuming a balanced diet with a variety of nutrient-rich foods.<br>- Include complex carbohydrates like whole grains (brown rice, quinoa, oats), fruits, and vegetables to provide sustained energy and support hormone production.<br>- Incorporate foods rich in B vitamins, such as leafy greens, whole grains, nuts, seeds, and legumes, to support energy metabolism and hormone balance.");
      toggleActiveButton(follicularBtn);
    });
  
    ovulationBtn.addEventListener('click', function() {
      updateDietInfo("Ovulation Phase(Day 14)", "- During ovulation, prioritize foods that support reproductive health and hormone balance. Include sources of healthy fats like avocados, nuts, seeds, and fatty fish (salmon, mackerel, sardines).<br>- Consume foods rich in antioxidants, such as berries, dark leafy greens, and colorful vegetables, to reduce inflammation and support egg quality.<br>- Include sources of omega-3 fatty acids, such as fatty fish, flaxseeds, and walnuts, which may help reduce menstrual cramps and support overall reproductive health."); 
    });
  
    lutealBtn.addEventListener('click', function() {
      updateDietInfo("Luteal Phase(15 - 28)", "- The luteal phase is characterized by increased progesterone levels and preparation for potential pregnancy. Focus on stabilizing blood sugar levels and supporting mood.<br>- Include complex carbohydrates like whole grains, legumes, and starchy vegetables to help regulate blood sugar levels and reduce cravings.<br>Incorporate foods rich in magnesium, such as leafy greens, nuts, seeds, and dark chocolate, to help alleviate menstrual cramps and support relaxation.<br>- Consume foods high in vitamin B6, such as poultry, fish, bananas, and potatoes, which may help alleviate premenstrual symptoms like bloating and mood swings.");
      toggleActiveButton(lutealBtn);
    });
  
    // Function to update diet information
    function updateDietInfo(phase, recommendations) {
      dietInfo.innerHTML = `<h2>${phase}</h2><p>${recommendations}</p>`;
    }
  
    // Function to toggle active button class
    function toggleActiveButton(button) {
      const buttons = document.querySelectorAll('.phase-selector button');
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    }
  });