import {useRef,  useState } from 'react';
import './form.css';
export function StatFrom(props){
    const [showRebuyAmount, setShowRebuyAmount] = useState(false);
    const toggleRebuyAmount = () => {
        setShowRebuyAmount(rebuyInputRef.current.checked);
      };
    const gameDateInputRef = useRef();
    const placeInputRef = useRef();
    const amountWonInputRef = useRef();
    const buyinInputRef = useRef();
    const rebuyInputRef = useRef(null);
    const rebuyAmountRef = useRef();

    function StatSubmitHandler(event){
       
        event.preventDefault();

        const enteredGameDate = gameDateInputRef.current.value;
        const enteredPlace = placeInputRef.current.value;
        const enteredAmountWon = amountWonInputRef.current.value;
        const enteredBuyin = buyinInputRef.current.value;
        const enteredRebuy = rebuyInputRef.current.checked;
        const enteredRebuyAmount = enteredRebuy ? rebuyAmountRef.current.value : 0;


        const statsData = {
            gameDate: enteredGameDate,
            place: enteredPlace,
            amountWon: enteredAmountWon,
            buyin: enteredBuyin,
            rebuy:enteredRebuy,
            rebuyAmount:enteredRebuyAmount,
        }
        props.addStatsForm(statsData);
    }
    
    return (
        <div className="body">
        <form className='form' onSubmit={StatSubmitHandler}>
            <div className="title">Submit Stats</div>
            <div className="input-container ic1">
                <input type="date" required id="date" className="input" ref={gameDateInputRef} />
                <div className="cut"></div>
                <label htmlFor="date" className="placeholder">Date</label>
            </div>
            <div className="input-container ic2">
                <input type="number" required id="place" min={1} className="input" ref={placeInputRef} />
                <div className="cut"></div>
                <label htmlFor="place" className="placeholder">Placement</label>
            </div>
            <div className="input-container ic2">
                <input type="number" 
                required 
                id="amountWon" 
                min='0'
                max='100'
                step='1' 
                className="input"
                ref={amountWonInputRef}/>
                <div className="cut"></div>
                <label htmlFor="amountWon" className="placeholder">Winnings</label>
            </div>
            <div className="input-container ic2">
                <input type="number" 
                required 
                id="buyin" 
                min='0'
                max='100'
                step='1' 
                className="input"
                ref={buyinInputRef}/>
                <div className="cut"></div>
                <label htmlFor="buyin" className="placeholder">Buy-in price</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked={false}
                id="rebuyBox"
                ref={rebuyInputRef}
                onChange={toggleRebuyAmount}
              />
              <label htmlFor="rebuyBox" className="checkbox-label">Did you rebuy?</label>
            </div>
              {showRebuyAmount && (
            <div className="input-container ic2">
              <input
                type='number'
                required
                id='rebuyAmount'
                min='0'
                max='100'
                step='1'
                className="input"
                ref={rebuyAmountRef}
              />
              <div className="cut"></div>
              <label htmlFor="rebuyAmount" className="placeholder">Rebuy price</label>
            </div>
          )}
          <button className="submit">Submit</button>
        </form>
      </div>
    );

}
export default StatFrom;