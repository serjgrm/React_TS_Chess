type Props = {
  handleRestart: () => void
}

export const RestartButton: React.FC<Props> = ({ handleRestart }) => {
  return (
    <div className="buttons">
      <button onClick={handleRestart} className="btn"><span></span><p className='p-button' data-start="good luck!" data-text="restart!" data-title="new game"></p></button>
    </div>
  );
};