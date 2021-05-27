import React, {useState} from 'react';
import axios from "axios";

const App = () => {

  const [dados, setDados] = useState("");

  const usuario = {
    email: "alex@gmail.com",
    password: "123456"
  };

  const login = async () => {
    try {
      const response = await axios.post("https://projeto-integrador-4.herokuapp.com/auth/login", usuario);
      setDados(response.data);
    } catch(e) {
      alert(e.response.data.message);
    }
  }

  const logout = () => setDados("");

  return (
    <div>
        {
          dados.length === 0 ?
            <div>
              <h1>Efetue login</h1>
              <button onClick={() => login()}>Login</button>
            </div>
          :
            <div>
              <h1>Olá usuário!!</h1>
              <h2>{dados.email}</h2>
              <button onClick={() => logout()}>Logout</button>
            </div>
        }
    </div>
  );
}

export default App;
