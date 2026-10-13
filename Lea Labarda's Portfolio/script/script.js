"use strict";
document.addEventListener("DOMContentLoaded", () => {
  loadPortfolio();
  setupContactForm();
  setupBackToTop();
});

async function loadPortfolio() {
  const response = await fetch("data/projects.json");
  const data = await response.json();
  displaySkills(data.skills);
  displayProjects(data.projects);
}

function displaySkills(skills) {
  const container = document.getElementById("skillsContainer");
  container.innerHTML = "";
  skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.textContent = skill;
    container.appendChild(card);
  });
}

function displayProjects(projects) {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = "";
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tech:</strong> ${project.technologies}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  form.addEventListener("submit", e => {
    e.preventDefault();
    feedback.textContent = "Thank you! Your form is valid.";
    form.reset();
  });
}

function setupBackToTop() {
  const button = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    button.classList.toggle("visible", window.scrollY > 300);
  });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}