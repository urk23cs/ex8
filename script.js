// Sample data array
let applications = [
  {
    candidateName: "Kiruthika",
    email: "kiruthika@example.com",
    jobTitle: "Web Developer",
    status: "Applied",
    appliedDate: new Date().toLocaleDateString()
  },
  {
    candidateName: "Ravi Kumar",
    email: "ravi@example.com",
    jobTitle: "Data Analyst",
    status: "Interview Scheduled",
    appliedDate: new Date().toLocaleDateString()
  }
];

// Render applications in table
function renderApplications() {
  const table = document.getElementById("applicationsTable");
  table.innerHTML = "";

  applications.forEach((app, i) => {
    table.innerHTML += `
      <tr>
        <td>${app.candidateName}</td>
        <td>${app.email}</td>
        <td>${app.jobTitle}</td>
        <td>
          <select class="form-select form-select-sm" onchange="updateStatus(${i}, this.value)">
            <option ${app.status === "Applied" ? "selected" : ""}>Applied</option>
            <option ${app.status === "Interview Scheduled" ? "selected" : ""}>Interview Scheduled</option>
            <option ${app.status === "Hired" ? "selected" : ""}>Hired</option>
            <option ${app.status === "Rejected" ? "selected" : ""}>Rejected</option>
          </select>
        </td>
        <td>${app.appliedDate}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteApplication(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// Add a new application
function addApplication() {
  const candidateName = document.getElementById("candidateName").value.trim();
  const email = document.getElementById("email").value.trim();
  const jobTitle = document.getElementById("jobTitle").value.trim();

  if (!candidateName || !email || !jobTitle) {
    alert("Please fill all fields!");
    return;
  }

  const newApp = {
    candidateName,
    email,
    jobTitle,
    status: "Applied",
    appliedDate: new Date().toLocaleDateString()
  };

  applications.push(newApp);
  renderApplications();

  document.getElementById("candidateName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("jobTitle").value = "";
}

// Update application status
function updateStatus(index, newStatus) {
  applications[index].status = newStatus;
  renderApplications();
}

// Delete an application
function deleteApplication(index) {
  if (confirm("Are you sure you want to delete this application?")) {
    applications.splice(index, 1);
    renderApplications();
  }
}

// Initialize table on load
renderApplications();
