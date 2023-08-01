document.addEventListener("DOMContentLoaded", function () {
    const bookappointment = document.getElementById("appointment");
    const nurseappointment = document.getElementById("nurseappoint");
    const appointmentDateInput = document.getElementById("appointmentDate");
    const appointmentTimeSelect = document.getElementById("appointmentTime");
    const appointmentForm = document.getElementById("appointmentForm");
    const appointmentDetailsDiv = document.getElementById("appointmentDetails");
    const selectedDateParagraph = document.getElementById("selectedDate");
    const selectedTimeParagraph = document.getElementById("selectedTime");
  
    bookappointment.addEventListener('click',()=>{
        nurseappointment.classList.remove("hidden");
    })
    // Generate time slots for the select element
    const timeSlots = [
      "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
      "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
      "05:00 PM",
    ];
  
    for (const slot of timeSlots) {
      const option = document.createElement("option");
      option.textContent = slot;
      appointmentTimeSelect.appendChild(option);
    }
  
    appointmentForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const selectedDate = appointmentDateInput.value;
      const selectedTime = appointmentTimeSelect.value;
  
      if (!selectedDate || !selectedTime) {
        alert("Please select both date and time slot.");
        return;
      }
  
      selectedDateParagraph.textContent = "Date: " + selectedDate;
      selectedTimeParagraph.textContent = "Time Slot: " + selectedTime;
  
      appointmentDetailsDiv.classList.remove("hidden");
    });
  });
  