document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".modal_step");
  const nextButtons = document.querySelectorAll(".next_btn");
  const backButtons = document.querySelectorAll(".back_btn");
  const exitIcon = document.querySelector(".exit_icon");
  let currentStep = 0;

  const updateSteps = () => {
    steps.forEach((step, index) => {
      step.classList.toggle("active_modal_step", index === currentStep);
    });
  };

  nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateSteps();
      }
    });
  });

  backButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateSteps();
      }
    });
  });

  exitIcon.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  });

  updateSteps();
});
