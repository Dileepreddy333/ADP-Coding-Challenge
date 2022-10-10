import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import { useState, useEffect } from "react";

export default function RecipeReviewCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/icecreamshops`)
      .then((response) => {
        console.log(response.data)
        setData(response.data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Top 5 Ice cream shops in Alpharetta</h1>

      {
        data && data.map((d) => {
          return <div style={{ padding: 30 }} align="center"> <Card sx={{ maxWidth: 545 }} spacing={10} justify="center">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  i
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={d.name}
              subheader={d.alias}
            />
            <CardMedia
              component="img"
              height="194"
              image={d.image_url}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {d.location.address1} <br />
                {d.location.address2} <br />
                {d.location.city} <br />
                {d.location.zip_code}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="star">
                Rating: {d.rating}
              </IconButton>
            </CardActions>
            <br />
          </Card>
          </div>
        }
        )
      }
    </>
  );
}
