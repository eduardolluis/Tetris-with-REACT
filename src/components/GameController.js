import "./GameController.css";
import { Action, actionForKey } from "../Business/Input";
import { playerController } from "../Business/PlayerController";
import { useInterval } from "../hooks/useInterval";
import { useDropTime } from "../hooks/useDropTime";

const GameController = ({
  board,
  player,
  gameStats,
  setGameOver,
  setPlayer,
}) => {
  const [dropTime] = useDropTime({
    gameStats,
  });

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (action === Action.Quit) {
      setGameOver(true);
    }
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);
    handleInput({ action });
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  return (
    <div>
      <input
        className="GameController"
        type="text"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        autoFocus
      />
      
    </div>
  );
};

export default GameController;
