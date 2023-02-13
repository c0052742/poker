import {useRef,  useState } from 'react';
export function StatFrom(props){
    const [winnings, setWinnings] = useState(0);
    const [buyin, setBuyin] = useState(0);
    const changeWinnings =(event) =>{
        setWinnings(event.target.value);
    }
    const changeBuyin =(event)=>{
        setBuyin(event.target.value);
    }
    const gameNameInputRef = useRef();
    const gameDateInputRef = useRef();
    const placeInputRef = useRef();
    const wonInputRef = useRef(null);
    const amountWonInputRef = useRef();
    const buyinInputRef = useRef();

    function StatSubmitHandler(event){
       
        event.preventDefault();
        const enteredGameName = gameNameInputRef.current.value;
        const enteredGameDate = gameDateInputRef.current.value;
        const enteredPlace = placeInputRef.current.value;
        const enteredWon = wonInputRef.current.checked;
        const enteredAmountWon = amountWonInputRef.current.value;
        const enteredBuyin = buyinInputRef.current.value;

        const statsData = {
            gameName: enteredGameName,
            gameDate: enteredGameDate,
            place: enteredPlace,
            won: enteredWon,
            amountWon: enteredAmountWon,
            buyin: enteredBuyin,
        }
        props.StatLoginForm(statsData);
    }
    
    return (
    <div>
        <div className="FormContainer">
        
        <form onSubmit={StatSubmitHandler}>
            <div >Submit Stats</div>
            <div>
                <h>Game name</h>
                <input type='text' 
                required id='GameName' 
                placeholder='Name' 
                ref={gameNameInputRef}/>
            </div>
            <div>
                <h>Date</h>
                <input type='date'
                    required id='date'
                    placeholder='0000-00-00'
                    ref={gameDateInputRef}
                />
            </div>
            <div>
                <h>Placement</h>
                <input type='text'
                required id='place'
                placeholder='1,2,3'
                ref={placeInputRef}
                />
            </div>
            <div>
                <h>Did you win?</h>
                <input type="checkbox" 
                defaultChecked={false}
                require id="won"
                ref={wonInputRef}/>
            </div>
            <div>
            <p>Winnings: {winnings}€</p>
                <h>Amount won</h>
                <input type='range'
                required id='amountWon'
                min='0'
                max='100'
                step='1'
                onChange={changeWinnings}
                value={winnings}
                ref={amountWonInputRef}/>
                
            </div>
            <div>
            <p>Buy-in: {buyin}€</p>
            <input type='range'
                required id='buyin'
                min='0'
                max='100'
                step='1'
                onChange={changeBuyin}
                value={buyin}
                ref={buyinInputRef}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
        </div>
    </div>
    );

}
export default StatFrom;