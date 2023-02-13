// Write code related to Home Page

let data = JSON.parse(localStorage.getItem("Helpers"))||[];

let userForm = document.getElementsByTagName("form")
function submit_data()
{
    userForm.addEventListener("submit",submitUser)

    function submitUser(e)
    {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const mobile = document.getElementById("phone").value;
        const mail = document.getElementById("email").value;
        const desc = document.getElementById("category").value;
        const typee = document.getElementById("type").value;

        const user={name,mobile,mail,desc,typee};
        userdata.push(user)
        
        localStorage.setItem("Helpers",JSON.stringify(data))
    }
}
