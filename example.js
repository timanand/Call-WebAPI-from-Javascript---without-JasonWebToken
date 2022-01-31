function fetchData() {
  fetch("https://localhost:44351/api/staffmembers/read")
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

fetchData();




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

postData();


