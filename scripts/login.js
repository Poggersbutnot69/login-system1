function check(form) {
    username = new Array("schoolsucks", "admin2", "members");
    password = new Array("poggers", "admin2", "members");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('https://mmwmathfree29102818102817192119182717.netlify.app')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]) {
		location.replace('https://shattereddisk.github.io/rickroll/rickroll.mp4')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		location.replace('https://shattereddisk.github.io/rickroll/rickroll.mp4')/* The Administrator homepage*/
		alert("Incorrect Password")
		location.replace('https://shattereddisk.github.io/rickroll/rickroll.mp4')
	}
	else {
		alert("Incorrect Username or Password")
		location.replace('https://shattereddisk.github.io/rickroll/rickroll.mp4')/*The rick roll*/
	}
}
