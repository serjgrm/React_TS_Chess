import './GameOver.css'

export const GameOver = () => {
  const handleReload = () => {
    window.location.reload();
  }

  return (
    <div className='gameover'>
      <p className='p-gameover'>GAME OVER</p>
      <div className="buttons">
        <button onClick={handleReload} className="btn"><span></span><p className='p-button' data-start="good luck!" data-text="restart!" data-title="new game"></p></button>
      </div>
    </div>
  );
};