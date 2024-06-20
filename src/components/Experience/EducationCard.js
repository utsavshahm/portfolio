import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Stack } from "@mui/material";

function EducationCard(props) {
  

  const { icon, edu, org, year, gridSize, svg = false, type = "edu" } = props.details;
  return (
    <>
      <Grid
        item
        md={gridSize}
        xs={4}
        height={type==="exp" ? "25%" : "33%"}
        // border={1}
        display={"flex"}

        justifyContent={"center"}
        alignItems={"center"}
        boxShadow={`rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px`}
      >
        <Grid
          //   border={1}
          height={"80%"}
          width={"90%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            item
            xs={gridSize === 4 ? 3 : 4}
            display={"flex"}
            direction={"row"}
            gap={2}
          >
            <Stack direction={"column"} className="edu-icon">
              {svg === false ? (
                <FontAwesomeIcon
                  icon={icon}
                  fontSize={"1.5em"}
                  color="#0077b5"
                />
              ) : (
                <img src={icon} height={"20px"} alt="logo" />
              )}
            </Stack>
            <Stack
              direction={"column"}
              className="edu-card-desc"
              //   border={1}
              width={"100%"}
              gap={1}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={3}
              >
                <h3>{edu}</h3>
              </Stack>
              <p>{org}</p>
            </Stack>
          </Grid>

          {gridSize === 4 ? (
            <Grid
              item
              xs={1}
              display={"flex"}
              direction={"row"}
              justifyContent={"flex-end"}
            >
              <h3 className="edu-card-time">{year}</h3>
            </Grid>
          ) : (
            <p />
          )}
        </Grid>
      </Grid>
    </>
  );
}
export default EducationCard;