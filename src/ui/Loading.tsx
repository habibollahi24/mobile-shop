import { Grid, Skeleton, Stack } from "@mui/material";

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

export function SimilarLoader() {
  return (
    <Skeleton
      variant="rounded"
      height={260}
      sx={{ borderRadius: "15px", position: "relative", m: 5 }}
    />
  );
}
export function ProductLoader() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Skeleton
          variant="rounded"
          height={40}
          width={40}
          sx={{ borderRadius: "15px", position: "relative" }}
        />
        <Skeleton
          variant="rounded"
          height={40}
          width={80}
          sx={{ borderRadius: "15px", position: "relative" }}
        />
      </Stack>
      <Skeleton
        variant="rounded"
        height={300}
        sx={{ borderRadius: "15px", position: "relative", my: 3 }}
      />
      <Stack direction="row" justifyContent="space-between">
        <Skeleton
          variant="rounded"
          height={40}
          width={120}
          sx={{ borderRadius: "15px", position: "relative" }}
        />
        <Skeleton
          variant="rounded"
          height={40}
          width={120}
          sx={{ borderRadius: "15px", position: "relative" }}
        />
      </Stack>
      <Skeleton
        variant="rounded"
        height={150}
        sx={{ borderRadius: "15px", position: "relative", my: 3 }}
      />
    </>
  );
}
