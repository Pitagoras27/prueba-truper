import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cards = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { data } = props;
  console.log(data.results);
  return (
    <>
      {data.results.length > 0 &&
        data.results.map((item) => {
          return (
            <Card className={classes.root} key={item._id}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {item.stations[0].indexes.scale}
                </Typography>
                <Typography variant="h5" component="h2">
                  {item.stations[0].name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {item.stations[0].source_id}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.stations[0].indexes[0].calculationTime}
                  <br />
                  {item.stations[0].indexes[0].scale}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
};

export default Cards;
