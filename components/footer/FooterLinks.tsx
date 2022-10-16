import React from "react";
import { Grid, Typography, } from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/system";
import { IconTelegram } from "./componentsIconFooter/IconTelegram";
import { IconYoutube } from "./componentsIconFooter/IconYoutube";
import { IconVK } from "./componentsIconFooter/IconVK";


// компонент отвечает за вывод информации в Footer
const FooterLinks = ({footerText}) => {

  return (
    <Grid container gap={2}>
      {footerText.map((el, i)=>(
        <Grid xs={12} sm={4} md={3.5} key={el.id}>
          <Typography pb={2} sx={{fontSize: 18, fontWeight: 700}}>{el.text}</Typography>

          {el.text === 'Контакты' ? 
              <Grid>
                {el.href.map((e, i) => (<Typography key={i} 
                                          sx={{
                                            fontSize: 14,
                                            fontWeight: 400, 
                                            lineHeight: 2,
                                          }}>
                                            {e.title}
                                        </Typography>))}
                                        {/* социальные сети */}
                                        <Box 
                                        sx={{
                                          display: 'flex',
                                          columnGap: 2,
                                          mt: 2
                                        }}>
                                          <IconTelegram />
                                          <IconYoutube />
                                          <IconVK />
                                        </Box>
              </Grid> :
              <Grid>
                {el.href.map((e, i) => (<Typography key={i} 
                                          sx={{
                                            fontSize: 14, 
                                            fontWeight: 400, 
                                            lineHeight: 2,
                                            cursor: 'pointer',
                                          }}>
                                            {e.title}
                                        </Typography>))}</Grid>}    
        </Grid>
      ))}
    </Grid>      
  ); 
};
export default FooterLinks;
