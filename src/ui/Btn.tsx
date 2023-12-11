// import { Button } from "@mui/material";

// import { styled } from "@mui/material/styles";

// interface Props extends React.HTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
//   variant: "text" | "outlined" | "contained";
//   color:
//     | "inherit"
//     | "primary"
//     | "secondary"
//     | "success"
//     | "error"
//     | "info"
//     | "warning";
//   size?: "small" | "medium" | "large";
//   noring?: string;
//   disabled?: boolean;
// }

// const CustomButton = styled(Button)<Props>(({ theme, color, noring }) => ({
//   "&:hover": {
//     boxShadow: `0 0 0 1px #fff , 0 0 0 3px ${
//       !noring &&
//       (color === "primary"
//         ? theme.palette.primary.main
//         : color === "secondary"
//         ? theme.palette.secondary.main
//         : "")
//     }`,
//   },
// }));

// function Btn(props: Props) {
//   const { children, variant, color, noring, disabled, size } = props;
//   return (
//     <CustomButton
//       {...props}
//       variant={variant}
//       color={color}
//       size={size}
//       noring={noring}
//       disabled={disabled}
//     >
//       {children}
//     </CustomButton>
//   );
// }

// export default Btn;
