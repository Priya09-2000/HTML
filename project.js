function submitProjectDetails() {
    // Get input values
    var projectName = document.getElementById("PName").value;
    var assignedTo = document.getElementById("projectAssigned").value;
    var startDate = document.getElementById("SDate").value;
    var endDate = document.getElementById("EDate").value;
    var priority = document.querySelector('input[name="priority"]:checked').value;
    var description = document.getElementById("description").value;
  
    // Log the values to the console (you can modify this as per your requirement)
    console.log("Project Name: " + projectName);
    console.log("Assigned to: " + assignedTo);
    console.log("Start Date: " + startDate);
    console.log("End Date: " + endDate);
    console.log("Priority: " + priority);
    console.log("Description: " + description);
  
    // You can perform further actions with the data, such as sending it to a server or manipulating the DOM.
  }
  
  function resetProjectDetails() {
    // Clear input values
    document.getElementById("PName").value = "";
    document.getElementById("projectAssigned").value = "Er Merry Petision";
    document.getElementById("SDate").value = "";
    document.getElementById("EDate").value = "";
    document.getElementById("high").checked = false;
    document.getElementById("average").checked = false;
    document.getElementById("low").checked = false;
    document.getElementById("description").value = "";
  }
  
  
  
  
  
  
  
  