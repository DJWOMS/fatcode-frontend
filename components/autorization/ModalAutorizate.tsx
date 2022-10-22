import {
    Box,
    Button,
    Grid,
    Input,
    Modal,
    Typography
} from "@mui/material";
import {useState} from "react";

const styles = {
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        borderRadius: 5,
        bgcolor: '#1E2235',
        padding: '10px',
    },
    text: {
    }
};


const ModalAutorizate = ({active, setActive}) => {

    const close = () => {
        setActive(false)
    }

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
        <Modal
            open={active}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box style={styles.box}>
                <Box mb={3} sx={{
                    background: "#69CB2D",
                    color: "white",
                    borderRadius: 10
                }}>
                    <Grid container pt={5}>
                        <Grid xs={12} ml={10}>
                            <Typography style={styles.text}>
                                E-mail
                            </Typography>
                            <Input value={email}
                                   onChange={emailSend}
                                   style={styles.input} sx={{
                                       color: "white",
                                    border: "none"
                            }}/>
                        </Grid>
                        <Grid xs={12} ml={10}>
                            <Typography style={styles.text}>
                                Пароль
                            </Typography>
                            <Input type={"password"}
                                   value={password}
                                   onChange={passwordSend}
                                   style={styles.input}/>
                        </Grid>
                        <Grid mt={2} ml={23} pb={3}>
                            <Button onClick={()=>setActive(false)} sx={{
                                backgroundColor: '#424867',
                                color: '#FFFFFF',
                                textTransform: 'capitalize',
                                padding: '12px 15px',
                                borderRadius: '12px'
                            }}>
                                Отменить
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalAutorizate