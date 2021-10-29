import React, { ReactNode } from "react";
import { Box, Container, Grid } from "@mui/material";

type Props = {
  leftNode: ReactNode;
  rightNode: ReactNode;
};

export const SplitSection = ({ leftNode, rightNode }: Props) => {
  return (
    <Container fixed>
      <Box sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container spacing={15}>
          <Grid item sm={12} md={6}>
            {leftNode}
          </Grid>
          <Grid item sm={12} md={6}>
            {rightNode}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
