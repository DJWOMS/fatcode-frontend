import {Button, Grid, Input, Typography} from "@mui/material";
import {useState} from "react";

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
             <Typography>
                 Логин
             </Typography>
             <Input value={login} onChange={loginSend}/>
          </Grid>
          <Grid>
              <Typography>
                  E-mail *
              </Typography>
              <Input value={email} onChange={emailSend}/>
          </Grid>
          <Grid>
              <Typography>
                  Новый пароль
              </Typography>
              <Input type={"password"} value={password} onChange={passwordSend}/>
          </Grid>
          <Grid>
              <Typography>
                  Повторите пароль
              </Typography>
              <Input type={"password"} value={password2} onChange={password2Send}/>
          </Grid>
          <Button onClick={()=>print()}>fdgfgd</Button>
      </>
  )
}

export default RegisterForm