import {Button, Grid, Input, Typography} from "@mui/material";
import {useState} from "react";

const style = {
    input: {
        width: 350,
        border: "2px solid #E5E5E5",
        borderRadius: 8
    },
    text: {
        marginBottom: 5,
        fontSize: 20,
        fontWeight: "bold",
    }
}

const RegisterForm = () => {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    //передавать в запросе при регистрации
    const dataUser = {
        login: login,
        email: email,
        password: password,
        password2: password2
    }

    const print = () => {
      console.log(dataUser)
    }

    //Накинуть валидаторы
    const loginSend = (event) => {
        setLogin(event.target.value)
    }
    const emailSend = (event) => {
        setEmail(event.target.value)
    }
    const passwordSend = (event) => {
        setPassword(event.target.value)
    }
    const password2Send = (event) => {
        setPassword2(event.target.value)
    }


    return(
      <>
          <Grid>
             <Typography style={style.text}>
                 Логин
             </Typography>
             <Input value={login}
                    onChange={loginSend}
                    style={style.input}/>
          </Grid>
          <Grid>
              <Typography style={style.text}>
                  E-mail
              </Typography>
              <Input value={email}
                     onChange={emailSend}
                     style={style.input}/>
          </Grid>
          <Grid>
              <Typography style={style.text}>
                  Новый пароль
              </Typography>
              <Input type={"password"}
                     value={password}
                     onChange={passwordSend}
                     style={style.input}/>
          </Grid>
          <Grid>
              <Typography style={style.text}>
                  Повторите пароль
              </Typography>
              <Input type={"password"}
                     value={password2}
                     onChange={password2Send}
                     style={style.input}/>
          </Grid>
          <Grid mt={5} ml={12}>
              <Button onClick={()=>print()} sx={{
                  background: "#69CB2D",
                  color: "white",
                  borderRadius: 20,
                  fontSize: 17,
                  fontWeight: "bold",
                  width: 250,
                  "&: hover":{
                      background: "white",
                      color: "#69CB2D",
                      border: "1px solid #69CB2D"
                  }
              }}>
                  Зарегистрироваться
              </Button>

          </Grid>
      </>
  )
}

export default RegisterForm