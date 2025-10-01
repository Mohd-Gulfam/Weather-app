import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox( {info}) {
   
    const Rain_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
    const Could_URL ="https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const Hot_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=2048x2048&w=is&k=20&c=vs-wMhpIBhtgOfVrwVCGOIqto--JCLnYkunCXaq0F7c="

    return(
        <div className="infoBox">
        <div className='card'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humdity > 80? Rain_URL : info.temp>15? Hot_URL : Could_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2"  color="text.secondary"  component={"span"}>
         <p>Temprature = {info.temp}&deg;</p>
         <p>Humidity = {info.humdity}</p>
         <p>Min Tamp = {info.tepmMin}&deg;</p>
         <p>Max Tamp = {info.tepmMax}&deg;</p>
         <p>The weather can be described as <b>haze</b> and fees = {info.feelslike}&deg;</p>
         <p></p>
        </Typography>
      </CardContent>
      
      </Card>
      </div>

     </div>
    )
}