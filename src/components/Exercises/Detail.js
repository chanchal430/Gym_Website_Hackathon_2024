import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../../images/icons/body-part.png";
import TargetImage from "../../images/icons/target.png";
import EquipmentImage from "../../images/icons/equipment.png";
import Footer from "../Footer/Footer";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <>
  <section
    id="exerciseDetails"
    className="w-full h-screen min800:flex min800:justify-center min800:text-center items-center justify-center"
  >
    <Stack
      gap="60px"
      sx={{ p: "20px", alignItems: "center", width: "100%" }}
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent="center"
      boxSizing="border-box"
      flexDirection= { {xs: "column", lg: "row"} }

    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
</section>
</>
  );
};

export default Detail;

// import React from "react";
// import { Typography, Button } from "@mui/material";

// import BodyPartImage from "../../images/icons/body-part.png";
// import TargetImage from "../../images/icons/target.png";
// import EquipmentImage from "../../images/icons/equipment.png";

// const Detail = ({ exerciseDetail }) => {
//   const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

//   const extraDetail = [
//     {
//       icon: BodyPartImage,
//       name: bodyPart,
//     },
//     {
//       icon: TargetImage,
//       name: target,
//     },
//     {
//       icon: EquipmentImage,
//       name: equipment,
//     },
//   ];

//   return (
//     <div
//       style={{
//         alignItems: "center",
//         padding: "20px",
//         width: "100%",
//         boxSizing: "border-box",
//       }}
//       className="flex flex-col md:flex-row items-center justify-center"
//     >
//       <img
//         src={gifUrl}
//         alt={name}
//         loading="lazy"
//         className="detail-image"
//         style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
//       />
//       <div
//         className="flex flex-col gap-[60px] lg:gap-[16px] "
//       >
//         <Typography
//           sx={{ fontSize: { lg: "64px", xs: "30px" } }}
//           fontWeight={700}
//           textTransform="capitalize"
//         >
//           {name}
//         </Typography>
//         <Typography
//           sx={{ fontSize: { lg: "24px", xs: "18px" } }}
//           color="#4F4C4C"
//         >
//           Exercises keep you strong.{" "}
//           <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
//           of the best <br /> exercises to target your {target}. It will help you
//           improve your <br /> mood and gain energy.
//         </Typography>
//         {extraDetail?.map((item) => (
//           <div key={item.name} style={{ gap: "24px" }} className="flex justify-center items-center">
//             <Button
//               sx={{
//                 background: "#FFF2DB",
//                 borderRadius: "50%",
//                 width: "100px",
//                 height: "100px",
//               }}
//             >
//               <img
//                 src={item.icon}
//                 alt={bodyPart}
//                 style={{ width: "50px", height: "50px" }}
//               />
//             </Button>
//             <Typography
//               textTransform="capitalize"
//               sx={{ fontSize: { lg: "30px", xs: "20px", width: "10vw" } }}
//             >
//               {item.name}
//             </Typography>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Detail;




