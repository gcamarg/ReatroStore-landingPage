import React, { useState } from 'react'
import "./style.css";
export default function Form(){
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
  
    function handleSubmitClick(e) {
    e.preventDefault();
      let emailList = localStorage.getItem("emailList");
      if (emailList !== null) {
        emailList = JSON.parse(emailList);
        if(emailList.find(user=>user.email===userEmail) !==undefined){
            alert("Email já foi utilizado!")
            return
        };
    
        emailList.push({name: userName,
            email: userEmail});
      } else {
        emailList = [{name: userName,
            email: userEmail}];
      }
      localStorage.setItem("emailList", JSON.stringify(emailList));
      alert(`Pronto ${userName}! Fique atento que vem coisa boa por aí!`)
      setUserEmail('');
      setUserName('');
    }
    return(
        <section className="formContainer">
        <p className='p-text'>Cadastre-se agora e receba as melhores ofertas!</p>
        <form onSubmit={handleSubmitClick}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Nome"
          required
        />
         <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="email@email.com"
          required
        />
        <button
          type="submit"
          className="submit-button"
          >
          Enviar
        </button>
      </form>
      </section>
    )
}