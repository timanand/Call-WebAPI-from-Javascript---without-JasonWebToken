function fetchData() {
  fetch("https://localhost:44351/api/StaffMembers")
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();	
    })
    .then(data => {
      console.log(data);
      const html = data
        .map(user => {
          return `
          <div class="user">
            <p>Id: ${user.Id}</p>
            <p>FirstName: ${user.FirstName}</p>
            <p>LastName: ${user.LastName}</p>
            <p>Title: ${user.Title}</p>
          </div>
          `; 
        }).join('');  
      //console.log(html)      
      document
        .querySelector('#app')
        .insertAdjacentHTML('afterbegin', html);  
    }).catch(error => {
      console.log(error); 
    });
}



function postData() {
  fetch("https://localhost:44351/api/staffmembers/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      FirstName:"Lucy",
      LastName:"Andrews",
      Title:"Miss"
    })
  })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();	
    })
    .then(data => {
      console.log(data) 
    })
    .catch(error => {
      console.log(error); 
    });
}


function updateData() {
  fetch("https://localhost:44351/api/staffmembers/update/18", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id:"18",
      FirstName:"Lucy",
      LastName:"Andrews",
      Title:"Miss"
    })
  })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();	
    })
    .then(data => {
      console.log(data) 
    })
    .catch(error => {
      console.log(error); 
    });
}


function deleteData() {
  fetch("https://localhost:44351/api/staffmembers/delete/18", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Id:"18",
      FirstName:"Lucy",
      LastName:"Andrews",
      Title:"Miss"
    })
  })
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();	
    })
    .then(data => {
      console.log(data) 
    })
    .catch(error => {
      console.log(error); 
    });
}




postData();
updateData();
deleteData();
fetchData();




