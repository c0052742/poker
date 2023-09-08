import StatFrom from "../../Components/Form/StatsForm";
function StatPage(){
    async function addStatHandler(statsData){
        await fetch('/stats',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(statsData)
          }).then(console.log(statsData))
            .then(response => response.json())
            .then(statsData => {
              alert('Stats posted successful!');
            })
            .catch(error => {
              console.error(error);
              alert('Stats post failed.');
            });

        }
    return(
        <div>
            <StatFrom addStatsForm={addStatHandler}/>
        </div>
    );
}
export default StatPage;