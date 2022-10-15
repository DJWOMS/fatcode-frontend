import Grid from "@mui/material/Grid";
import Image from "next/image";
import React, { useState } from "react";
import { Avatar, ImageList, ImageListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { PropsChildren } from "../../type/PropsChildren";
import ClickAwayListener from '@mui/material/ClickAwayListener';

const PetsDonats: React.FC<PropsChildren> = ({ petsList }) => {  
  // обнулим для сброса    
  const [key, setKey] = useState(null);
  
  return (
      <ImageList>
        {petsList.map(item => (
          <Box key={item.key} onClick={() => setKey(item.key)} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
            <Avatar src={item.img}
            sx={{
              width: 250,
              height: 250,
              cursor: 'pointer',
              marginBottom: 6,
            }}/>

            {/* вывод текста, проверка ключа, чтобы совпадал с выбранным*/}
            {item.key === key && <Box 
            sx={{
                position: 'absolute',
                bottom: 0,
                width: '80%',
                padding: 2,
                color: '#FFFFFF',
                backgroundColor: '#69CB2D',
                borderRadius: 4,
            }}>
                {item.text}
            </Box>}
          </Box>
        ))}
      </ImageList>
    );
  }

export default PetsDonats;  


{/* <ImageList>
          {
              petsList.map((item)=>(
                  <ImageListItem
                      key={item.key}
                      onClick={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      sx={{
                          marginTop: 2,
                          marginBottom: 2
                      }}>
                      { isHover ? (<>
                          <Avatar
                              src={item.img}
                              sx={{
                                  width: 250,
                                  height: 250
                              }}/>
                          <Typography>fsdsd</Typography>
                      </>) : (<>
                          <Avatar
                              src={item.img}
                              sx={{
                                  width: 250,
                                  height: 250
                              }}/>
                      </> ) }
                  </ImageListItem>
              ))
          }
          </ImageList> */}