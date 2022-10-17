import {Container, Grid, Input, Typography} from "@mui/material";
import InputAndLabel from "../components/autorization/inputAndLabel";
import {useState} from "react";
import RegisterForm from "../components/autorization/RegisterForm";


const Authorization = () => {

  return(
      <Container>
          <Grid container>
            <Grid xs={7}>
                <Typography>
                    Выберите питомца
                </Typography>
                <Typography>
                    Тут картинки
                </Typography>
                <Typography>
                    Имя питомца
                </Typography>
                <Input />
            </Grid>
              <Grid xs={5} mt={15}>
                  <Container maxWidth={"xl"}>
                   <RegisterForm/>
                  </Container>
              </Grid>
          </Grid>
      </Container>
  )
}


export default Authorization