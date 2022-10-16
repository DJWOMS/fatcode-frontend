import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

type LeftMenu = {
    list: List[]
}

type List = {
    key?: number,
    text?: string,
    href: string
}

//Навесить линки на переходы по страницам
const TextLeftMenu: React.FC<LeftMenu> = ({ list }) => {

    return (
        <>
            {
                list.map(item => (
                    <Grid>
                        <Typography key={item.key} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: 2,
                            color: "white",
                            fontSize: 25,
                            fontWeight: "bold",
                            paddingX: 4,
                            paddingY: 1,
                            "&:hover": {
                                background: "white",
                                color: "#69CB2D",
                            }
                        }}>
                            {item.icon}
                            <Link href={item.href}>{item.text}</Link>
                        </Typography>
                    </Grid>
                ))
            }
        </>
    )
}

export default TextLeftMenu