import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Data from '../Data';
import { useNavigate } from 'react-router-dom';
export default function MediaCard() {
    const navigate = useNavigate()
  return (<>
    {
        Data.map((e,i)=>{
            console.log(e.image)
            return(
                <div style={{display:'inline-block'}} key={i}>
                <Card sx={{ maxWidth: 345 ,borderRadius:'10px',margin:'10px',boxShadow:"0px 0px 10px black"}}>
                  <CardMedia
                    sx={{ height: 230 }}
                    image={e.image}
                    title={e.category}
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.title.slice(0,45)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {e.description.slice(0,150)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="h1" onClick={()=>navigate(`/product/${e.id}`)}>View</Button>
                  </CardActions>
                </Card>
                    </div>
            )
        })
    }
    </>
  );
}