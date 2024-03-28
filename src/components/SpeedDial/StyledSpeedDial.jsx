import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate, useNavigation } from 'react-router-dom';







const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  {icon: <XIcon />, name: 'Twitter', link:"https://twitter.com/i/flow/login"},
  { icon: <FacebookIcon />, name: 'Facebook',link:"https://www.facebook.com/" },
  { icon: <WhatsAppIcon />, name: 'Whatsapp',link:"https://www.whatsapp.com/"},
  { icon: <RedditIcon/>, name: 'Reddit',link:"https://www.reddit.com/login/?rdt=43227" },
  {icon:<LinkedInIcon/>,name:'LinkedIn',link:"https://www.linkedin.com/login"},
  {icon:<EmailIcon/>,name:'Email',link:"https://mail.google.com/mail/u/0/#inbox"}
 
];

export default function PlaygroundSpeedDial() {
  const [direction, setDirection] = React.useState('left');
  const [hidden, setHidden] = React.useState(false);
  const[isHover,setIsHover]=React.useState(false)
  


  return (
    <div style={{height:"2rem"}}>
    <Box sx={{ transform: 'translateY(-310px)', flexGrow: 1 }}>
     
      <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
        
       
      </FormControl>
      <Box sx={{ position: 'relative', mt: 3, height: 320,}}>
        <StyledSpeedDial
        onMouseOver={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        
        style={{background:isHover?"#fff":"transparent",border:isHover?"solid 1px gray":"none"}}
          className='StyledSpeedDial'
          ariaLabel="SpeedDial playground example"
        
          icon={<ShareIcon />}
          direction={direction}
         
        >
          {actions.map((action) => (
            <SpeedDialAction
               href={action.link}
               target="/"
               key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
    </div>
  );
}