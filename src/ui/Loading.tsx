import { Grid, Skeleton } from "@mui/material";

export function LoaderList({ number = 6 }: { number?: number }) {
  return (
    <Grid container spacing={2}>
      {[...new Array(number)].fill(1).map((_, index) => {
        return (
          <Grid key={index} item xs={6} sx={{ textAlign: "center" }}>
            <Skeleton
              variant="rounded"
              height={260}
              sx={{ borderRadius: "15px", position: "relative" }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
