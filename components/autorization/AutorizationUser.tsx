import {useState} from "react";
import {Button, Grid, Input, Typography} from "@mui/material";
import ModalAutorizate from "./ModalAutorizate";

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

const AutorizationUser = () => {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //передавать в запросе при регистрации
    const dataUser = {
        email: email,
        password: password,
    }

    const print = () => {
        console.log(dataUser)
    }

    //Накинуть валидаторы
    const emailSend = (event) => {
        setEmail(event.target.value)
    }

    const passwordSend = (event) => {
        setPassword(event.target.value)
    }


    return(
        <>
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
                    Пароль
                </Typography>
                <Input type={"password"}
                       value={password}
                       onChange={passwordSend}
                       style={style.input}/>
            </Grid>
            <Grid mt={5} ml={18}>
                <Button onClick={()=>print()} sx={{
                    background: "#69CB2D",
                    color: "white",
                    borderRadius: 20,
                    fontSize: 17,
                    fontWeight: "bold",
                    width: 200,
                    "&: hover":{
                        background: "white",
                        color: "#69CB2D",
                        border: "1px solid #69CB2D"
                    }
                }}>
                    Войти
                </Button>
            </Grid>
            <Grid mt={5} ml={18}>
                <Button onClick={()=>setOpen(true)} sx={{
                    background: "#69CB2D",
                    color: "white",
                    borderRadius: 20,
                    fontSize: 17,
                    fontWeight: "bold",
                    width: 200,
                    "&: hover":{
                        background: "white",
                        color: "#69CB2D",
                        border: "1px solid #69CB2D"
                    }
                }}>
                    Открыть модалку
                </Button>
                <ModalAutorizate active={open} setActive={setOpen}/>
            </Grid>
        </>
  )
}

export default AutorizationUser