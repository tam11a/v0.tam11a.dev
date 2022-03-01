import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// import { Link } from "react-router-dom";

const ServiceCard = ({ imgUrl, imgSize, title, desc, toUrl, ...others }) => {
  return (
    <Paper sx={{ maxWidth: "260px", p: 2 }} {...others}>
      <Stack direction={"column"} alignItems={"center"} spacing={2}>
        <Box
          sx={{
            py: 2,
          }}
        >
          <Image src={imgUrl} height={imgSize} width={imgSize} />
        </Box>
        <Typography variant={"h5"}>{title}</Typography>
        <Typography variant={"normal"} sx={{ textAlign: "center" }}>
          {desc}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ServiceCard;
