import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// import { Link } from "react-router-dom";

const ServiceCard = ({ imgUrl, imgSize, title, desc, toUrl, ...others }) => {
  return (
    <Paper sx={{ maxWidth: "260px", height: '380px', p: 2 }} {...others}>
      <Stack direction={"column"} alignItems={"center"} spacing={2} height={'100%'}>
        <Box
          sx={{
            py: 2,
            "& svg": {
              lineStoke: '1px'
            }
          }}
        >
          <Image src={imgUrl} height={imgSize} width={imgSize} />
        </Box>
        <Typography variant={"h5"} paragraph sx={{textAlign: 'center'}}>{title}</Typography>
        <Typography variant={"normal"} paragraph sx={{ flexGrow: 1, textAlign: "center", display: 'flex', alignItems: 'center', justifyContent:'center' }}>
          {desc}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ServiceCard;
