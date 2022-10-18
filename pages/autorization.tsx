import AutorizationUser from "../components/autorization/AutorizationUser";
import {Container, Grid} from "@mui/material";


const Autorization = () => {
  return(
      <Container>
        <Grid mt={15} ml={45}>
          <AutorizationUser/>
        </Grid>
      </Container>
  )
}

export default Autorization