const { LoadUsers } = require("./util");

window.addEventListener("DOMContentLoaded", async (event) => {
  console.log("DOM fully loaded and parsed");

  // Load users
  const users = await LoadUsers();

  // Some users has an internal array called 'VacacionesActivas'
  // that contains the vacations that the user has requested
  // and are waiting for approval

  // I need to verify if this user has any vacations waiting for approval

  // Verify if the user has this internal array

  /*
    foreach (user in users); {
        if (user.hasOwnProperty("VacacionesActivas")) {
        
        // If the user has this internal array, I need to verify if it has any vacations waiting for approval
        // Verify if the user has any vacations waiting for approval
        foreach (vacation in user.VacacionesActivas); {
            
        }
    
    }
    }*/
});
