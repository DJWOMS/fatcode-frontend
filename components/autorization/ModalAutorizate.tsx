import {
    Avatar,
    Box,
    Button,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Modal,
    Select,
    TextField,
    Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 5,
    bgcolor: '#1E2235',
    p: '24px',
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
            <Box style={style}>
                <Box mb={3} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
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
                    <Button onClick={()=>setActive(false)} sx={{
                        backgroundColor: '#424867',
                        color: '#FFFFFF',
                        textTransform: 'capitalize',
                        padding: '12px 15px',
                        borderRadius: '12px'
                    }}>
                        Отменить
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalAutorizate