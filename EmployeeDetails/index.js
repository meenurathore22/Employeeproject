const myForm = document.querySelector('form')
console.log(myForm)
const array =[]
myForm.addEventListener('submit',saveForm)

//submit is a instruction what we want to do ,and saveForm is function 

function saveForm(event){
    event.preventDefault()
    //control the reloading of form
    const Name = document.getElementById('name').value
    //console.log(Name)

    const Id = document.getElementById('ID').value
    //console.log(Id)

    const select = document.getElementById('select').value
    //console.log(select)

    const experience = document.getElementById('experience').value
    //console.log(experience)

    const email = document.getElementById('email').value
    //console.log(email)

    const number = document.getElementById('number').value
    //console.log(number)


    const object =  {
        Ename : Name,
        EID : Id,
        Edepartment : select,
        Eexperience : experience,
        Eemail : email,
        Enumber : number
    }
    //console.log(object)



    array.push(object)

    console.log(array)
    display(array)
   // myForm.reset()


}

function display(array){

    document.querySelector('tbody').innerHTML = " "
    array.forEach((data)=>{
            const tr = document.createElement('tr');

            const name = document.createElement('td')
            name.innerText = data.Ename

            const id = document.createElement('td')
            id.innerText = data.EID

            const department = document.createElement('td')
            department.innerText = data.Edepartment

            const experience = document.createElement('td')
            experience.innerText = data.Eexperience

            const email = document.createElement('td')
            email.innerText = data.Eemail

            const number = document.createElement('td')
            number.innerText = data.Enumber

            const role = document.createElement('td')
            let roleText = giveRole(data.Eexperience)
            role.innerText = roleText

            const DeleteElement = document.createElement('td')
            DeleteElement.innerText = 'Delete'

            DeleteElement.addEventListener("click",(event)=>{
                event.target.parentNode.remove()
            })

            DeleteElement.style.backgroundColor='red'
            DeleteElement.style.cursor='pointer'

            tr.append(name,id,department,experience,email,number,role,DeleteElement);
            document.querySelector("tbody").append(tr);

        })

}
        function giveRole(Eexperience)
        {
            if(Eexperience>5){
                return "senior";
            }
            else if(Eexperience>=2 && Eexperience<=5){
                return "junior";
            }
            else if(Eexperience<=1){
                return "Fresher"
            }
        }
        document.querySelector("myform").reset()    
        