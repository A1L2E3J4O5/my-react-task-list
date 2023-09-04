export const TaskList = () => {

    return(
        <div className="appTodo">
        <nav>
            <input type="text" /> <button className="agg">+</button> <br />
            <div className="task1"> <input type="checkbox" /> Buy a new gamung laptop</div>
            <div className="task2"><input type="checkbox" /> Complete a previous task </div>
            <div className="task3"><input type="checkbox" /> Create video for Youtube </div>
            <div className="task4"> <input type="checkbox" /> Create a new portofolio site</div>
            <button>Clear ALL</button>
        </nav>
        </div>
    )
}