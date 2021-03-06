import React, { useState} from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attemp: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    function resetGame() {
        setState({...state, guess: '',attemp: state.attemp+1})
    }

    function handleClick() {
        resetGame()
    }

    const activationHandler = c => {
        console.log(`${c} has been activated`)
        let guess = state.guess + c
        setState({...state, guess})
        if(state.guess.length === state.word.length){
            if(state.guess === state.word){
                console.log('yeah!')
                
                
            }
            else{
                console.log('reset, next attemp')
                
            }
        }
        

        console.log(guess)
    }

    

    
    
    return (
        <div className='text-center'>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attemp={state.attemp}/>
                )
            }
            <div className="container text-center">
                <button className='btn btn-danger reset-btn' onClick={handleClick}>Reset</button>
            </div>
            <div className="container">
                <br />
                <h1>{state.guess}</h1>
                {
                    state.guess.length == state.word.length && <h1>{state.guess == state.word? 'correct' : 'wrong'}</h1>
                }
            </div>
        </div>
    )
}