import React, {useState, useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import axios from "axios";
import { Select, MenuItem, InputLabel, FormControl, Button, Container } from '@mui/material';

const QuizStart = () => {
 const [amount, setAmount] = useState("");
 const [difficulty, setDifficulty] = useState("");
 const [category, setCategory] = useState("");

 const { gameState, setGameState } = useContext(QuizContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmount(amount);
    setDifficulty(difficulty);
    setCategory(category);
  };

  const handleAmount = (e) => setAmount(e.target.value);
  const handleDifficulty = (e) => setDifficulty(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
 
 
 
 return <div className="FormApp" style={{ width: '100%' }} >
            <Container style={{ width:200, margin: 'auto' }}>
            <FormControl onSubmit={handleSubmit} className="form" margin='normal' >
                
                
                <FormControl margin='normal'>
                <InputLabel id="amount-label">Amount</InputLabel>
                    <Select labelId="amount-label"
                            id = "amount" 
                            
                            value={amount}
                            label="Amount" 
                            onChange={handleAmount}
                            
                    >           
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                    </Select>     
               </FormControl>
               <FormControl margin='normal'>
                <InputLabel id="difficulty-label">Difficulty</InputLabel>
                
                <Select labelId="difficulty-label"
                        id = "difficulty" 
                        value={difficulty}
                        label="Difficulty" 
                        onChange={handleDifficulty}
                        
                >           
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>                
                </Select>     
                </FormControl>
                <FormControl margin='normal'>
                <InputLabel id="category-label">Category</InputLabel>
                
                <Select labelId="category-label"
                        id = "category" 
                        value={category}
                        label="Category" 
                        onChange={handleCategory}
                        
                >           
                    <MenuItem value="9">General Knowledge</MenuItem>
                    <MenuItem value="21">Sports</MenuItem>
                    <MenuItem value="15">Video Games</MenuItem>
                    <MenuItem value="23">History</MenuItem>
                    <MenuItem value="31">Anime & Manga</MenuItem>
                </Select>   


                <Button onClick={() => getQuiz([amount, difficulty, category]) && setGameState("quiz")} variant="contained" type="submit" value="Start Quiz" >Start Quiz</Button>

                </FormControl>
              
            </FormControl>
            </Container>
        
        </div>
        
};

    export async function getQuiz([amount, difficulty, category]) {
    try{
    let { data } = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)  
    // console.log(data)
    return { data }

    }catch(error){
        throw error
    }
}

export default QuizStart ;
