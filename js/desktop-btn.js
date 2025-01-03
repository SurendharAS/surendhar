document.addEventListener("DOMContentLoaded", () => {
  const innerDiv = document.getElementById("inner-div");
  const sections = {
    am: document.getElementById("am"),
    skill: document.getElementById("skills"),
    pro: document.getElementById("project"),
    ed: document.getElementById("Education"),
    lan: document.getElementById("languages"),
    exp: document.getElementById("Experience"),
  };
  const buttonsMap = {
    am: "about-btn-wrapper",
    skill: "skill-btn-wrapper",
    pro: "projects-btn-wrapper",
    ed: "education-btn-wrapper",
    lan: "language-btn-wrapper",
    exp: "Experience-btn-wrapper",
  };
  const buttonWrappers = document.querySelectorAll(".button-wrapper");

  // Function to check the active section based on visibility
  const checkActiveSection = () => {
    const innerDivRect = innerDiv.getBoundingClientRect();
    const innerDivTop = innerDivRect.top;
    const innerDivHeight = innerDivRect.height;
    const targetMark = innerDivTop + innerDivHeight / 2;

    for (const [id, section] of Object.entries(sections)) {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      const isActive = sectionTop <= targetMark && sectionBottom >= targetMark;
      const buttonWrapper = document.getElementById(buttonsMap[id]);

      if (isActive) {
        buttonWrappers.forEach((wrapper) => wrapper.classList.remove("active"));
        buttonWrapper.classList.add("active");
      }
    }
  };

  // Attach scroll listener to `#inner-div`
  innerDiv.addEventListener("scroll", checkActiveSection);

  // Button click event listeners for scrolling  
  document.getElementById("about-btn").addEventListener("click", () => {
    sections.am.scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("projects-btn").addEventListener("click", () => {
    sections.pro.scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("education-btn").addEventListener("click", () => {
    sections.ed.scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("skill-btn").addEventListener("click", () => {
    sections.skill.scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("language-btn").addEventListener("click", () => {
    sections.lan.scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("Experience-btn").addEventListener("click", () => {
    sections.exp.scrollIntoView({ behavior: "smooth" });
  });

  // Initial check to set active state
  checkActiveSection();
});


document.addEventListener("DOMContentLoaded", () => {
  const innerDiv = document.getElementById("inner-div");
  const innerDiv2 = document.getElementById("inner-div2");
  const innerDivExtension = document.getElementById("inner-div-extension");

  const adjustExtension = () => {
    // Get the dimensions of #inner-div and #inner-div2
    const innerDivRect = innerDiv.getBoundingClientRect();
    const innerDiv2Rect = innerDiv2.getBoundingClientRect();

    // Calculate the position and width for #inner-div-extension
    innerDivExtension.style.top = `${innerDivRect.bottom + window.scrollY}px`; // Ensure position at the bottom of #inner-div
    innerDivExtension.style.left = `${innerDivRect.left}px`; // Align horizontally with #inner-div
    innerDivExtension.style.width = `${innerDivRect.width}px`; // Match the width of #inner-div

    // Calculate the height to extend towards the bottom of #inner-div2
    const extensionHeight = innerDiv2Rect.bottom - innerDivRect.bottom;
    if (extensionHeight > 0) {
      innerDivExtension.style.height = `${extensionHeight}px`; // Set the height to the space between #inner-div and #inner-div2
    }
  };

  // Adjust the extension on page load, resize, and scroll
  adjustExtension();
  window.addEventListener("resize", adjustExtension);
  window.addEventListener("scroll", adjustExtension);
});

document.addEventListener("DOMContentLoaded", () => {
  const innerDiv3 = document.getElementById("inner-div3");

  const adjustInnerDiv3Height = () => {
    // Dynamically set height to 100vh (viewport height)
    innerDiv3.style.height = `${window.innerHeight}px`; // Adjusts to the current viewport height
  };

  // Adjust the height on page load, resize, and scroll
  adjustInnerDiv3Height();
  window.addEventListener("resize", adjustInnerDiv3Height);
  window.addEventListener("scroll", adjustInnerDiv3Height);
});






