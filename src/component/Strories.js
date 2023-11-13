import React from "react";
import { useGlogalContext } from "../context/context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import SpinnerGif from "./SpinnerGif.gif";

const Strories = () => {
  //   const value = useGlogalContext();
  const { hits, isLoading, handleRemove } = useGlogalContext();

  if (isLoading) {
    return (
      <div className="container text-center mt-2">
        <img src={SpinnerGif} alt="" />
      </div>
    );
  }

  return (
    <>
      <div className="container stories">
        {hits.map((ele, idx) => {
          return (
            <Card key={idx} className="news">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By {ele.author} | {ele.num_comments} Comments
                </Typography>
              </CardContent>
              <CardActions>
                <NavLink to={`${ele.url}`} target="_blank">
                  {" "}
                  <Button size="small">Read More</Button>
                </NavLink>
                <Button size="small" onClick={() => handleRemove(ele.objectID)}>
                  Remove
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Strories;
