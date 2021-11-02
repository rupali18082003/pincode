const cities = document.getElementById('city');
const distt = document.getElementById('distt');
const state = document.getElementById('state');
const region = document.getElementById('region');
const pcd = document.getElementById('pc');
const block = document.getElementById('block');

function getDetails() {
		let p = document.getElementById('pin').value;
		let pc = Number(p);
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
					const len = data[0].PostOffice.length;
					document.getElementById('pin').value = '';
					for(let i =0; i<len; i++){
						user = data[0].PostOffice[i];
						pcd.textContent = user.Pincode;
						cities.options[cities.options.length] = new Option(user.Name);
						block.textContent = user.Block;
						distt.textContent = user.District;
						region.textContent = user.Region;
						state.textContent = user.State;
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
