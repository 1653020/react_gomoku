import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
let matrix = 20;

function Square(props) {
    return (
        <button
            className={"square " + (props.isWinning ? "square--won" : "")}
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                key={i}
                isWinning={this.props.winningSquares.includes(i)}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        // Refactoring - Turning hard coded renderSquare to 2 for loops
        let squares = [];
        for (let i = 0; i < matrix; i++) {
            let row = [];
            for (let j = 0; j < matrix; j++) {
                row.push(this.renderSquare(i * matrix + j));
            }
            squares.push(
                <div key={i} className="board-row">
                    {row}
                </div>
            );
        }
        return <div> {squares} </div>;
    }
}

class Game extends React.Component {
    state = {
        squares: Array(matrix * matrix).fill(null),
        history: [
            {
                squares: Array(matrix* matrix).fill(null)
            }
        ],
        xIsNext: true,
        stepNumber: 0,
        isAscending: true
    };

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares: squares,
            history: history.concat([
                {
                    squares: squares,
                    latestMoveSquare: i
                }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }
    
    handleSortToggle() {
        this.setState({
            isAscending: !this.state.isAscending
        });
    }

    render() {
        const history = this.state.history;
        const stepNumber = this.state.stepNumber;
        const current = history[stepNumber];
        const winner = calculateWinner(this.state.squares);

        let moves = history.map((step, move) => {
            const latestMoveSquare = step.latestMoveSquare;
            const col = 1 + latestMoveSquare % matrix;
            const row = 1 + Math.floor(latestMoveSquare / matrix);
            const desc = move ?
                `Go to move #${move} (${col}, ${row})` :
                'Go to game start';
            return (
                <li key={move}>
                {/* Bold the currently selected item */ }
                <button
                    className={move === stepNumber ? 'move-list-item-selected' : ''}
                    onClick={() => this.jumpTo(move)}>{desc}
                </button>
                </li>
            );
        });

        let status;

        //status win or draw
        if (winner) {
            status = "Winner is " + winner.winner;
        } else if (!this.state.squares.includes(null)) {
            status = "Draw";
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        const isAscending = this.state.isAscending;
        if (!isAscending) {
            moves.reverse();
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winningSquares={winner ? winner.line : []}
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <button onClick={() => this.handleSortToggle()}>
                    {isAscending ? 'descending' : 'ascending'}
                    </button>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    //check ngang
    for (let i = 0; i < matrix; i++) {
        for (let j = 0; j < matrix - 4; j++) {
            if (squares[i * matrix + j] && squares[i * matrix + j] === squares[i * matrix + j + 1] && squares[i * matrix + j] === squares[i * matrix + j + 2] && squares[i * matrix + j] === squares[i * matrix + j + 3] && squares[i * matrix + j] === squares[i * matrix + j + 4]) {
                return { winner: squares[i * matrix + j], line: [i * matrix + j, i * matrix + j + 1, i * matrix + j + 2, i * matrix + j + 3, i * matrix + j + 4] };
            }
        }
    };

    //check dọc
    for (let j = 0; j < matrix; j++) {
        for (let i = 0; i < matrix - 4; i++) {
            if (squares[i * matrix + j] && squares[i * matrix + j] === squares[(i + 1) * matrix + j] && squares[i * matrix + j] === squares[(i + 2) * matrix + j] && squares[i * matrix + j] === squares[(i + 3) * matrix + j] && squares[i * matrix + j] === squares[(i + 4) * matrix + j]) {
                return { winner: squares[i * matrix + j], line: [i * matrix + j, (i + 1) * matrix + j, (i + 2) * matrix + j, (i + 3) * matrix + j, (i + 4) * matrix + j] };
            }
        }
    }

    //check chéo phải
    for (let i = 0; i < matrix - 4; i++) {
        for (let j = 0; j < matrix - 4; j++) {
            if (squares[i * matrix + j] && squares[i * matrix + j] === squares[(i + 1) * matrix + j + 1] && squares[i * matrix + j] === squares[(i + 2) * matrix + j + 2] && squares[i * matrix + j] === squares[(i + 3) * matrix + j + 3] && squares[i * matrix + j] === squares[(i + 4) * matrix + j + 4]) {
                return { winner: squares[i * matrix + j], line: [i * matrix + j, (i + 1) * matrix + j + 1, (i + 2) * matrix + j + 2, (i + 3) * matrix + j + 3, (i + 4) * matrix + j + 4] };
            }
        }
    };

    //check chéo trái
    for (let i = 0; i < matrix - 4; i++) {
        for (let j = 4; j < matrix; j++) {
            if (squares[i * matrix + j] && squares[i * matrix + j] === squares[(i + 1) * matrix + j - 1] && squares[i * matrix + j] === squares[(i + 2) * matrix + j - 2] && squares[i * matrix + j] === squares[(i + 3) * matrix + j - 3] && squares[i * matrix + j] === squares[(i + 4) * matrix + j - 4]) {
                return { winner: squares[i * matrix + j], line: [i * matrix + j, (i + 1) * matrix + j - 1, (i + 2) * matrix + j - 2, (i + 3) * matrix + j - 3, (i + 4) * matrix + j - 4] };
            }
        }
    };
    return null;
}

ReactDOM.render(<Game />, document.getElementById("root"));
