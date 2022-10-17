import Typography from "@mui/material/Typography";

const HelpPets = ({isHover, children}) => {
    if (isHover){
        return(
            <>
                {children}
                <Typography>
                    fsda
                </Typography>
            </>
        )
    }return (
        <>
            {children}
        </>
    )
}

export default HelpPets