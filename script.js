function getDetails() {
		let p = document.getElementById('pin').value;
		let pc = Number(p);
		let city;
		let distt;
		let state;
		if(pc == ' '){
			return false;
		}
		else{
			const url = "https://api.postalpincode.in/pincode/"+pc; //by name
			fetch(url)
			.then((response)=>{
				return response.json();
			})
			.then((data)=>{
				if(data[0]==null || data[0]==0){
					throw new Error("Invalid Input")
				}
				else{
					let c = document.getElementById('city');
					let d = document.getElementById('distt');
					for(let i =0; i<50; i++){
						user = data[0].PostOffice[i];
						c.options[c.options.length] = new Option(user.Name);
						d.innerHTML = (user.District);


					}
				}

			})
			.catch(err => alert(err))
		
		}
	}
	getDetails();

	function submitInfo() {
		alert("Your details has been submitted successfully.")
	}