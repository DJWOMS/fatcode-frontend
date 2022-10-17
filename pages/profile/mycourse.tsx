import React from "react";
import BackgoundUser from "../../layout/ProfileBack/BackgoundUser";
import ProfileTitle from "../../components/profile/ProfileTitle";
import {Container, Grid} from "@mui/material";
import StartCourses from "../../components/profile/my_courses/MyCourses";

const MyCourses = () => {
    return(
      <BackgoundUser>
        <ProfileTitle text={"Мои курсы"}/>
          <Grid container>
            <Container>
              <Grid xs>
                <StartCourses />
              </Grid>
            </Container>
          </Grid>
      </BackgoundUser>
    )
}

export default MyCourses;