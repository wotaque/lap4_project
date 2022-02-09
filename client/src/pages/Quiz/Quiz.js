import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Question from '../../components/Question/Question';
import CustomTheme from './muiTheme';


import SupportIcon from '@mui/icons-material/Support';

import { Container, ThemeProvider, Card, Typography, CssBaseline, Paper, Link} from '@mui/material';
import { makeStyles } from '@mui/styles';

const Quiz = ({score,questions,setScore,number,players}) => {

  const [choices, setChoices] = useState()
  const [curQues , setCurQues] = useState(0)
  const [curPlay, setCurPlay] = useState(1)
     
  useEffect(()=>{
    //console.log(questions)
    setChoices(questions && 
      handleShuffle([questions[curQues]?.correct_answer, 
        ...questions[curQues]?.incorrect_answers,])
    );
  },[questions,curQues]); 
  
  // useEffect(()=>{
  //   setCurPlay(curPlay) 
  // },[curPlay, setCurPlay])

  //console.log(choices)
  //shuffle answers

  const handleShuffle = (options) => {
    return options.sort(()=> Math.random() -0.5 );
  }

  const useStyles = makeStyles({
    paperRoot: {
      background: 'linear-gradient(45deg, #A0D2EB 30%, #D0BDF4 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: '#8458B3', 
    },
  });

 const classes = useStyles();

  return (
    
    <div className={classes.root} style={{ width: '100%' }} >
      <CssBaseline />

      <Card 
        sx={{ maxWidth: 600 }} 
        style={{ width: 500, margin: 'auto' }}>

        <Paper className={classes.paperRoot}
          component="form">
          {/* sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }} */}
        
      
          { questions ?(
            <div>

            <Typography gutterBottom variant="h5" component="div">
              {/* <h1>Score : {score}/{number}</h1> */}
                Player:{curPlay}</Typography>
            

                {/*<div> */}
              {/* {/* <h1>Score : {score}/{number}</h1> */} 
              {/*<h1>Player:{curPlay}</h1> */}
          {/*</div> */}

            
              <Question 
                curQues={curQues}
                setCurQues={setCurQues}
                questions={questions}
                choices={choices}
                correct={questions[curQues]?.correct_answer}
                score={score}
                setScore={setScore}
                number={number}
                players={players}
                curPlay={curPlay}
                setCurPlay={setCurPlay}
              />
        
            </div>

          ):(<CircularProgress />)
          }

          <Link
            href="https://www.wikipedia.org/"
            rel="noreferrer"
            target="_blank"
            id="tweet-quote"
          >
            <SupportIcon />
          </Link>


          

        </Paper>

    
      </Card>
    </div>
  )
};

export default Quiz;