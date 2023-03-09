export default function Todo({
    id,
    text,
    isCompleted,
    changeTodoStatus
}) {
    return (
        <tr className={isCompleted ? 'todo is-completed' : 'todo'}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => changeTodoStatus(id)}>Change status</button>
            </td>
        </tr>
    )
}