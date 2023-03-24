
fetch("_data/base-zont.json")

.then(function(response){
	return response.json();
})

.then(function(base) {
	let placeholder = document.querySelector("#in-table");
	let out = "";
	for(let uni of base){
	  out += `
		<tr>
	    <td>${uni.FIO}</td>
	    <td>${uni.Telephon}</td>
	    <td>${uni.Email}</td>
	    <td>${uni.Adress}</td>
	    <td>${uni.Location}</td>
	    <td>${uni.Login}</td>
			<td>${uni.Password}</td>
			<td>${uni.Model}</td>
			<td>${uni.Operator}</td>
			<td>${uni.Phone}</td>
	  </tr>
	  `;
	}
	placeholder.innerHTML = out;
})

